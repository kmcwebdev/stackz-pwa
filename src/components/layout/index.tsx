import { BackTop } from 'antd';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className='relative flex h-screen overflow-hidden bg-white'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex flex-col flex-1 w-0 overflow-hidden'>
        <Header setSidebarOpen={setSidebarOpen} />

        <main
          id='my-main'
          className='relative z-0 flex-1 overflow-y-auto focus:outline-none'
        >
          {children}
        </main>

        <BackTop target={() => document.getElementById('my-main')!} />
      </div>
    </div>
  );
};

export default Layout;
