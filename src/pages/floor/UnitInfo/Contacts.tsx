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
          <UserIcon className='w-5 h-5 text-secondary' />
          <Text className='font-semibold text-lg text-secondary'>
            Contacts:
          </Text>
        </div>
        <PlusCircleIcon
          className='h-5 text-secondary hover:text-gray-300 cursor-pointer'
          onClick={toggleAddContactModal}
        />
      </div>

      <div className='p-2 my-4 bg-primary rounded-md'>
        <Text className='font-semibold text-secondary'>John Doe</Text>
        <div className='flex items-center gap-x-2'>
          <PhoneIcon className='w-3 h-3 text-secondary' />
          <Text className='text-xs text-white'>(+63)9195675658</Text>
        </div>
        <div className='flex items-center gap-x-2'>
          <MailIcon className='w-3 h-3 text-secondary' />
          <Text className='text-xs text-white'>john.doe@mail.com</Text>
        </div>
      </div>

      <div className='p-2 my-4 bg-primary rounded-md'>
        <Text className='font-semibold text-secondary'>Jane Doe</Text>
        <div className='flex items-center gap-x-2'>
          <PhoneIcon className='w-3 h-3 text-secondary' />
          <Text className='text-xs text-white'>(+63)9195675658</Text>
        </div>
        <div className='flex items-center gap-x-2'>
          <MailIcon className='w-3 h-3 text-secondary' />
          <Text className='text-xs text-white'>john.doe@mail.com</Text>
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
