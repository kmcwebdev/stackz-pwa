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
      <div className='h-full w-full block relative'>
        <div className='flex flex-col sticky top-0 z-30'>
          <div className='border-b border-gray-200 flex items-center justify-between px-4 bg-white'>
            <Text className='h-14 font-bold text-primary border-b-2 border-primary flex items-center'>
              Buildings
            </Text>

            <div className='flex items-center w-7/12 md:w-6/12 gap-x-4 h-14 relative'>
              <Input.Search
                placeholder='Search building...'
                enterButton={<SearchIcon className='h-5 w-5' />}
              />
            </div>
          </div>
        </div>

        <div className='flex-1 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 md:p-4'>
          {buildingData.map((bldg, i) => (
            <div
              key={i}
              className='flex p-4 border-b w-full border-gray-200 md:border h-24 items-center md:h-40 md:items-start bg-white md:rounded-md md:shadow-md md:relative group cursor-pointer overflow-hidden transition-all hover:bg-gray-100 hover:border-gray-300'
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
              <div className='w-8 h-full flex items-center justify-end md:hidden'>
                <ArrowRightIcon className='h-5 w-5 text-primary' />
              </div>

              <div className='h-10 border-t border-gray-200 absolute bottom-0 left-0 w-full hidden md:block group-hover:bg-primary group-hover:bg-opacity-50 transition-all cursor-pointer'>
                <div className='w-full h-full flex items-center justify-center gap-x-2'>
                  <Text className='text-primary group-hover:text-white transition-all'>
                    View Building
                  </Text>
                  <ArrowRightIcon className='h-5 w-5 text-primary group-hover:text-white transition-all' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuildingList;
