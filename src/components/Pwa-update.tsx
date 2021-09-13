import {
  ServiceWorkerUpdaterProps,
  withServiceWorkerUpdater,
} from '@3m1/service-worker-updater';
import React from 'react';

const PwaUpdate: React.FC<ServiceWorkerUpdaterProps> = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  return newServiceWorkerDetected ? (
    <>
      New version detected.
      <button onClick={onLoadNewServiceWorkerAccept}>Update!</button>
    </>
  ) : null; // If no update is available, render nothing
};

export default withServiceWorkerUpdater(PwaUpdate);
