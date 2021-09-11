import React from 'react';
import { floorData } from 'src/assets/data';
import SiderDialog from 'src/components/Sider-dialog';
import UnitInfo from './UnitInfo';

interface FloorNumberProps {
  floorNo: number;
}

const FloorNumber: React.FC<FloorNumberProps> = ({ floorNo }) => {
  const [siderOpen, setSiderOpen] = React.useState<boolean>(false);
  const toggleSider = () => {
    setSiderOpen(!siderOpen);
  };

  return (
    <div className='w-16 h-20 md:w-20'>
      <div className='flex flex-col items-center justify-center h-full transition-all bg-gray-200 border-2 border-gray-100 rounded-md cursor-pointer hover:bg-gray-300'>
        <span className='font-semibold uppercase' onClick={toggleSider}>
          {floorNo === 1 ? 'GF' : floorNo === 0 ? 0 : floorNo}
        </span>
      </div>

      <SiderDialog
        open={siderOpen}
        setOpen={setSiderOpen}
        title='Unit Information'
      >
        <UnitInfo data={floorData.find((flr) => flr.floorNo === floorNo)!} />
      </SiderDialog>
    </div>
  );
};

export default FloorNumber;
