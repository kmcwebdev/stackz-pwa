import Content from 'src/components/layout/Content';
import PageLogo from 'src/components/layout/PageLogo';
import PageTitle from 'src/components/layout/PageTitle';
import BuildingList from './BuildingList';

const Office: React.FC = () => {
  return (
    <>
      <PageLogo hasSearch />
      <PageTitle title='Building List' />

      <Content>
        <BuildingList />
      </Content>
    </>
  );
};

export default Office;
