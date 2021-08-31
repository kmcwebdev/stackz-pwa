import {
  CollectionIcon,
  MailIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { Divider } from 'antd';
import React from 'react';
import { FloorData } from 'src/assets/data';
import { Text } from 'src/components/Text';

interface UnitInfoProps {
  data: FloorData;
}

const UnitInfo: React.FC<UnitInfoProps> = ({ data }) => {
  return (
    <div>
      <div className='flex items-center gap-x-2'>
        <UserIcon className='h-5 w-5' />
        <Text className='font-semibold text-lg'>Contacts:</Text>
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
        <div key={i} className='my-4 border-l-2 border-blue-300 pl-4'>
          <Text className='font-semibold'>{tenant.name}</Text>
          <div className='flex flex-col'>
            <Text className='text-sm'>
              <strong>Lease Start: </strong>
              March 2018
            </Text>

            <Text className='text-sm'>
              <strong>Lease Expiry: </strong>
              February 2025
            </Text>
          </div>
        </div>
      ))}

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
    </div>
  );
};

export default UnitInfo;
