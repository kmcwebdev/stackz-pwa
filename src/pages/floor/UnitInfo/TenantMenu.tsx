import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

interface TenantMenuProps {
  handleShowFeedbackModal: (index: number) => void;
  toggleAddContactModal: () => void;
  index: number;
  activeTenant: boolean;
}

const TenantMenu: React.FC<TenantMenuProps> = ({
  handleShowFeedbackModal,
  toggleAddContactModal,
  activeTenant,
  index,
}) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button>
          <DotsVerticalIcon
            className={`-mr-1 ml-2 h-5 w-5 ${
              activeTenant ? 'text-primary' : 'text-secondary'
            }`}
            aria-hidden='true'
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
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <p
                  className={`
                            ${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            }
                            block px-4 py-2 text-sm
                          `}
                  onClick={toggleAddContactModal}
                >
                  Add Contact
                </p>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <p
                  className={`
                            ${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            }
                            block px-4 py-2 text-sm
                          `}
                >
                  View Contact
                </p>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={() => handleShowFeedbackModal(index)}
                  className={`
                            ${
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700'
                            }
                            block px-4 py-2 text-sm
                          `}
                >
                  Submit Feedback
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default TenantMenu;