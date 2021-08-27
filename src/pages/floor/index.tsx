import React from 'react';
import { floorData } from 'src/assets/data';
import Tenants from 'src/components/Tenants';

const Index: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='relative flex m-2 space-x-2 '>
        <div className='w-20 px-2 text-xs font-semibold'> Floor</div>
        <div className='flex-1 px-2 text-xs font-semibold'> Tenant</div>
      </div>

      {floorData.map((floor, i) => (
        <div key={i} className='relative flex h-20 m-2 space-x-1 md:space-x-2'>
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
