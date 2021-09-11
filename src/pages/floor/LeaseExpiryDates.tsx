import { Menu, Transition } from '@headlessui/react';
import { AdjustmentsIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

interface LeaseExpiryDatesProps {}

const leastExpiryButtons: string[] = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025+',
  'Unavailable',
  'Available',
];

const LeaseExpiryDates: React.FC<LeaseExpiryDatesProps> = () => {
  const randomizeBtnBorder = (value: string): string => {
    let border = 'border-gray-400';
    if (value === 'Unavailable') {
      border = 'border-red-500 col-span-3';
    }
    if (value === 'Available') {
      border = 'border-green-500 col-span-3';
    }

    if (value !== 'Unavailable' && value !== 'Available') {
      const date = new Date();
      const year = date.getFullYear();
      const converted = parseInt(value.replace('+', ''));

      if (converted === year) {
        border = 'border-indigo-300 col-span-2';
      }
      if (converted < year) {
        border = 'border-gray-400 col-span-2';
      }

      if (converted > year) {
        border = 'border-indigo-200 col-span-2';
      }
    }
    return border;
  };

  return (
    <Menu as='div' className='relative text-left h-5'>
      <div>
        <Menu.Button className='h-5 w-5 text-primary'>
          <AdjustmentsIcon />
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
        <Menu.Items
          className='origin-top-right absolute -right-16 mt-2 w-64 flex rounded-md shadow-lg bg-gray-100 border border-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          style={{ zIndex: 60 }}
        >
          <div className='p-4 grid grid-cols-6 gap-2 w-full'>
            {leastExpiryButtons.map((btn, i) => (
              <Menu.Item key={i}>
                <div
                  className={`p-2 text-sm border-2 rounded-md text-center ${randomizeBtnBorder(
                    btn
                  )}`}
                >
                  {btn}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LeaseExpiryDates;
