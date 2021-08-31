import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Dispatch, Fragment, SetStateAction } from 'react';

interface SiderDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

const SiderDialog: React.FC<SiderDialogProps> = ({
  open,
  setOpen,
  title,
  children,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-hidden'
        onClose={setOpen}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0' />
          <div className='fixed inset-y-0 right-0 flex max-w-full pl-0.5 md:pl-10'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-lg'>
                <div className='flex flex-col h-full overflow-y-scroll bg-white shadow-xl'>
                  <div className='w-full px-4 py-6 border-b sm:px-6 sticky top-0 bg-white z-50'>
                    <div className='flex items-start justify-between'>
                      <Dialog.Title className='text-xl font-bold text-gray-900'>
                        {title}
                      </Dialog.Title>
                      <div className='flex items-center ml-3 h-7'>
                        <button
                          type='button'
                          className='text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='w-6 h-6' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='relative flex-1 px-4 my-6 sm:px-6'>
                    {/* Replace with your content */}
                    {children}
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SiderDialog;
