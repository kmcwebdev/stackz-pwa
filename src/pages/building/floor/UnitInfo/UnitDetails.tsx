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
        <CollectionIcon className='w-5 h-5' />
        <Text className='text-lg font-semibold'>Unit Details:</Text>
      </div>

      <div className='pl-4 my-4 border-l-2 border-blue-300'>
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
  );
};

export default UnitDetails;
