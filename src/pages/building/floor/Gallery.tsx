import { LocationMarkerIcon, PhotographIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import React from 'react';
import { Text } from 'src/components/Text';

const Gallery: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-x-2'>
        <PhotographIcon className='h-5 w-5' />
        <Text className='text-lg font-semibold'>Gallery</Text>
      </div>

      <div className='w-full h-52 overflow-y-scroll grid grid-cols-4 gap-4 my-4 px-4'>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>

        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
        <div className='bg-gray-300 h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-gray-200' />
        </div>
      </div>

      <Divider />

      <div className='flex items-center gap-x-2'>
        <LocationMarkerIcon className='h-5 w-5' />
        <Text className='text-lg font-semibold'>Virtual Tour</Text>
      </div>
      <div className='px-4 my-4'>
        <div className='w-full h-96 bg-gray-300'></div>
      </div>
    </div>
  );
};

export default Gallery;
