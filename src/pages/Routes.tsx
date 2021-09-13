import { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import LazyLoad from 'src/components/Lazy-load';
import ProtectedRoute from 'src/components/Protected-route';
import Result from 'src/components/Result';

const Dashboard = lazy(() => import('./Dashboard'));
const Building = lazy(() => import('./building'));
const Floor = lazy(() => import('./floor'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<LazyLoad fullHeight />}>
      <Switch>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute
          path='/buildings/:buildingId/floors'
          component={Floor}
        />
        <ProtectedRoute path='/buildings' component={Building} />
        <ProtectedRoute
          path='/not-found'
          component={() => (
            <Result
              status='404'
              title='Not Found'
              subTitle='Page does not exists!'
            />
          )}
        />
        <Redirect from='/' exact to='/dashboard' />
        <Redirect to='/not-found' />
      </Switch>
    </Suspense>
  );
};

export default Routes;
