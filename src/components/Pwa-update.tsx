import {
  ServiceWorkerUpdaterProps,
  withServiceWorkerUpdater,
} from '@3m1/service-worker-updater';
import { Button } from 'antd';
import React from 'react';

const PwaUpdate: React.FC<ServiceWorkerUpdaterProps> = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  return newServiceWorkerDetected ? (
    <>
      New version detected.
      <Button onClick={onLoadNewServiceWorkerAccept}>Update!</Button>
    </>
  ) : null; // If no update is available, render nothing
};

export default withServiceWorkerUpdater(PwaUpdate);
