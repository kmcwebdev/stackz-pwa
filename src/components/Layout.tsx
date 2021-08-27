import { Dialog, Transition } from '@headlessui/react';
import {
  HomeIcon,
  MenuAlt1Icon,
  OfficeBuildingIcon,
  XIcon,
} from '@heroicons/react/outline';
import { AdjustmentsIcon, ChartBarIcon } from '@heroicons/react/solid';
import { BackTop, Input } from 'antd';
import classnames from 'classnames';
import { Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccountDesktop from './Account-desktop';
import AccountMobile from './Account-mobile';

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

const Layout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className='relative flex h-screen overflow-hidden bg-white'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-40 flex lg:hidden'
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
                    <XIcon className='w-6 h-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex items-center flex-shrink-0 px-4'>
                <img
                  className='w-auto h-10'
                  src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/IMAGES/kmc-savills-300x146.webp'
                  alt='kmc-savills'
                />
              </div>
              <div className='flex-1 h-0 mt-5 overflow-y-auto'>
                <nav className='px-2'>
                  <div className='space-y-1'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classnames(
                          'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md',
                          {
                            'bg-gray-100 text-gray-900':
                              item.href === `/${pathname.split('/')[1]}`,
                            'text-gray-600 hover:text-gray-900 hover:bg-gray-50':
                              item.href !== `/${pathname.split('/')[1]}`,
                          }
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={classnames('mr-3 flex-shrink-0 h-6 w-6', {
                            'text-gray-500':
                              item.href === `/${pathname.split('/')[1]}`,
                            'text-gray-400 group-hover:text-gray-500':
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
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className='hidden lg:flex lg:flex-shrink-0'>
        <div className='flex flex-col w-64 pt-5 pb-4 bg-gray-100 border-r border-gray-200'>
          <div className='flex items-center flex-shrink-0 px-6'>
            <img
              className='w-auto h-10'
              src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/IMAGES/kmc-savills-300x146.webp'
              alt='kmc-savills'
            />
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-1 h-0 overflow-y-auto'>
            {/* User account dropdown */}
            <AccountDesktop />
            {/* Navigation */}
            <nav className='px-3 mt-6'>
              <div className='space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classnames(
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                      {
                        'bg-gray-200 text-gray-900': item.current,
                        'text-gray-700 hover:text-gray-900 hover:bg-gray-50':
                          !item.current,
                      }
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className={classnames('mr-3 flex-shrink-0 h-6 w-6', {
                        'text-gray-500': item.current,
                        'text-gray-400 group-hover:text-gray-500':
                          !item.current,
                      })}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Main column */}
      <div className='flex flex-col flex-1 w-0 overflow-hidden'>
        {/* Mobile header */}
        <div className='relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:hidden'>
          <button
            type='button'
            className='px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt1Icon className='w-6 h-6' aria-hidden='true' />
          </button>
          <div className='flex justify-between flex-1 px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center'>MOBILE HEADER</div>
            <AccountMobile />
          </div>
        </div>
        <main
          id='my-main'
          className='relative z-0 flex-1 overflow-y-auto focus:outline-none'
        >
          {/* Page title */}
          <div className='sticky top-0 z-10 p-4 bg-white border-b border-gray-200 sm:px-6 lg:px-8'>
            {pathname === '/dashboard' && (
              <h1 className='text-xl font-medium leading-6 text-gray-900'>
                Dashboard
              </h1>
            )}
            {pathname === '/buildings' && (
              <div className='min-w-0 flex justify-center md:justify-between'>
                <h1 className='hidden md:block text-lg font-medium leading-6 text-gray-900 sm:truncate'>
                  Building list
                </h1>
                <Input.Search
                  className='md:w-80'
                  placeholder='Search Building'
                />
              </div>
            )}

            {(pathname === '/buildings/1/floors' ||
              pathname === '/buildings/2/floors') && (
              <div className='min-w-0 flex justify-center md:justify-between items-center gap-x-4'>
                <h1 className='hidden md:block text-lg font-medium leading-6 text-gray-900 sm:truncate'>
                  Floors
                </h1>
                <div className='flex gap-x-4 items-center flex-1 md:flex-initial'>
                  <Input.Search
                    className='md:w-80'
                    placeholder='Search Floor'
                  />
                  <div className='flex items-center gap-x-2'>
                    <AdjustmentsIcon className='h-6 text-gray-500' />
                    <ChartBarIcon className='h-6 text-gray-500' />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='m-2 md:m-10'>{children}</div>
        </main>
        <BackTop target={() => document.getElementById('my-main')!} />
      </div>
    </div>
  );
};

export default Layout;
