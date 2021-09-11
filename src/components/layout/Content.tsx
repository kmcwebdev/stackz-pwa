import React from 'react';

interface ContentProps {}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className='flex-1 bg-gray-100 rounded-lg shadow-md overflow-hidden relative py-2'>
      <div className='relative h-full w-full py-2 px-4 flex flex-col gap-4 overflow-y-scroll overflow-x-hidden'>
        {children}
      </div>
    </div>
  );
};

export default Content;
