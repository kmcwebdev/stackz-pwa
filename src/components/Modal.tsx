import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import classNames from 'classnames';
import React, { Fragment, SetStateAction, useRef } from 'react';

interface ModalProps {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  width: 'sm' | 'md' | 'lg';
}

const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  title,
  children,
  width,
}) => {
  const cancelButtonRef = useRef(null);

  const modalWidth = classNames(
    {
      'w-full md:w-4/12': width === 'sm',
      'w-full md:w-6/12': width === 'md',
      'w-full md:w-10/12': width === 'lg',
    },
    'inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6'
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-y-auto'
        style={{ zIndex: 50 }}
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className={modalWidth}>
              <div>
                <div className='flex items-center justify-between'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg leading-6 font-medium text-gray-900'
                  >
                    {title}
                  </Dialog.Title>

                  <XIcon
                    className='h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-all'
                    onClick={() => setOpen(false)}
                  />
                </div>
                <Divider className='my-4' />
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
