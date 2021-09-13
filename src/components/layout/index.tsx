import React, { JSXElementConstructor, ReactElement } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true);

  return (
    <div className='relative flex h-screen overflow-hidden'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {children}
    </div>
  );
};

export default Layout;
