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
    if (activeTenant === index) {
      setActiveTenant(undefined);
      setShowUnitDetails(false);
    } else {
      setActiveTenant(index);
      setShowUnitDetails(true);
    }
  };

  const toggleAddContactModal = () => {
    setAddContactModalState(!addContactModalState);
  };

  return (
    <div>
      <Contacts />
      <Divider />

      <div className='flex items-center gap-x-2 mb-4'>
        <UserGroupIcon className='w-5 h-5 text-primary' />
        <Text className='font-semibold text-primary'>Tenants:</Text>
      </div>

      {data.tenants.map((tenant, i) => (
        <div
          key={i}
          className={`transition-all rounded-md w-full overflow-hidden relative
          ${activeTenant === i && 'bg-gray-200'}
          ${touchedTenant === i && showHiddenTenantButton && 'bg-gray-100'}
          `}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchEnd={(e) => handleTouchEnd(e, i)}
          onTouchMove={(e) => handleTouchMove(e, i)}
        >
          <div
            className='flex items-center transition-all h-24 relative'
            style={{
              width: '130%',
              right:
                showHiddenTenantButton && touchedTenant === i ? '30%' : '0',
            }}
          >
            <div
              className='p-2 block transition-all'
              style={{ width: '90%' }}
              onClick={() => handleShowUnitInfo(i)}
            >
              <Text className='text-sm font-semibold text-primary'>
                {tenant.name}
              </Text>

              <div className='flex flex-col'>
                <Text className='text-xs md:text-sm'>
                  <strong className='text-primary'>Lease Start: </strong>
                  March 2018
                </Text>

                <Text className='text-xs md:text-sm'>
                  <strong className='text-primary'>Lease Expiry: </strong>
                  February 2025
                </Text>
              </div>
            </div>
            <div
              className='flex items-center h-full border-gray-100 relative'
              style={{ width: '20%' }}
            >
              <TenantMenu
                index={i}
                toggleAddContactModal={toggleAddContactModal}
                handleShowFeedbackModal={handleShowFeedbackModal}
              />
            </div>

            <div
              style={{ width: '30%' }}
              className='h-full bg-warning transition-all'
              onClick={() => handleShowFeedbackModal(i)}
            >
              <div className='flex flex-col items-center h-full justify-center'>
                <ChatAltIcon className='h-5 text-white' />
                <Text className='text-xs text-white text-center'>
                  Submit feedback
                </Text>
              </div>
            </div>
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
