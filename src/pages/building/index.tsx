import List from './list';

const Office: React.FC = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2'>
      <List />
    </div>
  );
};

export default Office;
