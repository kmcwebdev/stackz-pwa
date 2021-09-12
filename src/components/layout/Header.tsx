import ExportOutlined from '@ant-design/icons/ExportOutlined';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import React from 'react';
import { useLocation } from 'react-router';

interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const { pathname } = useLocation();

  const [headerTitle, setHeaderTitle] = React.useState<string>();
  const [showExportButton, setShowExportButton] = React.useState<boolean>();

  React.useEffect(() => {
    if (pathname === '/buildings') {
      setHeaderTitle('Building List');
    } else if (pathname.includes('/floors')) {
      setHeaderTitle('Picadilly Star');
      setShowExportButton(true);
    } else {
      setShowExportButton(false);
    }
  }, [pathname]);

  return (
    <div className='relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:hidden'>
      <button
        type='button'
        className='px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <MenuAlt1Icon className='w-6 h-6' aria-hidden='true' />
      </button>
      <div className='flex justify-between flex-1 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center text-center font-medium'>
          {headerTitle}
        </div>
        {showExportButton && (
          <div className='h-full flex items-center'>
            <div className='h-8 w-8 grid place-items-center'>
              <ExportOutlined className='text-lg text-gray-700 font-bold leading-4 transform -rotate-90' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
