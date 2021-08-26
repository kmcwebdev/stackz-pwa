const Dashboard: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='relative flex m-2 space-x-2 '>
        <div className='w-20 px-2 text-xs font-semibold'> Floor</div>
        <div className='flex-1 px-2 text-xs font-semibold'> Tenant</div>
      </div>
      {/* Floor 23 */}
      <div className='relative flex h-20 m-2 space-x-2'>
        {/* Floor Number */}
        <div className='w-20 h-full'>
          <div className='flex flex-col items-center justify-center h-full bg-gray-200 border-2 border-gray-100 rounded-md'>
            <span className='text-xl font-semibold uppercase'>23</span>
          </div>
        </div>

        {/* Floor Tenants */}
        <div className='relative flex flex-1 w-20 h-full gap-x-2'>
          <div className='w-9/12 h-full p-2 text-white bg-blue-400 border-2 border-gray-100 rounded-md'>
            <p className='mb-1 font-semibold capitalize text-md'>
              Insert Tenant Name
            </p>
            <p className='text-xs font-semibold capitalize'>
              Insert Tenant Info 1
            </p>
            <p className='text-xs font-semibold capitalize'>
              Insert Tenant Info 2
            </p>
          </div>
          <div className='relative w-3/12 h-full'>
            <div className='absolute z-50 w-full h-full transition-all border-2 border-gray-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-50'></div>
            <div className='absolute z-30 grid h-full font-semibold text-white bg-blue-600 border-2 border-gray-100 rounded-md right-card1 place-items-center'>
              +3
            </div>

            <div className='absolute z-20 grid h-full font-semibold text-white bg-red-400 border-2 border-gray-100 rounded-md right-card2 place-items-center'></div>

            <div className='absolute grid h-full font-semibold text-white bg-blue-600 border-2 border-gray-100 rounded-md right-card3 place-items-center '></div>
          </div>
        </div>
      </div>
      {/* Floor 23*/}

      {/* Floor Number */}
      <div className='relative flex h-20 m-2 space-x-2'>
        {/* Floor Number */}
        <div className='w-20 h-full'>
          <div className='flex flex-col items-center justify-center h-full bg-gray-200 border-2 border-gray-100 rounded-md'>
            <span className='text-xl font-semibold uppercase'>24</span>
          </div>
        </div>

        {/* Floor Tenants */}
        <div className='relative flex flex-1 w-20 h-full gap-x-2'>
          <div className='w-full h-full p-2 text-white bg-blue-400 border-2 border-gray-100 rounded-md'>
            <p className='mb-1 font-semibold capitalize text-md'>
              Insert Tenant Name
            </p>
            <p className='text-xs font-semibold capitalize'>
              Insert Tenant Info 1
            </p>
            <p className='text-xs font-semibold capitalize'>
              Insert Tenant Info 2
            </p>
          </div>
        </div>
      </div>
      {/* Floor 24 */}

      {/* Floor 25 */}
      <div className='relative flex h-20 m-2 space-x-2'>
        {/* Floor Number*/}
        <div className='w-20 h-full'>
          <div className='flex flex-col items-center justify-center h-full bg-gray-200 border-2 border-gray-100 rounded-md'>
            <span className='text-xl font-semibold uppercase'>25</span>
          </div>
        </div>

        {/* Floor Tenants */}
        <div className='relative flex flex-1 w-20 h-full gap-x-2'>
          <div className='w-9/12 h-full p-2 text-white bg-blue-400 border-2 border-gray-100 rounded-md'>
            <p className='mb-1 font-semibold capitalize text-md'>
              Insert Tenant Name
            </p>
            <p className='text-xs font-semibold capitalize'>
              Insert Tenant Info 1
            </p>
            <p className='text-xs font-semibold capitalize'>
              Insert Tenant Info 2
            </p>
          </div>
          <div className='relative w-3/12 h-full'>
            <div className='absolute z-50 w-full h-full transition-all border-2 border-gray-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-50'></div>
            <div className='absolute z-30 grid h-full font-semibold text-white bg-blue-600 border-2 border-gray-100 rounded-md right-card1 place-items-center'>
              +1
            </div>

            <div className='absolute z-20 grid h-full font-semibold text-white bg-red-400 border-2 border-gray-100 rounded-md right-card2 place-items-center'></div>

            <div className='absolute grid h-full font-semibold text-white bg-blue-600 border-2 border-gray-100 rounded-md right-card3 place-items-center '></div>
          </div>
        </div>
      </div>
      {/* Floor 25 */}
    </div>
  );
};

export default Dashboard;
