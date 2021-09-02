import { ChatAltIcon } from '@heroicons/react/outline';
import {
  CollectionIcon,
  DotsVerticalIcon,
  MailIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { Divider, Dropdown, Menu } from 'antd';
import React, { TouchEvent } from 'react';
import { FloorData } from 'src/assets/data';
import { Text } from 'src/components/Text';

interface UnitInfoProps {
  data: FloorData;
}

const UnitInfo: React.FC<UnitInfoProps> = ({ data }) => {
  const [showUnitDetails, setShowUnitDetails] = React.useState<boolean>(false);
  const [activeTenant, setActiveTenant] = React.useState<number>();
  const [touchedTenant, setTouchedTenant] = React.useState<number>(0);
  const [touchStart, setTouchStart] = React.useState<number>(0);
  const [touchEnd, setTouchEnd] = React.useState<number>(0);
  const [showHiddenTenantButton, setShowHiddenTenantButton] =
    React.useState<boolean>(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const handleShowUnitDetails = (index: number) => {
    setActiveTenant(index);
    setShowUnitDetails(true);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  function handleTouchMove(e: TouchEvent<HTMLDivElement>, i: number) {
    setTouchedTenant(i);
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 85) {
      setShowHiddenTenantButton(true);
    }

    if (touchStart - touchEnd < -85) {
      setShowHiddenTenantButton(false);
    }
  };

  return (
    <div>
      <div className='flex items-center gap-x-2'>
        <UserIcon className='h-5 w-5' />
        <Text className='font-semibold text-lg'>Contacts:</Text>
      </div>
      <div className='my-4 border-l-2 border-blue-300 pl-4'>
        <Text className='font-semibold'>John Doe</Text>
        <div className='flex items-center gap-x-2'>
          <PhoneIcon className='h-3 w-3' />
          <Text className='font-semibold text-sm'>(+63) 9195675658</Text>
        </div>
        <div className='flex items-center gap-x-2'>
          <MailIcon className='h-3 w-3' />
          <Text className='font-semibold text-sm'>john.doe@mail.com</Text>
        </div>
      </div>

      <div className='my-4 border-l-2 border-blue-300 pl-4'>
        <Text className='font-semibold'>Matthew Brimo</Text>
        <div className='flex items-center gap-x-2'>
          <PhoneIcon className='h-3 w-3' />
          <Text className='font-semibold text-sm'>(+63) 917 565 9896</Text>
        </div>
        <div className='flex items-center gap-x-2'>
          <MailIcon className='h-3 w-3' />
          <Text className='font-semibold text-sm'>
            matthew.brimo@kmcmaggroup.com
          </Text>
        </div>
      </div>

      <Divider />

      <div className='flex items-center gap-x-2'>
        <UserGroupIcon className='h-5 w-5' />
        <Text className='font-semibold text-lg'>Tenants:</Text>
      </div>

      {data.tenants.map((tenant, i) => (
        <div
          role='button'
          key={i}
          className={`relative border-b border-gray-100 py-2 px-2 flex items-center justify-between transition-all
          ${activeTenant === i && 'bg-blue-50'}
          ${
            touchedTenant === i &&
            showHiddenTenantButton &&
            tenant.name !== 'VACANT' &&
            'bg-gray-100'
          }
          `}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchEnd={handleTouchEnd}
          onTouchMove={(e) => handleTouchMove(e, i)}
        >
          <div
            onClick={() => handleShowUnitDetails(i)}
            className={`py-2 block transition-all ${
              touchedTenant === i &&
              showHiddenTenantButton &&
              tenant.name !== 'VACANT' &&
              'opacity-50'
            }`}
          >
            <Text className='font-semibold text-sm '>{tenant.name}</Text>

            <div className='flex flex-col'>
              <Text className='text-xs md:text-sm'>
                <strong>Lease Start: </strong>
                March 2018
              </Text>

              <Text className='text-xs md:text-sm'>
                <strong>Lease Expiry: </strong>
                February 2025
              </Text>
            </div>
          </div>
          <div className='w-8 border-gray-100 flex h-full items-center'>
            <Dropdown
              overlay={menu}
              placement='bottomRight'
              trigger={['click']}
              arrow
            >
              <DotsVerticalIcon className='h-4' />
            </Dropdown>
          </div>

          {tenant.name !== 'VACANT' && (
            <div
              className={`${
                showHiddenTenantButton && touchedTenant === i
                  ? 'w-20 px-4'
                  : 'w-0 p-0'
              } absolute right-0 h-full flex flex-col items-center justify-center text-center bg-red-400 overflow-hidden transition-all duration-75`}
            >
              <ChatAltIcon className='h-5 text-white' />
              <Text className='text-white text-xs'>Submit feedback</Text>
            </div>
          )}
        </div>
      ))}

      {showUnitDetails && (
        <>
          <Divider />

          <div className='flex items-center gap-x-2'>
            <CollectionIcon className='h-5 w-5' />
            <Text className='font-semibold text-lg'>Unit Details:</Text>
          </div>

          <div className='my-4 border-l-2 border-blue-300 pl-4'>
            <div className='flex flex-col'>
              <Text className='text-sm'>
                <strong>Floor: </strong>
                {data.floorNo}
              </Text>

              <Text className='text-sm'>
                <strong>Lease Floor Area: </strong>
                1,009 sqm
              </Text>

              <Text className='text-sm'>
                <strong>Base Price: </strong>
                Php 1,350
              </Text>

              <Text className='text-sm'>
                <strong>Min. lease Term: </strong>
                60
              </Text>

              <Text className='text-sm'>
                <strong>Hand-over Condition: </strong>
                Warm shell
              </Text>

              <Text className='text-sm'>
                <strong>Hand-over Date: </strong>
                01 March 2025
              </Text>

              <Text className='text-sm'>
                <strong>CUSA: </strong>
                165.00
              </Text>

              <Text className='text-sm'>
                <strong>Escalation Rate: </strong>
                5%
              </Text>

              <Text className='text-sm'>
                <strong>Parking Rent: </strong>
                5,500
              </Text>

              <Text className='text-sm'>
                <strong>AC Charges: </strong>
                15/tr
              </Text>

              <Text className='text-sm'>
                <strong>AC Extension Charges: </strong>
                N/A
              </Text>

              <Text className='text-sm'>
                <strong>Notes: </strong>
                N/A
              </Text>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UnitInfo;
