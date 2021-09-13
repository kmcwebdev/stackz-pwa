import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, OfficeBuildingIcon, XIcon } from '@heroicons/react/outline';
import classnames from 'classnames';
import React, { Fragment } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'src/utils/use-window-size';
import UserPane from './UserPane';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navigation = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon,
    current: false,
  },
  {
    name: 'Building',
    href: '/buildings',
    icon: OfficeBuildingIcon,
    current: true,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();

  const { width } = useWindowSize();

  const topSection: JSX.Element = (
    <>
      <div className='flex items-center flex-shrink-0 px-4'>
        <img
          className='w-auto h-10'
          src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/IMAGES/kmc-savills-300x146.webp'
          alt='kmc-savills'
        />
      </div>
      <UserPane />
    </>
  );

  const sideNavigation: JSX.Element = (
    <div className='flex flex-col flex-1 h-0 overflow-y-auto'>
      <nav className='px-3 mt-6'>
        <div className='space-y-1'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classnames(
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                {
                  'bg-gray-200 text-primary':
                    item.href === `/${pathname.split('/')[1]}`,
                  'text-primary hover:text-gray-600 hover:bg-gray-50':
                    item.href !== `/${pathname.split('/')[1]}`,
                }
              )}
              onClick={() => setSidebarOpen(false)}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classnames('mr-3 flex-shrink-0 h-6 w-6', {
                  'text-primary': item.href === `/${pathname.split('/')[1]}`,
                  'text-primary group-hover:text-gray-600':
                    item.href !== `/${pathname.split('/')[1]}`,
                })}
                aria-hidden='true'
              />
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className='hidden lg:flex lg:flex-shrink-0'>
        <div className='flex flex-col w-64 pt-5 pb-4 bg-primary border-r border-gray-200'>
          {topSection}
          {sideNavigation}
        </div>
      </div>

      {width <= 768 && (
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-40 flex md:hidden'
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
              <div className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 pt-2 -mr-12'>
                    <button
                      type='button'
                      className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='w-6 h-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>

                {topSection}
                {sideNavigation}
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'></div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
};

export default Sidebar;
