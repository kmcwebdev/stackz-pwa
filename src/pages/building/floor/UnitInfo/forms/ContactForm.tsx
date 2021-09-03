import { Button, Divider, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';

interface FeedbackFormProps {
  toggleModal: React.MouseEventHandler<HTMLElement> | undefined;
}

const ContactForm: React.FC<FeedbackFormProps> = ({ toggleModal }) => {
  const [feedbackForm] = useForm();

  const submitFeedbackForm = () => {
    feedbackForm.validateFields().then((values) => console.log(values));
  };

  return (
    <Form layout='vertical' form={feedbackForm} onFinish={submitFeedbackForm}>
      <Form.Item
        name='contactName'
        label='Name'
        rules={[{ required: true, message: 'Please enter contact name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='contactNo'
        label='Contact Number'
        rules={[{ required: true, message: 'Please enter contact number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='contactEmail'
        label='Contact Email'
        rules={[{ required: true, message: 'Please enter contact email!' }]}
      >
        <Input />
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

export default ContactForm;
