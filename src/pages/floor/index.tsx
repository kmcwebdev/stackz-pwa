import {
  AdjustmentsIcon,
  ChartBarIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import { Button, Divider, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { floorData } from 'src/assets/data';
import SiderDialog from 'src/components/Sider-dialog';
import Tenants from 'src/components/Tenants';

const Index: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Lease Expiry');
  const [siderContent, setSiderContent] = useState<
    'Filter' | 'Chart' | 'Description'
  >();
  const [siderOpen, setSiderOpen] = useState<boolean>(false);
  const officeOptions = [
    { label: 'Lease Expiry', value: 'Lease Expiry' },
    { label: 'Tenant Classification', value: 'Tenant Classification' },
  ];

  const officeOptionOnChanged = (e: RadioChangeEvent) => {
    setSelectedOption(e.target.value);
  };

  const handleViewFilter = () => {
    setSiderOpen(true);
    setSiderContent('Filter');
  };

  const handleViewCharts = () => {
    setSiderOpen(true);
    setSiderContent('Chart');
  };

  const handleViewDesc = () => {
    setSiderOpen(true);
    setSiderContent('Description');
  };

  return (
    <div className='w-full'>
      <SiderDialog
        open={siderOpen}
        setOpen={setSiderOpen}
        title={siderContent!}
      >
        {siderContent === 'Filter' && 'Insert filter fields here...'}
        {siderContent === 'Chart' && 'Insert charts here...'}
        {siderContent === 'Description' && 'Insert description here...'}
      </SiderDialog>

      <div className='sticky top-0 z-10 px-2 py-4 bg-white border-b border-gray-200 sm:px-6 lg:px-8'>
        <div className='min-w-0 flex flex-col-reverse md:flex-row items-end justify-between md:items-center gap-2'>
          <h1 className='hidden md:block text-lg font-medium leading-6 text-gray-900 sm:truncate'>
            Office
          </h1>

          <div className='flex flex-col md:hidden w-full justify-center'>
            <Divider className='mb-2 my-0 md:hidden' />
            <Radio.Group
              options={officeOptions}
              onChange={officeOptionOnChanged}
              value={selectedOption}
              optionType='button'
              buttonStyle='solid'
            />
          </div>

          <div className='flex gap-x-4 items-center justify-end'>
            <AdjustmentsIcon
              className='h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-all'
              onClick={handleViewFilter}
            />
            <ChartBarIcon
              className='h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-all'
              onClick={handleViewCharts}
            />
            <InformationCircleIcon
              className='h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-all'
              onClick={handleViewDesc}
            />
          </div>
        </div>
      </div>

      <div className='m-2 md:m-10'>
        <div className='hidden md:block'>
          <Radio.Group
            options={officeOptions}
            onChange={officeOptionOnChanged}
            value={selectedOption}
            optionType='button'
            buttonStyle='solid'
          />

          <Divider className='my-4' />
        </div>

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
          <div
            key={i}
            className='relative flex my-2 h-20 space-x-1 md:space-x-2'
          >
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
    </div>
  );
};

export default Index;
