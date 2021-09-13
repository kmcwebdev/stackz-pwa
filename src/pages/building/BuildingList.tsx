import { ArrowRightIcon, SearchIcon } from '@heroicons/react/outline';
import { Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { buildingData } from 'src/assets/data';
import { Text } from 'src/components/Text';

const BuildingList: React.FC = () => {
  const { push } = useHistory();

  const [showSearch, setShowSearch] = React.useState<boolean>(false);

  return (
    <>
      <div className='h-full w-full bg-white block relative'>
        <div className='flex flex-col sticky top-0 bg-white'>
          <div className='border-b border-gray-200 flex items-center justify-between px-4 '>
            <Text className='h-14 font-bold text-primary border-b-2 border-primary flex items-center'>
              Buildings
            </Text>

            <div className='flex items-center gap-x-4 h-14 relative'>
              <div
                className={`h-full flex items-center justify-center relative ${
                  showSearch && 'triangle'
                }`}
              >
                <SearchIcon
                  className='h-5  w-5 text-primary'
                  onClick={() => setShowSearch(!showSearch)}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              showSearch
                ? 'h-auto px-4 py-6 border-b border-gray-200'
                : 'h-0 p-0'
            } w-full overflow-hidden transition-all`}
          >
            <Input.Search
              placeholder='Search building...'
              enterButton='Search'
            />
          </div>
        </div>

        <div className='flex-1'>
          {buildingData.map((bldg, i) => (
            <div
              key={i}
              className='flex p-4 border-b border-gray-200 h-24 items-center'
              onClick={() => push(`buildings/${bldg.id}/floors`)}
            >
              <div className='col-span-3'>
                <img
                  className='h-16 w-16 object-cover rounded-full border-2 border-primary'
                  alt={bldg.name}
                  src={bldg.image}
                />
              </div>
              <div className='flex-1 pl-4 pr-2 flex flex-col justify-center'>
                <Text className='text-primary font-semibold'>{bldg.name}</Text>
                <Text className='text-xs text-gray-600'>{bldg.address}</Text>
              </div>
              <div className='w-8 h-full flex items-center justify-end'>
                <ArrowRightIcon className='h-5 w-5 text-primary' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuildingList;
