import { MenuAlt1Icon, UserIcon } from '@heroicons/react/outline';
import React from 'react';
import { SetStateAction } from 'react-router/node_modules/@types/react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className='sticky top-0'>
      <div className='flex items-center justify-between sticky top-0'>
        <MenuAlt1Icon
          className='h-6 w-6 text-gray-100'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className='h-6 w-6 bg-primary rounded-full grid place-items-center'>
          <UserIcon className='h-4 w-4 text-gray-100' />
        </div>
      </div>
    </div>
  );
};

export default Header;
