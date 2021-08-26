import Tenants from 'src/components/Tenants';

const Dashboard: React.FC = () => {
  const floorData = [
    {
      floorNo: 1,
      tenants: [
        {
          name: 'Tenant 1',
          address: 'Address 1',
          amount: 'Amount 1',
        },
      ],
    },
    {
      floorNo: 2,
      tenants: [
        {
          name: 'Tenant 1',
          address: 'Address 1',
          amount: 'Amount 1',
        },
        {
          name: 'Tenant 2',
          address: 'Address 2',
          amount: 'Amount 2',
        },
      ],
    },
    {
      floorNo: 3,
      tenants: [
        {
          name: 'Tenant 1',
          address: 'Address 1',
          amount: 'Amount 1',
        },
        {
          name: 'Tenant 2',
          address: 'Address 2',
          amount: 'Amount 2',
        },
        {
          name: 'Tenant 3',
          address: 'Address 3',
          amount: 'Amount 3',
        },
      ],
    },
    {
      floorNo: 4,
      tenants: [
        {
          name: 'Tenant 1',
          address: 'Address 1',
          amount: 'Amount 1',
        },
        {
          name: 'Tenant 2',
          address: 'Address 2',
          amount: 'Amount 2',
        },
        {
          name: 'Tenant 3',
          address: 'Address 3',
          amount: 'Amount 3',
        },
        {
          name: 'Tenant 4',
          address: 'Address 4',
          amount: 'Amount 4',
        },
      ],
    },
    {
      floorNo: 5,
      tenants: [
        {
          name: 'Tenant 1',
          address: 'Address 1',
          amount: 'Amount 1',
        },
        {
          name: 'Tenant 2',
          address: 'Address 2',
          amount: 'Amount 2',
        },
        {
          name: 'Tenant 3',
          address: 'Address 3',
          amount: 'Amount 3',
        },
        {
          name: 'Tenant 4',
          address: 'Address 4',
          amount: 'Amount 4',
        },
        {
          name: 'Tenant 5',
          address: 'Address 5',
          amount: 'Amount 5',
        },
      ],
    },

    {
      floorNo: 9,
      tenants: [
        {
          name: 'Tenant 1',
          address: 'Address 1',
          amount: 'Amount 1',
        },
        {
          name: 'Tenant 2',
          address: 'Address 2',
          amount: 'Amount 2',
        },
        {
          name: 'Tenant 3',
          address: 'Address 3',
          amount: 'Amount 3',
        },
        {
          name: 'Tenant 4',
          address: 'Address 4',
          amount: 'Amount 4',
        },
        {
          name: 'Tenant 5',
          address: 'Address 5',
          amount: 'Amount 5',
        },
        {
          name: 'Tenant 6',
          address: 'Address 6',
          amount: 'Amount 6',
        },
        {
          name: 'Tenant 7',
          address: 'Address 7',
          amount: 'Amount 7',
        },
        {
          name: 'Tenant 8',
          address: 'Address 8',
          amount: 'Amount 8',
        },
        {
          name: 'Tenant 9',
          address: 'Address 9',
          amount: 'Amount 9',
        },
      ],
    },
  ];

  return (
    <div className='w-full'>
      <div className='relative flex m-2 space-x-2 '>
        <div className='w-20 px-2 text-xs font-semibold'> Floor</div>
        <div className='flex-1 px-2 text-xs font-semibold'> Tenant</div>
      </div>

      {floorData.map((floor) => (
        <div className='relative flex h-20 m-2 space-x-1 md:space-x-2'>
          {/* Floor Number */}
          <div className='w-16 md:w-20 h-full'>
            <div className='flex flex-col items-center justify-center h-full bg-gray-200 border-2 border-gray-100 rounded-md'>
              <span className='text-xl font-semibold uppercase'>
                {floor.floorNo}
              </span>
            </div>
          </div>

          {/* Floor Tenants */}
          <div className='relative flex flex-1 w-20 h-full'>
            <Tenants data={floor.tenants} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
