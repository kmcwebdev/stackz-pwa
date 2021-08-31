import { ChartBarIcon, OfficeBuildingIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import React from 'react';
import { Text } from 'src/components/Text';

const BuildingInfo: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-x-2'>
        <OfficeBuildingIcon className='h-5 w-5' />
        <Text className='text-lg font-semibold'>Accralaw Tower</Text>
      </div>

      <Text className='text-xs'>
        30th St. cor. 2nd Avenue, Crescent Park West, Bonifacio Global City,
        Taguig
      </Text>

      <Divider />

      <div className='flex items-center gap-x-2'>
        <ChartBarIcon className='h-5 w-5' />
        <Text className='text-lg font-semibold'>Chart</Text>
      </div>

      <div className='w-full h-96 bg-gray-300 my-4'></div>
    </div>
  );
};

export default BuildingInfo;
