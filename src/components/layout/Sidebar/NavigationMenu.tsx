import { default as classnames } from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowSize } from 'src/utils/use-window-size';
import { NavigationItem } from '.';
import UserPane from './UserPane';

interface NavigationMenuProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: NavigationItem[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  navigation,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const { width } = useWindowSize();
  const { pathname } = useLocation();

  return (
    <div className='flex flex-col flex-grow bg-gray-200 overflow-y-auto relative'>
      <div className='flex items-center p-4 sticky top-0 bg-primary'>
        <img
          className='h-7 object-contain'
          src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/IMAGES/kmc-savills-300x146.webp'
          alt='Stackz Logo'
        />
      </div>

      <div className='pt-5 flex-grow flex flex-col bg-primary bg-opacity-90'>
        <div className='px-4 pb-5'>
          <UserPane />
        </div>
        <nav className='flex-1 px-4 space-y-2'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classnames(
                {
                  'bg-primary text-white': pathname.includes(item.href),
                  'text-white': !pathname.includes(item.href),
                  'w-full justify-center': width > 768 && !sidebarOpen,
                },
                'flex items-center p-2 font-bold rounded-md uppercase font-proxiExtraBold transition-all gap-x-2'
              )}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon
                className={`${width > 768 && sidebarOpen && 'mr-3'} 
                
                ${item.href.includes(
                  pathname ? 'text-white' : 'text-primary'
                )}  flex-shrink-0 h-6 w-6 `}
                aria-hidden='true'
              />
              <div
                className='mt-1 text-xs'
                hidden={width > 768 && !sidebarOpen}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationMenu;
