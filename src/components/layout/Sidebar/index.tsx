import { OfficeBuildingIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import React from 'react';
import { useWindowSize } from 'src/utils/use-window-size';
import CollapsibleSidebar from './CollapsibleSidebar';
import MobileSidebar from './MobileSidebar';

export interface NavigationItem {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Buildings', href: '/buildings', icon: OfficeBuildingIcon },
  ];

  const { width } = useWindowSize();

  return (
    <>
      {width <= 768 ? (
        <MobileSidebar
          navigation={navigation}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      ) : (
        <CollapsibleSidebar
          navigation={navigation}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
    </>
  );
};

export default Sidebar;
