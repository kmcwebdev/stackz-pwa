import Content from 'src/components/layout/Content';
import PwaUpdate from 'src/components/Pwa-update';

const Dashboard: React.FC = () => {
  return (
    <Content headerTitle='Dashboard'>
      <div className='p-4'>Dashboard</div>
      <PwaUpdate />
    </Content>
  );
};

export default Dashboard;
