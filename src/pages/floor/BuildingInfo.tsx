import { ChartBarIcon, OfficeBuildingIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import React from 'react';
import { Text } from 'src/components/Text';

const BuildingInfo: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-x-2'>
        <OfficeBuildingIcon className='h-5 w-5 text-secondary' />
        <Text className='text-lg font-semibold text-secondary'>
          Accralaw Tower
        </Text>
      </div>

      <Text className='text-xs text-white p-2 bg-primary rounded-md my-2'>
        30th St. cor. 2nd Avenue, Crescent Park West, Bonifacio Global City,
        Taguig
      </Text>

      <Divider className='my-2 bg-secondary' />

      <div className='flex items-center gap-x-2'>
        <ChartBarIcon className='h-5 w-5 text-secondary' />
        <Text className='text-lg font-semibold text-secondary'>Chart</Text>
      </div>

      <div className='w-full h-96 bg-primary my-4 rounded-md'></div>
    </div>
  );
};

export default BuildingInfo;
