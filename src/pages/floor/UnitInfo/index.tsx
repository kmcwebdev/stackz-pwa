import { ChatAltIcon } from '@heroicons/react/outline';
import { UserGroupIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import React, { TouchEvent } from 'react';
import { FloorData } from 'src/assets/data';
import Modal from 'src/components/Modal';
import { Text } from 'src/components/Text';
import Contacts from './Contacts';
import ContactForm from './forms/ContactForm';
import FeedbackForm from './forms/FeedbackForm';
import TenantMenu from './TenantMenu';
import UnitDetails from './UnitDetails';

interface IndexProps {
  data: FloorData;
}

const Index: React.FC<IndexProps> = ({ data }) => {
  const [showUnitDetails, setShowUnitDetails] = React.useState<boolean>(false);
  const [activeTenant, setActiveTenant] = React.useState<number>();
  const [touchedTenant, setTouchedTenant] = React.useState<number>();
  const [touchStart, setTouchStart] = React.useState<number>(0);
  const [touchEnd, setTouchEnd] = React.useState<number>(0);
  const [showHiddenTenantButton, setShowHiddenTenantButton] =
    React.useState<boolean>(false);
  const [feedbackModalState, setFeedbackModalState] =
    React.useState<boolean>(false);
  const [addContactModalState, setAddContactModalState] =
    React.useState<boolean>(false);

  const [activeTenantId, setActiveTenantId] = React.useState<number>();

  const toggleFeedbackModal = () => {
    setFeedbackModalState(!feedbackModalState);
  };

  const handleShowFeedbackModal = (index: number) => {
    setActiveTenantId(index);
    console.log(activeTenantId);
    toggleFeedbackModal();
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  function handleTouchMove(e: TouchEvent<HTMLDivElement>, i: number) {
    setTouchedTenant(i);
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>, index: number) => {
    if (touchStart - touchEnd > 150) {
      setShowHiddenTenantButton(true);
    }

    if (touchStart - touchEnd < -150) {
      setShowHiddenTenantButton(false);
    }
  };

  const handleShowUnitInfo = (index: number) => {
    setActiveTenant(index);
    setShowUnitDetails(true);
  };

  const toggleAddContactModal = () => {
    setAddContactModalState(!addContactModalState);
  };

  return (
    <div>
      <Contacts />
      <Divider className='my-2 bg-secondary' />

      <div className='flex items-center gap-x-2 mt-2'>
        <UserGroupIcon className='w-5 h-5 text-secondary' />
        <Text className='text-lg text-secondary font-semibold'>Tenants:</Text>
      </div>

      {data.tenants.map((tenant, i) => (
        <div
          role='button'
          key={i}
          className={`relative p-2 flex mt-2 items-center justify-between transition-all rounded-md
          ${activeTenant === i ? 'bg-secondary' : 'bg-primary'}
          `}
          onClick={() => handleShowUnitInfo(i)}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchEnd={(e) => handleTouchEnd(e, i)}
          onTouchMove={(e) => handleTouchMove(e, i)}
        >
          <div
            className={`py-2 w-full block transition-all ${
              touchedTenant === i &&
              showHiddenTenantButton &&
              tenant.name !== 'VACANT' &&
              'opacity-50'
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTenant === i ? 'text-primary' : 'text-secondary'
              }`}
            >
              {tenant.name}
            </Text>

            <div className='flex flex-col'>
              <Text
                className={`text-xs md:text-sm ${
                  activeTenant === i ? 'text-primary' : 'text-white'
                }`}
              >
                <strong
                  className={`${
                    activeTenant === i ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  Lease Start:{' '}
                </strong>
                March 2018
              </Text>

              <Text
                className={`text-xs md:text-sm ${
                  activeTenant === i ? 'text-primary' : 'text-white'
                }`}
              >
                <strong
                  className={`${
                    activeTenant === i ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  Lease Expiry:
                </strong>
                March 2018
              </Text>
            </div>
          </div>
          <div className='flex items-center w-8 h-full'>
            <TenantMenu
              activeTenant={activeTenant === i}
              index={i}
              toggleAddContactModal={toggleAddContactModal}
              handleShowFeedbackModal={handleShowFeedbackModal}
            />
          </div>

          <div
            className={`${
              showHiddenTenantButton && touchedTenant === i
                ? 'w-20 px-4'
                : 'w-0 p-0'
            } absolute right-0 h-full flex flex-col items-center justify-center text-center bg-red-400 overflow-hidden transition-all rounded-r-md`}
            style={{ transitionDuration: '.06s' }}
            onClick={() => handleShowFeedbackModal(i)}
          >
            <ChatAltIcon className='h-5 text-white' />
            <Text className='text-xs text-white'>Submit feedback</Text>
          </div>
        </div>
      ))}

      {showUnitDetails && <UnitDetails data={data} />}

      <Modal
        width='sm'
        title='Submit Feedback'
        open={feedbackModalState}
        setOpen={setFeedbackModalState}
      >
        <FeedbackForm toggleModal={toggleFeedbackModal} />
      </Modal>

      <Modal
        width='md'
        title='Add Contact'
        open={addContactModalState}
        setOpen={toggleAddContactModal}
      >
        <ContactForm toggleModal={toggleAddContactModal} />
      </Modal>
    </div>
  );
};

export default Index;
