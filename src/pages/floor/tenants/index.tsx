import classNames from 'classnames';
import React, { useState } from 'react';
import SiderDialog from 'src/components/Sider-dialog';
import { useWindowSize } from 'src/utils/use-window-size';
import HiddenTenants from './HiddenTenants';
import TenantInfo from './TenantInfo';

export interface Tenant {
  name: string;
  area: number;
  leaseExpiryDate?: string | null;
  verifiedOn?: string | null;
}

interface TenantsProps {
  data: Tenant[];
}

const Tenants: React.FC<TenantsProps> = ({ data }) => {
  const windowWidth = useWindowSize().width;
  const [siderOpen, setSiderOpen] = useState<boolean>(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant>();
  const [selectedHiddenTenant, setSelectedHiddenTenant] = useState<Tenant[]>();
  const [siderMode, setSiderMode] = useState<'Tenant Info' | 'Tenants'>();

  const containerWidth = classNames(
    {
      'w-full': data.length === 1,
      'w-9/12 md:w-full': data.length > 1,
    },
    'block md:flex relative overflow-hidden'
  );
  const tenantCardWidth = classNames(
    {
      'w-full': data.length === 1,
      'flex-1 md:w-6/12': data.length === 2,
      'flex-1 md:w-4/12': data.length === 3,
      'flex-1 md:w-3/12': data.length >= 4,
    },
    'h-full p-2 text-white bg-primary border-2 border-gray-100 rounded-md'
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

  const handleViewTenants = (tenant: Tenant) => {
    setSelectedTenant(tenant);
    setSiderMode('Tenant Info');
    setSiderOpen(true);
  };

  const handleViewHiddenTenants = (tenants: Tenant[]) => {
    let hiddenTenants: Tenant[] = [];
    if (tenants) {
      tenants.map((item, i) => {
        if (windowWidth > 768) {
          if (i >= 4) {
            hiddenTenants.push(item);
          }
        } else {
          if (i >= 1) {
            hiddenTenants.push(item);
          }
        }
        return true;
      });
    }
    setSelectedHiddenTenant(hiddenTenants);
    setSiderMode('Tenants');
    setSiderOpen(true);
  };

  return (
    <>
      <SiderDialog open={siderOpen} setOpen={setSiderOpen} title={siderMode!}>
        {siderMode === 'Tenant Info' ? (
          <TenantInfo data={selectedTenant!} />
        ) : (
          <HiddenTenants data={selectedHiddenTenant!} />
        )}
      </SiderDialog>

      <div className={containerWidth}>
        <div className='h-72 w-72 bg-white bg-opacity-5 opacity-60 absolute top-0 -left-1/4 rounded-full' />

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
            onClick={() => handleViewTenants(tenant)}
          >
            <div className='w-full overflow-hidden'>
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
                <p className='text-xs capitalize truncate'>
                  {tenant.verifiedOn}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${hiddenTenants} ${data.length <= 4 && 'md:hidden'}`}
        onClick={() => handleViewHiddenTenants(data)}
      >
        <div className='absolute z-50 w-full h-full transition-all border-2 border-gray-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-50'></div>
        <div className='absolute z-30 grid h-full font-semibold text-gray-100 border-2 border-gray-100 rounded-md bg-primary right-card1 place-items-center'>
          +
          {data.length > 4
            ? windowWidth > 768
              ? data.length - 4
              : data.length - 1
            : data.length - 1}
        </div>
        <div className='absolute z-20 grid h-full font-semibold text-gray-100 border-2 border-gray-100 rounded-md bg-primary bg-opacity-90 right-card2 place-items-center'></div>
        <div className='absolute grid h-full font-semibold text-gray-100 border-2 border-gray-100 rounded-md bg-primary bg-opacity-80 right-card3 place-items-center '></div>
      </div>
    </>
  );
};

export default Tenants;
