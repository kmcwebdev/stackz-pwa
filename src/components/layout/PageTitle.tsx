import React from 'react';
import { Text } from 'src/components/Text';

interface PageTitleProps {
  extras?: JSX.Element;
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ extras, title }) => {
  return (
    <div className='flex items-center justify-between mb-5'>
      <Text className='font-bold text-gray-100'>{title}</Text>

      <div className='flex items-center justify-end gap-x-4'>
        {extras && extras}
      </div>
    </div>
  );
};

export default PageTitle;
