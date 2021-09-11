import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface indexProps {}

const Index: React.FC<indexProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  return (
    <div className='h-screen w-screen bg-gray-200 relative'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='sticky top-0'>
        <div
          className='to-yellow-300 from-yellow-400 bg-gradient-to-r absolute w-full overflow-hidden'
          style={{ height: '220px', zIndex: 1 }}
        >
          <div
            className='relative bg-primary rounded-2xl'
            style={{
              width: '350px',
              height: '290px',
              left: '-120px',
              top: '-10px',
              transform: 'rotate(125.47deg)',
            }}
          >
            <div className='absolute h-56 w-56 bg-white bg-opacity-5 left-28 top-12 opacity-60 rounded-full'></div>
          </div>
        </div>
      </div>

      <div
        className='p-5 relative h-full w-full flex flex-col'
        style={{ zIndex: 2 }}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
};

export default Index;
