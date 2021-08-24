const Dashboard: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='flex space-x-5'>
        <div className='bg-blue-400 rounded-lg h-28 w-28'>
          <div className='flex items-center justify-center h-full'>
            <span className='text-3xl font-semibold'>23</span>
          </div>
        </div>

        <div className='flex flex-1 overflow-x-scroll rounded-lg'>
          <div className='flex space-x-2'>
            <div className='w-40 h-full bg-red-400 rounded-lg'>1st Tenant</div>
            <div className='w-40 h-full bg-red-400 rounded-lg'>1st Tenant</div>
            <div className='w-40 h-full bg-red-400 rounded-lg'>1st Tenant</div>
            <div className='w-40 h-full bg-red-400 rounded-lg'>1st Tenant</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
