import { Tenant } from 'src/pages/floor/tenants';

export const buildingData = [
  {
    id: 1,
    name: 'Picadilly Star',
    address:
      'Picadilly Star Corporate Center 4th Ave corner 27th St., Bonifacio Global City, Taguig',
    image:
      'https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/IMAGES/picadilly_star.jpeg',
  },
  {
    id: 2,
    name: 'Aura',
    address: 'Aura Building Address',
    image:
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    name: 'Sample',
    address: 'Sample Building Address',
    image:
      'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 4,
    name: 'Sample',
    address: 'Sample Building Address',
    image:
      'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 5,
    name: 'Sample',
    address: 'Sample Building Address',
    image:
      'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 6,
    name: 'Sample',
    address: 'Sample Building Address',
    image:
      'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 7,
    name: 'Sample',
    address: 'Sample Building Address',
    image:
      'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 8,
    name: 'Sample',
    address: 'Sample Building Address',
    image:
      'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

export interface FloorData {
  floorNo: number;
  tenants: Tenant[];
}

export const floorData: FloorData[] = [
  {
    floorNo: 26,
    tenants: [
      {
        name: 'TXVIA INC.',
        area: 1182,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 25,
    tenants: [
      {
        name: 'KMC SOLUTIONS',
        area: 1054,
        leaseExpiryDate: 'August 2030',
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 24,
    tenants: [
      {
        name: 'KMC SOLUTIONS',
        area: 1054,
        leaseExpiryDate: 'August 2030',
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 20,
    tenants: [
      {
        name: 'KMC SOLUTIONS',
        area: 1054,
        leaseExpiryDate: 'August 2030',
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 19,
    tenants: [
      {
        name: 'YINYI PHILIPPINES INVESTMENT HOLDING GROUP, INC.',
        area: 513,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
      {
        name: 'VACANT',
        area: 541,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
    ],
  },
  {
    floorNo: 17,
    tenants: [
      {
        name: 'MICROSOURCING PHILIPPINES, INC.',
        area: 1054,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 15,
    tenants: [
      {
        name: 'VACANT',
        area: 241,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
      {
        name: 'BBCT LAW',
        area: 260,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
      {
        name: 'VACANT',
        area: 260,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
      {
        name: 'VACANT',
        area: 281,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
      {
        name: 'GOODYEAR PHILIPPINES INC',
        area: 1054,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 14,
    tenants: [
      {
        name: 'GLOBAL SAVANT BUILDING TECHNOLOGIES CORPORATION',
        area: 200,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
      {
        name: 'VACANT',
        area: 241,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
    ],
  },
  {
    floorNo: 12,
    tenants: [
      {
        name: 'VACANT',
        area: 260,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
    ],
  },
  {
    floorNo: 11,
    tenants: [
      {
        name: 'AGGREKO ENERGY RENTAL SOLUTIONS',
        area: 200,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
      {
        name: 'VACANT',
        area: 267,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
    ],
  },
  {
    floorNo: 10,
    tenants: [
      {
        name: 'VACANT',
        area: 241,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
      {
        name: 'VACANT',
        area: 267,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
      {
        name: 'INTERTOUCH BUSINESS SOLUTIONS',
        area: 1054,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 9,
    tenants: [
      {
        name: 'PH GLOBAL KIDS SMART FUTURE TECHNOLOGY INC.',
        area: 0,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 8,
    tenants: [
      {
        name: 'WPP MARKETING COMMUNICATIONS INC.',
        area: 1054,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
    ],
  },
  {
    floorNo: 1,
    tenants: [
      {
        name: 'VACANT',
        area: 111,
        leaseExpiryDate: null,
        verifiedOn: '24 days ago',
      },
    ],
  },
  {
    floorNo: 0,
    tenants: [
      {
        name: 'ASIA UNITED BANK',
        area: 0,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
      {
        name: 'BDO',
        area: 0,
        leaseExpiryDate: null,
        verifiedOn: null,
      },
    ],
  },
];
