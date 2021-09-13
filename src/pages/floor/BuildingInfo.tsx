import { ChartPieIcon } from '@heroicons/react/outline';
import { ChartBarIcon, OfficeBuildingIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import React from 'react';
import { Text } from 'src/components/Text';

const BuildingInfo: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-x-2'>
        <OfficeBuildingIcon className='h-5 w-5 text-primary' />
        <Text className='font-semibold text-primary'>Accralaw Tower</Text>
      </div>

      <Text className='text-xs'>
        30th St. cor. 2nd Avenue, Crescent Park West, Bonifacio Global City,
        Taguig
      </Text>

      <Divider className='my-2' />

      <div className='flex items-center gap-x-2'>
        <ChartBarIcon className='h-5 w-5 text-primary' />
        <Text className='font-semibold text-primary'>Chart</Text>
      </div>

      <div className='w-full h-56 rounded-md bg-gray-300 grid place-items-center'>
        <ChartPieIcon className='h-10 md:h-16 text-primary' />
      </div>
    </div>
  );
};

export default BuildingInfo;
