import SyncOutlined from '@ant-design/icons/SyncOutlined';
import classnames from 'classnames';
import React from 'react';

interface LazyLoadProps {
  fullHeight?: boolean;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ fullHeight }) => {
  return (
    <div
      className={classnames('flex items-center justify-center', {
        'h-full': fullHeight,
      })}
    >
      <SyncOutlined spin />
    </div>
  );
};

export default LazyLoad;
