import {
  AdjustmentsIcon,
  ChartBarIcon,
  PhotographIcon,
} from '@heroicons/react/solid';
import { Button, Divider } from 'antd';
import React, { useState } from 'react';
import { FloorData, floorData } from 'src/assets/data';
import SiderDialog from 'src/components/Sider-dialog';
import { Text } from 'src/components/Text';
import Tenants from 'src/pages/building/tenants';
import BuildingInfo from './BuildingInfo';
import Gallery from './Gallery';
import UnitInfo from './UnitInfo';

const leastExpiryButtons: string[] = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025+',
  'Unavbl',
  'Available',
];

const Index: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Lease Expiry');
  const [siderContent, setSiderContent] = useState<
    | 'Filter'
    | 'Building Information'
    | 'Unit Information'
    | 'Gallery & Virtual Tour'
  >();
  const [siderOpen, setSiderOpen] = useState<boolean>(false);
  const [filterOpen, setFilterOpen] = useState<boolean>(true);
  const [activeUnit, setActiveUnit] = useState<FloorData>();

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

  const randomizeBtnBorder = (value: string): string => {
    let border = 'border-gray-400';
    if (value === 'Unavbl') {
      border = 'border-red-500';
    }
    if (value === 'Available') {
      border = 'border-green-500';
    }

    if (value !== 'Unavailable' && value !== 'Available') {
      const date = new Date();
      const year = date.getFullYear();
      const converted = parseInt(value.replace('+', ''));

      if (converted === year) {
        border = 'border-indigo-300';
      }
      if (converted < year) {
        border = 'border-gray-200';
      }

      if (converted > year) {
        border = 'border-indigo-200';
      }
    }
    return border;
  };

  const radioGroup: JSX.Element = (
    <div className='border-2 border-blue-500 grid grid-cols-2 w-full md:w-6/12 md:justify-center rounded-md'>
      <div
        className={`${
          selectedOption === 'Lease Expiry' &&
          'bg-blue-500 text-white transition-all'
        } text-center p-2 cursor-pointer`}
        onClick={() => setSelectedOption('Lease Expiry')}
      >
        <Text
          className={`${
            selectedOption === 'Lease Expiry' && 'text-white'
          } text-xs`}
        >
          Lease Expiry
        </Text>
      </div>
      <div
        className={`${
          selectedOption === 'Tenant Classification' &&
          'bg-blue-500 text-white transition-all'
        } text-center p-2 cursor-pointer`}
        onClick={() => setSelectedOption('Tenant Classification')}
      >
        <Text
          className={`${
            selectedOption === 'Tenant Classification' && 'text-white'
          } text-xs`}
        >
          Tenant Classification
        </Text>
      </div>
    </div>
  );

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

          <div className='flex items-center justify-end gap-4'>
            <AdjustmentsIcon
              className={`h-6 text-gray-500 transition-all cursor-pointer hover:text-blue-400 ${
                filterOpen ? 'text-blue-600' : ''
              }`}
              onClick={() => setFilterOpen(!filterOpen)}
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
        <div className='md:hidden'>
          {filterOpen && (
            <>
              {selectedOption === 'Lease Expiry' && (
                <>
                  <Divider className='my-4' />
                  <div className='w-full'>
                    <div className='grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8'>
                      {leastExpiryButtons.map((btn, i) => (
                        <Button
                          key={i}
                          type='default'
                          className={`border-2 ${randomizeBtnBorder(btn)}`}
                        >
                          {btn}
                        </Button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className='flex flex-col items-center justify-center w-full md:hidden'>
          <Divider className='my-4 md:hidden' />
          {radioGroup}
        </div>
      </div>

      <div className='m-2 md:m-10'>
        <div className='hidden md:block'>
          {filterOpen && (
            <>
              {selectedOption === 'Lease Expiry' && (
                <>
                  <div className='w-full'>
                    <div className='grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10'>
                      {leastExpiryButtons.map((btn, i) => (
                        <Button
                          key={i}
                          type='default'
                          className={`border-2 overflow-ellipsis ${randomizeBtnBorder(
                            btn
                          )}`}
                        >
                          {btn}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Divider className='my-4' />
                </>
              )}
            </>
          )}
        </div>
        <div className='hidden md:block'>
          {radioGroup}
          <Divider className='my-4' />
        </div>
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
                className='flex flex-col items-center justify-center h-full transition-all bg-gray-200 border-2 border-white rounded-md cursor-pointer hover:bg-gray-300'
                onClick={() => handleSider('Unit Information', floor.floorNo)}
              >
                <span className='text-xl font-semibold uppercase'>
                  {floor.floorNo === 1
                    ? 'GF'
                    : floor.floorNo === 0
                    ? ''
                    : floor.floorNo}
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
