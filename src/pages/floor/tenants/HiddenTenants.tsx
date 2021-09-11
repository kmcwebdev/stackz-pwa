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
        <div key={i} className='my-2 bg-primary p-2 rounded-md'>
          <div className='flex flex-col'>
            <Text className='text-sm text-white'>
              <strong className='text-secondary'>Tenant: </strong>
              {tenant.name}
            </Text>

            <Text className='text-sm text-white'>
              <strong className='text-secondary'>Lease Floor Area: </strong>
              1,009 sqm
            </Text>

            <Text className='text-sm text-white'>
              <strong className='text-secondary'>Base Price: </strong>
              Php 1,350
            </Text>
          </div>
        </div>
      ))}
    </>
  );
};

export default HiddenTenants;
