import { BackTop } from 'antd';
import React from 'react';
import Header from './Header';

interface ContentProps {
  headerTitle: string;
  hasExportButton?: boolean;
}

const Content: React.FC<ContentProps> = ({
  headerTitle,
  hasExportButton,
  children,
}) => {
  return (
    <div className='flex flex-col flex-1 w-0 overflow-hidden'>
      <Header headerTitle={headerTitle} hasExportButton={hasExportButton} />
      <main
        id='my-main'
        className='relative z-0 flex-1 overflow-y-auto focus:outline-none bg-gray-100'
      >
        {children}
      </main>

      <BackTop target={() => document.getElementById('my-main')!} />
    </div>
  );
};

export default Content;
