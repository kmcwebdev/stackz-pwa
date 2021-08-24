import { Card } from 'antd';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'src/utils/use-window-size';

const List: React.FC = () => {
  const { width } = useWindowSize();
  const { push } = useHistory();

  const hover = width > 768;

  return (
    <Fragment>
      <Card
        className='shadow-sm'
        hoverable={hover}
        cover={
          <div className='relative'>
            <div className='absolute top-10 right-1'>
              <div className='w-40 bg-red-500'>asdasda</div>
            </div>
            <img
              className='w-full h-80'
              alt='Picadilly-start-building'
              src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/IMAGES/picadilly_star.jpeg'
            />
          </div>
        }
        onClick={() => push('/dashboard')}
      >
        <Card.Meta
          title='Picadilly Star Building'
          description='Picadilly Star Corporate Center
        4th Ave corner 27th St., Bonifacio Global City, Taguig'
        />
      </Card>
      <Card
        className='shadow-sm'
        hoverable={hover}
        cover={
          <img
            className='w-full h-80'
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
          />
        }
      >
        <Card.Meta
          title='Picadilly Star Building'
          description='Picadilly Star Corporate Center
        4th Ave corner 27th St., Bonifacio Global City, Taguig'
        />
      </Card>
    </Fragment>
  );
};

export default List;
