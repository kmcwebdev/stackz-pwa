import React from 'react';
import { Text } from 'src/components/Text';
import { Tenant } from '.';

interface TenantInfoProps {
  data: Tenant;
}

const TenantInfo: React.FC<TenantInfoProps> = ({ data }) => {
  return (
    <div className='p-2 bg-gray-200 rounded-md h-20 flex items-center'>
      <div className='flex flex-col'>
        <Text className='text-sm'>
          <strong className='text-primary'>Tenant: </strong>
          {data.name}
        </Text>
        <Text className='text-xs'>
          <strong className='text-primary'>Lease Floor Area: </strong>
          1,009 sqm
        </Text>
        <Text className='text-xs'>
          <strong className='text-primary'>Base Price: </strong>
          Php 1,350
        </Text>
      </div>
    </div>
  );
};

export default TenantInfo;
