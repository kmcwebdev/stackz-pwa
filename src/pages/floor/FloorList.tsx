import { ChevronDoubleUpIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import { floorData } from 'src/assets/data';
import Content from 'src/components/layout/Content';
import { scrollTo } from 'src/utils/scroll-to';
import FloorNumber from './FloorNumber';
import Tenants from './tenants';

const FloorList: React.FC = () => {
  const firstItemRef = useRef<HTMLDivElement>(null);
  return (
    <Content>
      {floorData.map((floor, i) => (
        <div
          key={i}
          className='flex space-x-1 md:space-x-2'
          ref={i === 0 ? firstItemRef : null}
        >
          <FloorNumber floorNo={floor.floorNo} />
          <div className='flex flex-1 w-20 h-full'>
            <Tenants data={floor.tenants} />
          </div>
        </div>
      ))}

      <div
        className='fixed bottom-10 right-0 bg-secondary h-12 w-12 rounded-l-full grid place-items-center shadow-md'
        style={{ zIndex: 60 }}
        onClick={() => scrollTo(firstItemRef)}
      >
        <ChevronDoubleUpIcon className='h-5 w-5 text-primary' />
      </div>
    </Content>
  );
};

export default FloorList;
