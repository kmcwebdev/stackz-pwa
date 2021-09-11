import { ChevronDoubleUpIcon } from '@heroicons/react/outline';
import Layout from 'src/components/layout';
import Routes from './Routes';

const Pages: React.FC = () => {
  return (
    <Layout>
      <Routes />

      <div
        className='absolute bottom-10 right-0 bg-secondary h-12 w-12 rounded-l-full grid place-items-center shadow-md'
        style={{ zIndex: 60 }}
      >
        <ChevronDoubleUpIcon className='h-5 w-5 text-primary' />
      </div>
    </Layout>
  );
};

export default Pages;
