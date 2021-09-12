import {
  MailIcon,
  PhoneIcon,
  PlusCircleIcon,
  UserIcon,
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
          <UserIcon className='w-5 h-5' />
          <Text className='text-lg font-semibold'>Contacts:</Text>
        </div>
        <PlusCircleIcon
          className='h-5 text-gray-400 hover:text-blue-500 cursor-pointer'
          onClick={toggleAddContactModal}
        />
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
