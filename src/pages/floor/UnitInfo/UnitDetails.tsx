import { CollectionIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import React from 'react';
import { FloorData } from 'src/assets/data';
import { Text } from 'src/components/Text';

interface UnitDetailsProps {
  data: FloorData;
}

const UnitDetails: React.FC<UnitDetailsProps> = ({ data }) => {
  return (
    <>
      <Divider className='my-4 bg-secondary' />

      <div className='flex items-center gap-x-2'>
        <CollectionIcon className='w-5 h-5 text-secondary' />
        <Text className='text-lg font-semibold text-secondary'>
          Unit Details:
        </Text>
      </div>

      <div className='p-4 bg-primary rounded-md mt-2'>
        <div className='flex flex-col'>
          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Floor: </strong>
            {data.floorNo}
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Lease Floor Area: </strong>
            1,009 sqm
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Base Price: </strong>
            Php 1,350
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Min. lease Term: </strong>
            60
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Hand-over Condition: </strong>
            Warm shell
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Hand-over Date: </strong>
            01 March 2025
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>CUSA: </strong>
            165.00
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Escalation Rate: </strong>
            5%
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Parking Rent: </strong>
            5,500
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>AC Charges: </strong>
            15/tr
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>AC Extension Charges: </strong>
            N/A
          </Text>

          <Text className='text-sm text-white'>
            <strong className='text-secondary'>Notes: </strong>
            N/A
          </Text>
        </div>
      </div>
    </>
  );
};

export default UnitDetails;
