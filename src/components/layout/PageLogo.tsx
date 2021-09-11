import { SearchOutlined } from '@ant-design/icons';
import { UploadIcon } from '@heroicons/react/outline';
import { Input } from 'antd';
import React from 'react';

interface PageLogoProps {
  hasSearch?: boolean;
  hasExportButton?: boolean;
}

const PageLogo: React.FC<PageLogoProps> = ({ hasSearch, hasExportButton }) => {
  return (
    <div className='flex items-center justify-between my-5'>
      <img
        className='w-auto h-7'
        src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/IMAGES/kmc-savills-300x146.webp'
        alt='kmc-savills'
      />

      {hasSearch && (
        <div className='w-7/12'>
          <Input
            className='rounded-sm'
            placeholder='Search building...'
            suffix={<SearchOutlined className='text-gray-500' />}
          />
        </div>
      )}

      {hasExportButton && <UploadIcon className='h-5 w-5 text-primary' />}
    </div>
  );
};

export default PageLogo;
