import { MenuAlt1Icon, UploadIcon } from '@heroicons/react/outline';
import React from 'react';
import { useWindowSize } from 'src/utils/use-window-size';
import Sidebar from './Sidebar';

interface HeaderProps {
  headerTitle: string;
  hasExportButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasExportButton, headerTitle }) => {
  const { width } = useWindowSize();
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  return (
    <>
      {width <= 768 && (
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      )}

      <div className='relative px-4 z-10 flex flex-shrink-0 items-center justify-between h-16 border-b border-gray-200'>
        <button
          type='button'
          className='text-gray-500 focus:outline-none md:hidden'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className='sr-only'>Open sidebar</span>
          <MenuAlt1Icon className='w-5 h-5' aria-hidden='true' />
        </button>

        <div className='flex items-center justify-center text-center font-medium text-primary'>
          {headerTitle}
        </div>

        <div className='h-full flex items-center'>
          {hasExportButton && <UploadIcon className='h-5 w-5' />}
        </div>
      </div>
    </>
  );
};

export default Header;
