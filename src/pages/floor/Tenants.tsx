import classNames from 'classnames';
import React, { useState } from 'react';
import { useWindowSize } from 'src/utils/use-window-size';
import { Tenant } from '../building/tenants';

interface TenantsProps {
  data: Tenant[];
}

const Tenants: React.FC<TenantsProps> = ({ data }) => {
  const windowWidth = useWindowSize().width;
  const [siderOpen, setSiderOpen] = useState<boolean>(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant>();
  // const [selectedHiddenTenant, setSelectedHiddenTenant] = useState<Tenant[]>();
  const [siderMode, setSiderMode] = useState<'Tenant Info' | 'Tenants'>();

  console.log(siderOpen);
  console.log(selectedTenant);
  console.log(siderMode);

  const tenantCardWidth = classNames(
    {
      'flex-1': data.length === 1,
      'flex-1 md:w-6/12': data.length === 2,
      'flex-1 md:w-4/12': data.length === 3,
      'flex-1 md:w-3/12': data.length >= 4,
    },
    'h-20 text-white relative overflow-hidden bg-primary border-2 rounded-md border-white p-2'
  );

  const hiddenTenants = classNames(
    {
      hidden: data.length === 1,
      'flex md:hidden': data.length === 2,
    },
    'relative w-16 h-full '
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

  const handleViewTenants = (tenant: Tenant) => {
    setSelectedTenant(tenant);
    setSiderMode('Tenant Info');
    setSiderOpen(true);
  };

  // const handleViewHiddenTenants = (tenants: Tenant[]) => {
  //   let hiddenTenants: Tenant[] = [];
  //   if (tenants) {
  //     tenants.map((item, i) => {
  //       if (windowWidth > 768) {
  //         if (i >= 4) {
  //           hiddenTenants.push(item);
  //         }
  //       } else {
  //         if (i >= 1) {
  //           hiddenTenants.push(item);
  //         }
  //       }
  //       return true;
  //     });
  //   }
  //   setSelectedHiddenTenant(hiddenTenants);
  //   setSiderMode('Tenants');
  //   setSiderOpen(true);
  // };

  return (
    <>
      <div className='flex-1 flex ml-2 gap-x-1 overflow-hidden text-white h-20'>
        {data.map((tenant, i) => (
          <div
            key={i}
            className={`
              ${tenantCardWidth}
              ${data.length === 2 && i === 1 && 'hidden md:block'}
              ${data.length === 3 && i >= 1 && 'hidden md:block'}
              ${data.length >= 4 && hideTenant(i)}
              `}
            onClick={() => handleViewTenants(tenant)}
          >
            <p className='mb-1 text-xs font-semibold capitalize truncate md:text-md'>
              {tenant.name}
            </p>
            <p className='text-xs capitalize truncate'>{tenant.area}</p>
            {tenant.leaseExpiryDate && (
              <p className='text-xs capitalize truncate'>
                {tenant.leaseExpiryDate}
              </p>
            )}
            {tenant.verifiedOn && (
              <p className='text-xs capitalize truncate'>{tenant.verifiedOn}</p>
            )}
          </div>
        ))}
      </div>
      <div
        className={`w-16 h-full relative ${hiddenTenants} ${
          data.length <= 4 && 'md:hidden'
        }`}
      >
        <div className='absolute z-50 w-full h-full transition-all border-2 border-gray-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-50'></div>
        <div className='absolute z-30 grid h-full font-semibold text-white border-2 border-white rounded-md bg-primary right-card1 place-items-center'>
          +
          {data.length > 4
            ? windowWidth > 768
              ? data.length - 4
              : data.length - 1
            : data.length - 1}
        </div>
        <div className='absolute z-20 grid h-full font-semibold text-white border-2 border-white rounded-md bg-primary right-card2 place-items-center'></div>
        <div className='absolute grid h-full font-semibold text-white border-2 border-white rounded-md bg-primary right-card3 place-items-center '></div>
      </div>
    </>
  );
};

export default Tenants;
