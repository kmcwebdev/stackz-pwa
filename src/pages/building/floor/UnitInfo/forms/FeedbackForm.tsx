import { Button, Divider, Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

interface FeedbackFormProps {
  toggleModal: React.MouseEventHandler<HTMLElement> | undefined;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ toggleModal }) => {
  const [feedbackForm] = useForm();

  const submitFeedbackForm = () => {
    feedbackForm.validateFields().then((values) => console.log(values));
  };

  return (
    <Form layout='vertical' form={feedbackForm} onFinish={submitFeedbackForm}>
      <Form.Item
        name='feedback'
        label='Feedback'
        rules={[{ required: true, message: 'Please enter feedback!' }]}
      >
        <TextArea rows={8} />
      </Form.Item>

      <Divider className='my-4' />
      <div className='flex justify-end'>
        <div className='grid grid-cols-2 gap-2 md:w-5/12'>
          <Button type='default' onClick={toggleModal}>
            Cancel
          </Button>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default FeedbackForm;
