import Content from 'src/components/layout/Content';
import { Text } from 'src/components/Text';
import BuildingList from './BuildingList';

const Office: React.FC = () => {
  return (
    <Content headerTitle='Building List'>
      <div className='grid'>
        <BuildingList />
        <div className='flex justify-center'>
          <Text className='w-3/12 bg-gray-200 p-1 m-2 text-center text-xs'>
            End of List
          </Text>
        </div>
      </div>
    </Content>
  );
};

export default Office;
