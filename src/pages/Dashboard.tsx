import { Redirect } from 'react-router-dom';

const Dashboard: React.FC = () => {
  if (true) {
    return <Redirect to='/office' />;
  }

  return <>Dashboard</>;
};

export default Dashboard;
