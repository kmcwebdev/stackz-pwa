import Content from 'src/components/layout/Content';
import PageLogo from 'src/components/layout/PageLogo';
import PageTitle from 'src/components/layout/PageTitle';

const Dashboard: React.FC = () => {
  return (
    <>
      <PageLogo />
      <PageTitle title='Dashboard' />

      <Content></Content>
    </>
  );
};

export default Dashboard;
