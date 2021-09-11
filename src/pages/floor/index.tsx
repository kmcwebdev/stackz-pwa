import { ChartBarIcon, PhotographIcon } from '@heroicons/react/solid';
import React from 'react';
import { useParams } from 'react-router';
import { FloorData, floorData } from 'src/assets/data';
import PageLogo from 'src/components/layout/PageLogo';
import PageTitle from 'src/components/layout/PageTitle';
import SiderDialog from 'src/components/Sider-dialog';
import BuildingInfo from './BuildingInfo';
import FloorList from './FloorList';
import FloorRadioButtonGroup from './FloorRadioButtonGroup';
import Gallery from './Gallery';
import LeaseExpiryDates from './LeaseExpiryDates';

interface indexProps {}

const Floor: React.FC<indexProps> = () => {
  const { buildingId } = useParams<{ buildingId: string }>();

  const [selectedOption, setSelectedOption] = React.useState<
    'Lease Expiry' | 'Tenant Classification'
  >('Lease Expiry');

  const [siderOpen, setSiderOpen] = React.useState<boolean>(false);
  const [siderContent, setSiderContent] = React.useState<
    'Building Information' | 'Gallery & Virtual Tour'
  >();
  const [activeUnit, setActiveUnit] = React.useState<FloorData>();

  const handleSider = (
    mode: 'Building Information' | 'Gallery & Virtual Tour',
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

    console.log(activeUnit);
  };

  return (
    <>
      <SiderDialog
        open={siderOpen}
        setOpen={setSiderOpen}
        title={siderContent!}
      >
        {siderContent === 'Building Information' && <BuildingInfo />}
        {siderContent === 'Gallery & Virtual Tour' && <Gallery />}
      </SiderDialog>

      <PageLogo hasExportButton />
      <PageTitle
        title={buildingId === '1' ? 'Picadilly Star' : 'Building Name'}
        extras={
          <>
            {selectedOption === 'Lease Expiry' && <LeaseExpiryDates />}
            <ChartBarIcon
              className='h-5 w-5 text-primary'
              onClick={() => handleSider('Building Information', 1)}
            />
            <PhotographIcon
              className='h-5 w-5 text-primary'
              onClick={() => handleSider('Gallery & Virtual Tour', 2)}
            />
          </>
        }
      />

      <div className='bg-gray-100 rounded-lg shadow-md p-4 mb-2'>
        <FloorRadioButtonGroup
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <div className='flex mt-4 gap-x-2'>
          <div className='w-16 text-xs font-semibold bg-gray-200 rounded-sm p-1'>
            Floor
          </div>
          <div className='flex-1 text-xs font-semibold bg-gray-200 rounded-sm p-1'>
            Tenant
          </div>
        </div>
      </div>
      <FloorList />
    </>
  );
};

export default Floor;
