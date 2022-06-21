import React from 'react';
import { Debug } from 'informed';
import useGet from '../../../hooks/useGet';
import useAuth from '../../../hooks/useAuth';
import Input from '../../Informed/Input';
import Form from '../../Informed/Form';
import { Button } from '@adobe/react-spectrum';

export const Home = () => {
  const { user } = useAuth();

  const { loading, error, data } = useGet({
    url: '/health',
  });

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  return (
    <>
      <h1>Hello {user.name}!</h1>
      <h2>The Health Check is reporting {data.status}</h2>
      <Form>
        <Input name="name" label="Name" placeholder="Joe" />
        <Input name="age" type="number" label="Age" required="Age Required" />
        <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
        <Input name="color" label="Favorite Color" defaultValue="Green" />
        <Button type="submit">submit</Button>
        <Debug />
      </Form>
    </>
  );
};
