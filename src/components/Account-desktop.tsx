import { Menu, Transition } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/outline';
import classnames from 'classnames';
import { Fragment } from 'react';

const AccountDesktop: React.FC = () => {
  return (
    <Menu as='div' className='relative inline-block px-3 mt-6 text-left'>
      <div>
        <Menu.Button className='group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500'>
          <span className='flex items-center justify-between w-full'>
            <span className='flex items-center justify-between min-w-0 space-x-3'>
              <img
                className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'
                src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                alt=''
              />
              <span className='flex flex-col flex-1 min-w-0'>
                <span className='text-sm font-medium text-gray-900 truncate'>
                  Jessy Schwarz
                </span>
                <span className='text-sm text-gray-500 truncate'>
                  @jessyschwarz
                </span>
              </span>
            </span>
            <SelectorIcon
              className='flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500'
              aria-hidden='true'
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 right-0 z-10 mx-3 mt-1 origin-top bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classnames('block px-4 py-2 text-sm', {
                    'bg-gray-100 text-gray-900': active,
                    'text-gray-700': !active,
                  })}
                >
                  View profile
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classnames('block px-4 py-2 text-sm', {
                    'bg-gray-100 text-gray-900': active,
                    'text-gray-700': !active,
                  })}
                >
                  Settings
                </span>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classnames('block px-4 py-2 text-sm', {
                    'bg-gray-100 text-gray-900': active,
                    'text-gray-700': !active,
                  })}
                >
                  Logout
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AccountDesktop;
