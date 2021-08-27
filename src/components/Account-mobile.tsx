import { Menu, Transition } from '@headlessui/react';
import classnames from 'classnames';
import { Fragment } from 'react';

const AccountMobile: React.FC = () => {
  return (
    <div className='flex items-center'>
      {/* Profile dropdown */}
      <Menu as='div' className='relative ml-3'>
        <div>
          <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
            <span className='sr-only'>Open user menu</span>
            <img
              className='w-8 h-8 rounded-full'
              src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
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
          <Menu.Items className='absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
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
    </div>
  );
};

export default AccountMobile;
