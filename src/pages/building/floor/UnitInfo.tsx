import { Menu, Transition } from '@headlessui/react';
import { ChatAltIcon } from '@heroicons/react/outline';
import {
  CollectionIcon,
  DotsVerticalIcon,
  MailIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { Button, Divider, Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import React, { Fragment, TouchEvent } from 'react';
import { FloorData } from 'src/assets/data';
import Modal from 'src/components/Modal';
import { Text } from 'src/components/Text';
import { useWindowSize } from 'src/utils/use-window-size';

interface UnitInfoProps {
  data: FloorData;
}

const UnitInfo: React.FC<UnitInfoProps> = ({ data }) => {
  const { width } = useWindowSize();
  const [showUnitDetails, setShowUnitDetails] = React.useState<boolean>(false);
  const [activeTenant, setActiveTenant] = React.useState<number>();
  const [touchedTenant, setTouchedTenant] = React.useState<number>(0);
  const [touchStart, setTouchStart] = React.useState<number>(0);
  const [touchEnd, setTouchEnd] = React.useState<number>(0);
  const [showHiddenTenantButton, setShowHiddenTenantButton] =
    React.useState<boolean>(false);
  const [feedbackModalState, setFeedbackModalState] =
    React.useState<boolean>(false);
  const [activeTenantId, setActiveTenantId] = React.useState<number>();

  const toggleFeedbackModal = () => {
    setFeedbackModalState(!feedbackModalState);
  };

  const handleShowFeedbackModal = (index: number) => {
    setActiveTenantId(index);
    toggleFeedbackModal();
  };

  const [feedbackForm] = useForm();

  const submitFeedbackForm = () => {
    feedbackForm.validateFields().then((values) => console.log(values));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  function handleTouchMove(e: TouchEvent<HTMLDivElement>, i: number) {
    setTouchedTenant(i);
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = (index: number) => {
    if (touchStart - touchEnd > 150) {
      setShowHiddenTenantButton(true);
    }

    if (touchStart - touchEnd < -150) {
      setShowHiddenTenantButton(false);
    }

    if (touchStart - touchEnd < 150) {
      setActiveTenant(index);
      setShowUnitDetails(true);
    }
  };

  const handleShowUnitInfo = (index: number) => {
    setActiveTenant(index);
    setShowUnitDetails(true);
  };

  return (
    <div>
      <div className='flex items-center gap-x-2'>
        <UserIcon className='w-5 h-5' />
        <Text className='text-lg font-semibold'>Contacts:</Text>
      </div>
      <div className='pl-4 my-4 border-l-2 border-blue-300'>
        <Text className='font-semibold'>John Doe</Text>
        <div className='flex items-center gap-x-2'>
          <PhoneIcon className='w-3 h-3' />
          <Text className='text-sm font-semibold'>(+63)9195675658</Text>
        </div>
        <div className='flex items-center gap-x-2'>
          <MailIcon className='w-3 h-3' />
          <Text className='text-sm font-semibold'>john.doe@mail.com</Text>
        </div>
      </div>

      <Divider />

      <div className='flex items-center gap-x-2'>
        <UserGroupIcon className='w-5 h-5' />
        <Text className='text-lg font-semibold'>Tenants:</Text>
      </div>

      {data.tenants.map((tenant, i) => (
        <div
          role='button'
          key={i}
          className={`relative border-b border-gray-100 py-2 px-2 flex items-center justify-between transition-all
          ${activeTenant === i && 'bg-blue-50'}
          ${touchedTenant === i && showHiddenTenantButton && 'bg-gray-100'}
          `}
          onClick={width > 768 ? () => handleShowUnitInfo(i) : undefined}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchEnd={() => handleTouchEnd(i)}
          onTouchMove={(e) => handleTouchMove(e, i)}
        >
          <div
            className={`py-2 block transition-all ${
              touchedTenant === i &&
              showHiddenTenantButton &&
              tenant.name !== 'VACANT' &&
              'opacity-50'
            }`}
          >
            <Text className='text-sm font-semibold '>{tenant.name}</Text>

            <div className='flex flex-col'>
              <Text className='text-xs md:text-sm'>
                <strong>Lease Start: </strong>
                March 2018
              </Text>

              <Text className='text-xs md:text-sm'>
                <strong>Lease Expiry: </strong>
                February 2025
              </Text>
            </div>
          </div>
          <div className='flex items-center w-8 h-full border-gray-100'>
            <Menu as='div' className='relative inline-block text-left'>
              <div>
                <Menu.Button>
                  <DotsVerticalIcon
                    className='-mr-1 ml-2 h-5 w-5'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={`
                            ${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            }
                            block px-4 py-2 text-sm
                          `}
                        >
                          Menu Item 1
                        </p>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={`
                            ${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            }
                            block px-4 py-2 text-sm
                          `}
                        >
                          Menu Item 2
                        </p>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={`
                            ${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            }
                            block px-4 py-2 text-sm
                          `}
                        >
                          Menu Item 3
                        </p>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => handleShowFeedbackModal(i)}
                          className={`
                            ${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            }
                            block px-4 py-2 text-sm
                          `}
                        >
                          Submit Feedback
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div
            className={`${
              showHiddenTenantButton && touchedTenant === i
                ? 'w-20 px-4'
                : 'w-0 p-0'
            } absolute right-0 h-full flex flex-col items-center justify-center text-center bg-red-400 overflow-hidden transition-all`}
            style={{ transitionDuration: '.06s' }}
            onClick={() => handleShowFeedbackModal(i)}
          >
            <ChatAltIcon className='h-5 text-white' />
            <Text className='text-xs text-white'>Submit feedback</Text>
          </div>
        </div>
      ))}

      {showUnitDetails && (
        <>
          <Divider />

          <div className='flex items-center gap-x-2'>
            <CollectionIcon className='w-5 h-5' />
            <Text className='text-lg font-semibold'>Unit Details:</Text>
          </div>

          <div className='pl-4 my-4 border-l-2 border-blue-300'>
            <div className='flex flex-col'>
              <Text className='text-sm'>
                <strong>Floor: </strong>
                {data.floorNo}
              </Text>

              <Text className='text-sm'>
                <strong>Lease Floor Area: </strong>
                1,009 sqm
              </Text>

              <Text className='text-sm'>
                <strong>Base Price: </strong>
                Php 1,350
              </Text>

              <Text className='text-sm'>
                <strong>Min. lease Term: </strong>
                60
              </Text>

              <Text className='text-sm'>
                <strong>Hand-over Condition: </strong>
                Warm shell
              </Text>

              <Text className='text-sm'>
                <strong>Hand-over Date: </strong>
                01 March 2025
              </Text>

              <Text className='text-sm'>
                <strong>CUSA: </strong>
                165.00
              </Text>

              <Text className='text-sm'>
                <strong>Escalation Rate: </strong>
                5%
              </Text>

              <Text className='text-sm'>
                <strong>Parking Rent: </strong>
                5,500
              </Text>

              <Text className='text-sm'>
                <strong>AC Charges: </strong>
                15/tr
              </Text>

              <Text className='text-sm'>
                <strong>AC Extension Charges: </strong>
                N/A
              </Text>

              <Text className='text-sm'>
                <strong>Notes: </strong>
                N/A
              </Text>
            </div>
          </div>
        </>
      )}

      <Modal
        title='Submit Feedback'
        open={feedbackModalState}
        setOpen={setFeedbackModalState}
      >
        <Form
          layout='vertical'
          form={feedbackForm}
          onFinish={submitFeedbackForm}
        >
          <Form.Item
            name='feedback'
            label='Feedback'
            rules={[{ required: true, message: 'Please enter feedback!' }]}
          >
            <TextArea rows={8} />
          </Form.Item>

          <Divider className='my-4' />
          <div className='flex justify-end'>
            <div className='grid grid-cols-2 gap-2 md:w-5/12'>
              <Button type='default' onClick={toggleFeedbackModal}>
                Cancel
              </Button>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default UnitInfo;
