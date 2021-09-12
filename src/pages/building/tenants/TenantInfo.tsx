import React from 'react';
import { Text } from 'src/components/Text';
import { Tenant } from '.';

interface TenantInfoProps {
  data: Tenant;
}

const TenantInfo: React.FC<TenantInfoProps> = ({ data }) => {
  return (
    <div className='pl-4 my-4 border-l-2 border-blue-300'>
      <div className='flex flex-col'>
        <Text className='text-sm'>
          <strong>Tenant: </strong>
          {data.name}
        </Text>
        <Text className='text-sm'>
          <strong>Lease Floor Area: </strong>
          1,009 sqm
        </Text>
        <Text className='text-sm'>
          <strong>Base Price: </strong>
          Php 1,350
        </Text>
      </div>
    </div>
  );
};

export default TenantInfo;
