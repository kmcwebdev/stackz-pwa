import {
  LocationMarkerIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';
import { Card } from 'antd';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { buildingData } from 'src/assets/data';
import { useWindowSize } from 'src/utils/use-window-size';

const List: React.FC = () => {
  const { width } = useWindowSize();
  const { push } = useHistory();
  const hover = width > 768;

  return (
    <Fragment>
      {buildingData.map((building, i) => (
        <Card
          key={i}
          bodyStyle={{ paddingLeft: '10px', paddingRight: '10px' }}
          className='shadow-md border-gray-200 from-gray-200 to-gray-50 bg-gradient-to-b border text-white'
          hoverable={hover}
          cover={
            <div className='p-1 w-full relative'>
              <img
                className='h-52 w-full object-cover'
                alt={building.name}
                src={building.image}
              />
            </div>
          }
          onClick={() => push(`buildings/${building.id}/floors`)}
        >
          <Card.Meta
            title={
              <div className='flex gap-x-2 items-center text-gray-800'>
                <OfficeBuildingIcon className='h-4' />
                <div>{building.name}</div>
              </div>
            }
            description={
              <div className='flex gap-x-2 text-gray-500'>
                <div className='h-4 mt-1'>
                  <LocationMarkerIcon className='h-4' />
                </div>
                <div>{building.address}</div>
              </div>
            }
          />
        </Card>
      ))}
    </Fragment>
  );
};

export default List;
