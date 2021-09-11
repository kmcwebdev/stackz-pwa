import React from 'react';
import { floorData } from 'src/assets/data';
import Content from 'src/components/layout/Content';
import FloorNumber from './FloorNumber';
import Tenants from './tenants';

const FloorList: React.FC = () => {
  return (
    <Content>
      {floorData.map((floor, i) => (
        <div key={i} className='flex space-x-1 md:space-x-2'>
          <FloorNumber floorNo={floor.floorNo} />
          <div className='flex flex-1 w-20 h-full'>
            <Tenants data={floor.tenants} />
          </div>
        </div>
      ))}
    </Content>
  );
};

export default FloorList;
