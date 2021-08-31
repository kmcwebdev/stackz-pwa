import {
  AdjustmentsIcon,
  ChartBarIcon,
  PhotographIcon,
} from '@heroicons/react/solid';
import { Button, Divider, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { FloorData, floorData } from 'src/assets/data';
import SiderDialog from 'src/components/Sider-dialog';
import Tenants from 'src/pages/building/tenants';
import BuildingInfo from './BuildingInfo';
import Gallery from './Gallery';
import UnitInfo from './UnitInfo';

const Index: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Lease Expiry');
  const [siderContent, setSiderContent] = useState<
    | 'Filter'
    | 'Building Information'
    | 'Unit Information'
    | 'Gallery & Virtual Tour'
  >();
  const [siderOpen, setSiderOpen] = useState<boolean>(false);
  const officeOptions = [
    { label: 'Lease Expiry', value: 'Lease Expiry' },
    { label: 'Tenant Classification', value: 'Tenant Classification' },
  ];

  const [activeUnit, setActiveUnit] = useState<FloorData>();

  const officeOptionOnChanged = (e: RadioChangeEvent) => {
    setSelectedOption(e.target.value);
  };

  const handleSider = (
    mode:
      | 'Filter'
      | 'Building Information'
      | 'Unit Information'
      | 'Gallery & Virtual Tour',
    floorNo?: number
  ) => {
    setSiderContent(mode);
    if (floorNo) {
      const active = floorData.find((flr) => flr.floorNo === floorNo);
      if (active) {
        setActiveUnit(active);
      }
    }
    setSiderOpen(true);
  };

  return (
    <div className='w-full'>
      <SiderDialog
        open={siderOpen}
        setOpen={setSiderOpen}
        title={siderContent!}
      >
        {siderContent === 'Filter' && 'Insert filter fields here...'}
        {siderContent === 'Building Information' && <BuildingInfo />}
        {siderContent === 'Gallery & Virtual Tour' && <Gallery />}
        {siderContent === 'Unit Information' && <UnitInfo data={activeUnit!} />}
      </SiderDialog>

      <div
        className='sticky top-0 z-10 px-2 py-4 bg-white border-b border-gray-200 sm:px-6 lg:px-8'
        style={{ zIndex: 51 }}
      >
        <div className='flex flex-col-reverse items-end justify-between min-w-0 gap-2 md:flex-row md:items-center'>
          <h1 className='hidden text-lg font-medium leading-6 text-gray-900 md:block sm:truncate'>
            Office
          </h1>

          <div className='flex flex-col items-center justify-center w-full md:hidden'>
            <Divider className='w-full my-0 mb-4 md:hidden' />
            <Radio.Group
              options={officeOptions}
              onChange={officeOptionOnChanged}
              value={selectedOption}
              optionType='button'
              buttonStyle='solid'
            />
          </div>

          <div className='flex items-center justify-end gap-x-4'>
            <AdjustmentsIcon
              className='h-6 text-gray-500 transition-all cursor-pointer hover:text-blue-600'
              onClick={() => handleSider('Filter')}
            />
            <ChartBarIcon
              className='h-6 text-gray-500 transition-all cursor-pointer hover:text-blue-600'
              onClick={() => handleSider('Building Information')}
            />

            <PhotographIcon
              className='h-6 text-gray-500 transition-all cursor-pointer hover:text-blue-600'
              onClick={() => handleSider('Gallery & Virtual Tour')}
            />
          </div>
        </div>
      </div>

      <div className='mx-2 mt-4 mb-2'>
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
            <div className='grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10'>
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
          <div className='w-20 pl-2 text-xs font-semibold'> Floor</div>
          <div className='flex-1 text-xs font-semibold'> Tenant</div>
        </div>
        {floorData.map((floor, i) => (
          <div
            key={i}
            className='relative flex h-20 my-2 space-x-1 md:space-x-2'
          >
            <div className='w-16 h-full md:w-20'>
              <div
                className='flex flex-col items-center justify-center h-full bg-gray-200 border-2 border-white rounded-md cursor-pointer hover:bg-gray-300 transition-all'
                onClick={() => handleSider('Unit Information', floor.floorNo)}
              >
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
