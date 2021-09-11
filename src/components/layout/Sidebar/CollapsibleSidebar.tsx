import classNames from 'classnames';
import React from 'react';
import { NavigationItem } from '.';
import NavigationMenu from './NavigationMenu';

interface CollapsibleSidebarProps {
  navigation: NavigationItem[];
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
  navigation,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const sidebarWidth = classNames(
    {
      'w-64': sidebarOpen,
      'w-16': !sidebarOpen,
    },
    'flex flex-col transition-all'
  );
  return (
    <div className='hidden md:flex md:flex-shrink-0'>
      <div className={sidebarWidth}>
        <NavigationMenu
          navigation={navigation}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
