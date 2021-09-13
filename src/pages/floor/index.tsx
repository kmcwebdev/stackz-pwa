import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { AdjustmentsIcon } from '@heroicons/react/solid';
import { Button } from 'antd';
import React, { useState } from 'react';
import { FloorData, floorData } from 'src/assets/data';
import Content from 'src/components/layout/Content';
import SiderDialog from 'src/components/Sider-dialog';
import { Text } from 'src/components/Text';
import BuildingInfo from '../building/floor/BuildingInfo';
import Gallery from '../building/floor/Gallery';
import UnitInfo from '../building/floor/UnitInfo';
import Tenants from './Tenants';

const leastExpiryButtons: string[] = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025+',
  'Unavailable',
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
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
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
    if (value === 'Unavailable') {
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
        border = 'border-gray-300';
      }

      if (converted > year) {
        border = 'border-indigo-200';
      }
    }
    return border;
  };

  const radioGroup: JSX.Element = (
    <div className='border-2 border-primary grid items-center grid-cols-2 w-full md:w-6/12 md:justify-center rounded-md'>
      <div
        className={`${
          selectedOption === 'Lease Expiry' &&
          'bg-primary text-white transition-all'
        } text-center py-2 cursor-pointer`}
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
          'bg-primary text-white transition-all'
        } text-center py-2 cursor-pointer`}
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
    <Content headerTitle='Picadilly Star' hasExportButton>
      <div className='w-full bg-white block relative'>
        <div
          className='flex flex-col sticky top-0 bg-white'
          style={{ zIndex: 100 }}
        >
          <div className='border-b border-gray-200 flex items-center justify-between px-4 relative'>
            <Text className='h-14 font-bold text-primary border-b-2 border-primary flex items-center'>
              Stack
            </Text>

            <div className='flex items-center gap-x-4 h-14 relative'>
              <div
                className={`h-full flex items-center justify-center relative ${
                  filterOpen && 'triangle'
                }`}
              >
                <AdjustmentsIcon
                  className='h-5  w-5 text-primary'
                  onClick={() => setFilterOpen(!filterOpen)}
                />
              </div>

              <ChartBarIcon className='h-5  w-5 text-primary' />

              <InformationCircleIcon className='h-5  w-5 text-primary' />
            </div>
          </div>
          <div
            className={`${
              filterOpen
                ? 'h-auto px-4 py-6 border-b border-gray-200'
                : 'h-0 p-0'
            } w-full overflow-hidden transition-all`}
          >
            {selectedOption === 'Lease Expiry' && (
              <div className='w-full'>
                <div className='grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8'>
                  {leastExpiryButtons.map((btn, i) => (
                    <Button
                      key={i}
                      type='default'
                      className={`text-xs flex items-center justify-center border-2 ${
                        btn === 'Available' || btn === 'Unavailable'
                          ? 'col-span-2'
                          : 'col-span-1'
                      } ${randomizeBtnBorder(btn)}`}
                    >
                      {btn}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='p-4 border-b border-gray-200'>{radioGroup}</div>

          <div className='flex text-center py-2 px-4 gap-x-2 border-b border-gray-200'>
            <div className='w-16 md:w-20 text-xs font-semibold bg-gray-100 rounded-md py-1'>
              Floor
            </div>
            <div className='flex-1 text-xs font-semibold bg-gray-100 rounded-md py-1'>
              Tenant
            </div>
          </div>
        </div>

        <div className='my-4'>
          {floorData.map((floor, i) => (
            <div key={i} className='flex px-4 my-1 w-full h-20 mb-1'>
              <div className='grid w-16 h-20 md:w-20 relative'>
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

              <Tenants data={floor.tenants} />
            </div>
          ))}
        </div>
      </div>
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
    </Content>
  );
};

export default Index;
