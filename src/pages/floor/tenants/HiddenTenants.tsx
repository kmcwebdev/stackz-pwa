import React from 'react';
import { Text } from 'src/components/Text';
import { Tenant } from '.';

interface HiddenTenantsProps {
  data: Tenant[];
}

const HiddenTenants: React.FC<HiddenTenantsProps> = ({ data }) => {
  return (
    <>
      {data.map((tenant, i) => (
        <div
          key={i}
          className='p-2 mb-2 h-20 flex items-center rounded-md bg-gray-200'
        >
          <div className='flex flex-col'>
            <Text className='text-sm'>
              <strong className='text-primary'>Tenant: </strong>
              {tenant.name}
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
      ))}
    </>
  );
};

export default HiddenTenants;
