import { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import LazyLoad from 'src/components/Lazy-load';
import ProtectedRoute from 'src/components/ProtectedRoute';
import Result from 'src/components/Result';

const Dashboard = lazy(() => import('./Dashboard'));
const Office = lazy(() => import('./office'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<LazyLoad fullHeight />}>
      <Switch>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/office' component={Office} />
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
