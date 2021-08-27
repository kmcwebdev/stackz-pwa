import { Button, Divider, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { floorData } from 'src/assets/data';
import Tenants from 'src/components/Tenants';

const Index: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Lease Expiry');

  const officeOptions = [
    { label: 'Lease Expiry', value: 'Lease Expiry' },
    { label: 'Tenant Classification', value: 'Tenant Classification' },
  ];

  const officeOptionOnChanged = (e: RadioChangeEvent) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='w-full p-1'>
      <Radio.Group
        options={officeOptions}
        onChange={officeOptionOnChanged}
        value={selectedOption}
        optionType='button'
        buttonStyle='solid'
      />

      <Divider className='my-4' />

      {selectedOption === 'Lease Expiry' && (
        <div className='w-full'>
          <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 gap-4'>
            <Button type='default'>2020</Button>
            <Button type='default'>2021</Button>
            <Button type='default'>2022</Button>
            <Button type='default'>2023</Button>
            <Button type='default'>2024</Button>
            <Button type='default'>2025</Button>
          </div>
          <Divider className='my-4' />
        </div>
      )}

      <div className='relative flex md:space-x-2'>
        <div className='w-20 text-xs pl-2 font-semibold'> Floor</div>
        <div className='flex-1 text-xs font-semibold'> Tenant</div>
      </div>
      {floorData.map((floor, i) => (
        <div key={i} className='relative flex my-2 h-20 space-x-1 md:space-x-2'>
          <div className='w-16 h-full md:w-20'>
            <div className='flex flex-col items-center justify-center h-full bg-gray-200 border-2 border-white rounded-md'>
              <span className='text-xl font-semibold uppercase'>
                {floor.floorNo}
              </span>
            </div>
          </div>

          <div className='relative flex flex-1 w-20 h-full'>
            <Tenants data={floor.tenants} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
