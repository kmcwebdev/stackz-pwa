import { ChevronDoubleUpIcon } from '@heroicons/react/outline';
import React, { Fragment, useRef } from 'react';
import { useHistory } from 'react-router';
import { buildingData } from 'src/assets/data';
import { Text } from 'src/components/Text';
import { scrollTo } from 'src/utils/scroll-to';

const BuildingList: React.FC = () => {
  const history = useHistory();
  const firstItemRef = useRef<HTMLDivElement>(null);
  return (
    <Fragment>
      {buildingData.map((building, i) => (
        <div
          ref={i === 0 ? firstItemRef : null}
          className='flex items-start gap-x-2'
          key={i}
          onClick={() => history.push(`buildings/${building.id}/floors`)}
        >
          <div className='h-20 w-20 rounded-md bg-primary overflow-hidden border-2 border-primary'>
            <img
              className='h-20 w-20 object-cover'
              src={building.image}
              alt=''
            />
          </div>
          <div className='flex-1 flex flex-col gap-1 h-full rounded-md'>
            <Text className='font-bold text-primary'>{building.name}</Text>
            <Text className='text-xs'>{building.address}</Text>
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
    </Fragment>
  );
};

export default BuildingList;
