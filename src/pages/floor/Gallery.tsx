import { MapIcon } from '@heroicons/react/outline';
import { LocationMarkerIcon, PhotographIcon } from '@heroicons/react/solid';
import { Divider } from 'antd';
import React from 'react';
import { Text } from 'src/components/Text';

const Gallery: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-x-2'>
        <PhotographIcon className='h-5 w-5 text-primary' />
        <Text className='font-semibold text-primary'>Gallery</Text>
      </div>

      <div className='w-full h-62 overflow-y-auto grid grid-cols-4 gap-4 my-4 p-4 rounded-md bg-gray-200'>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>

        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
        <div className='bg-white h-16 md:h-20 grid place-items-center rounded-md'>
          <PhotographIcon className='h-10 md:h-16 text-primary' />
        </div>
      </div>

      <Divider />

      <div className='flex items-center gap-x-2'>
        <LocationMarkerIcon className='h-5 w-5 text-primary' />
        <Text className='font-semibold text-primary'>Virtual Tour</Text>
      </div>
      <div className='my-4'>
        <div className='w-full h-56 bg-gray-200 rounded-md grid place-items-center'>
          <MapIcon className='h-10 md:h-16 text-primary' />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
