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
        <div key={i} className='my-4 border-l-2 border-blue-300 pl-4'>
          <div className='flex flex-col'>
            <Text className='text-sm'>
              <strong>Tenant: </strong>
              {tenant.name}
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
      ))}
    </>
  );
};

export default HiddenTenants;
