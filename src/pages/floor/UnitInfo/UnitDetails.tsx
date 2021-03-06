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
      <Divider />

      <div className='flex items-center gap-x-2'>
        <CollectionIcon className='w-5 h-5 text-primary' />
        <Text className='font-semibold text-primary'>Unit Details:</Text>
      </div>

      <div className='p-2 my-4 bg-gray-200 rounded-md'>
        <div className='flex flex-col'>
          <Text className='text-sm'>
            <strong className='text-primary'>Floor: </strong>
            {data.floorNo}
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Lease Floor Area: </strong>
            1,009 sqm
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Base Price: </strong>
            Php 1,350
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Min. lease Term: </strong>
            60
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Hand-over Condition: </strong>
            Warm shell
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Hand-over Date: </strong>
            01 March 2025
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>CUSA: </strong>
            165.00
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Escalation Rate: </strong>
            5%
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Parking Rent: </strong>
            5,500
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>AC Charges: </strong>
            15/tr
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>AC Extension Charges: </strong>
            N/A
          </Text>

          <Text className='text-sm'>
            <strong className='text-primary'>Notes: </strong>
            N/A
          </Text>
        </div>
      </div>
    </>
  );
};

export default UnitDetails;
