import { LoadingOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { Text } from 'src/components/Text';

interface LazyLoadProps {
  fullHeight?: boolean;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ fullHeight }) => {
  return (
    <div
      className={classnames('flex flex-col w-full justify-center relative', {
        'h-full': fullHeight,
      })}
    >
      <div className='absolute h-full w-full grid place-items-center bg-black bg-opacity-5 transition-all'>
        <div className='flex flex-col gap-4'>
          <LoadingOutlined
            spin
            style={{ fontSize: '60px' }}
            className='text-primary'
          />
          <Text className='font-semibold text-primary'>Loading</Text>
        </div>
      </div>
      <div className='h-16 w-full flex items-center justify-between px-4 border-b border-gray-200'>
        <Skeleton.Button size='small' active />
        <Skeleton.Input className='w-5/12' active />
        <Skeleton.Button size='small' active />
      </div>

      <div className='h-14 w-full flex items-center justify-between px-4 border-b border-gray-200'>
        <Skeleton.Input className='w-5/12' active />
        <Skeleton.Button size='small' active />
      </div>

      <div className='flex-1 px-4 relative'>
        <Skeleton paragraph={{ rows: 14 }} active />
      </div>
    </div>
  );
};

export default LazyLoad;
