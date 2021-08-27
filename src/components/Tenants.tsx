import classNames from 'classnames';
import React from 'react';
import { useWindowSize } from 'src/utils/use-window-size';

export interface Tenant {
  name: string;
  address: string;
  amount: string;
}

interface TenantsProps {
  data: Tenant[];
}

const Tenants: React.FC<TenantsProps> = ({ data }) => {
  const windowWidth = useWindowSize().width;

  const containerWidth = classNames(
    {
      'w-full': data.length === 1,
      'w-9/12 md:w-full': data.length > 1,
    },
    'flex'
  );
  const tenantCardWidth = classNames(
    {
      'w-full': data.length === 1,
      'flex-1 md:w-6/12': data.length === 2,
      'flex-1 md:w-4/12': data.length === 3,
      'flex-1 md:w-3/12': data.length >= 4,
    },
    'h-full p-2 text-white bg-blue-400 border-2 border-gray-100 rounded-md'
  );

  const hiddenTenants = classNames(
    {
      hidden: data.length === 1,
      'flex md:hidden': data.length === 2,
    },
    'relative w-3/12 h-full'
  );

  const hideTenant = (i: number): string => {
    let result = '';
    if (windowWidth > 768) {
      if (i >= 4) {
        result = 'hidden';
      }
    } else {
      if (i >= 1) {
        result = 'hidden';
      }
    }
    return result;
  };

  return (
    <>
      <div className={containerWidth}>
        {/* FLOOR TENANT = 1 */}
        {data.map((tenant, i) => (
          <div
            key={i}
            className={`
              ${tenantCardWidth}
              ${data.length === 2 && i === 1 && 'hidden md:block'}
              ${data.length === 3 && i >= 1 && 'hidden md:block'}
              ${data.length >= 4 && hideTenant(i)}
              `}
          >
            <div className='w-full overflow-ellipsis'>
              <p className='mb-1 text-xs font-semibold capitalize truncate md:text-md'>
                {tenant.name}
              </p>
              <p className='text-xs capitalize truncate'>{tenant.address}</p>
              <p className='text-xs capitalize truncate'>{tenant.amount}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${hiddenTenants} ${data.length <= 4 && 'md:hidden'}`}>
        <div className='absolute z-50 w-full h-full transition-all border-2 border-gray-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-50'></div>
        <div className='absolute z-30 grid h-full font-semibold text-white bg-blue-600 border-2 border-gray-100 rounded-md right-card1 place-items-center'>
          +
          {data.length > 4
            ? windowWidth > 768
              ? data.length - 4
              : data.length - 1
            : data.length - 1}
        </div>
        <div className='absolute z-20 grid h-full font-semibold text-white bg-red-400 border-2 border-gray-100 rounded-md right-card2 place-items-center'></div>
        <div className='absolute grid h-full font-semibold text-white bg-blue-600 border-2 border-gray-100 rounded-md right-card3 place-items-center '></div>
      </div>
    </>
  );
};

export default Tenants;