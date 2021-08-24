import { Result as AntdResult } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { Text } from './Text';

interface ResultsProps {
  status:
    | 403
    | 404
    | 500
    | '403'
    | '404'
    | '500'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  title: string;
  subTitle: string | undefined;
  screenHeight?: boolean;
}

const Result: React.FC<ResultsProps> = ({
  status,
  title,
  subTitle,
  screenHeight: heightFull,
}) => {
  const resultClassNames = classnames('flex items-center justify-center', {
    'h-screen': heightFull,
  });

  return (
    <div className={resultClassNames}>
      <AntdResult
        status={status}
        title={<Text className='font-semibold'>{title}</Text>}
        subTitle={
          <Text className='text-sm'>
            {subTitle || 'Sorry, something went wrong.'}
          </Text>
        }
      />
    </div>
  );
};

export default Result;
