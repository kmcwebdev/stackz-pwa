import {
  MailIcon,
  PhoneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import React from 'react';
import Modal from 'src/components/Modal';
import { Text } from 'src/components/Text';
import ContactForm from './forms/ContactForm';

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  const [addContactModalState, setAddContactModalState] =
    React.useState<boolean>(false);

  const toggleAddContactModal = () => {
    setAddContactModalState(!addContactModalState);
  };
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <UserGroupIcon className='w-5 h-5 text-primary' />
          <Text className='font-semibold text-primary'>Contacts:</Text>
        </div>
        <PlusCircleIcon
          className='h-5 text-primary hover:text-blue-500 cursor-pointer'
          onClick={toggleAddContactModal}
        />
      </div>

      <div className='p-4 my-4 bg-gray-200 rounded-md'>
        <Text className='font-semibold text-primary'>John Doe</Text>
        <div className='flex items-center gap-x-2'>
          <PhoneIcon className='w-3 h-3 text-primary' />
          <Text className='text-xs font-semibold text-primary'>
            (+63)9195675658
          </Text>
        </div>
        <div className='flex items-center gap-x-2'>
          <MailIcon className='w-3 h-3 text-primary' />
          <Text className='text-xs font-semibold text-primary'>
            john.doe@mail.com
          </Text>
        </div>
      </div>

      <Modal
        width='md'
        title='Add Contact'
        open={addContactModalState}
        setOpen={toggleAddContactModal}
      >
        <ContactForm toggleModal={toggleAddContactModal} />
      </Modal>
    </>
  );
};

export default Contacts;
