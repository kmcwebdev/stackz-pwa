import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { NavigationItem } from '.';
import NavigationMenu from './NavigationMenu';

interface MobileSidebarProps {
  navigation: NavigationItem[];
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  navigation,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <Transition.Root show={sidebarOpen}>
      <Dialog
        as='div'
        className='fixed inset-0 flex z-40 md:hidden'
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex-1 flex flex-col w-full bg-primary'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 -mr-12 pt-5 pr-3'>
                <XIcon
                  className='h-5 w-5 text-white'
                  aria-hidden='true'
                  onClick={() => setSidebarOpen(false)}
                />
              </div>
            </Transition.Child>
            <NavigationMenu
              navigation={navigation}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
        </Transition.Child>
        <div className='flex-shrink-0 w-14' aria-hidden='true'>
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;
