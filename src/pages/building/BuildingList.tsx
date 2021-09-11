import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { buildingData } from 'src/assets/data';
import { Text } from 'src/components/Text';

const BuildingList: React.FC = () => {
  const history = useHistory();
  return (
    <Fragment>
      {buildingData.map((building, i) => (
        <div
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
    </Fragment>
  );
};

export default BuildingList;
