import { Card } from 'antd';
import { Fragment } from 'react';
import { useWindowSize } from 'src/utils/use-window-size';

const List: React.FC = () => {
  const { width } = useWindowSize();

  const hover = width > 768;

  return (
    <Fragment>
      <Card
        className='shadow-sm'
        hoverable={hover}
        cover={
          <div className='relative'>
            <div className='absolute bottom-10 right-1'>
              <div className='w-40 bg-red-500'>a</div>
            </div>
            <img
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          </div>
        }
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
      <Card
        className='shadow-sm'
        hoverable={hover}
        cover={
          <img
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
      <Card
        className='shadow-sm'
        hoverable={hover}
        cover={
          <img
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
      <Card
        className='shadow-sm'
        hoverable={hover}
        cover={
          <img
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
