import { Input } from 'antd';
import List from './list';

const Office: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='sticky top-0 z-10 px-2 py-4 bg-white border-b border-gray-200 sm:px-6 lg:px-8'>
        <div className='min-w-0 flex justify-center md:justify-between'>
          <h1 className='hidden md:block text-lg font-medium leading-6 text-gray-900 sm:truncate'>
            Building list
          </h1>
          <Input.Search
            className='md:w-80'
            placeholder='Search Building'
            enterButton
          />
        </div>
      </div>

      <div className='m-2 md:m-10'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2'>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Office;
