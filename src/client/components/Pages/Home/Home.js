import React from 'react';
import { Debug } from 'informed';
import useGet from '../../../hooks/useGet';
import useAuth from '../../../hooks/useAuth';

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
      {/* <Contrast /> */}
      {/* <Form>
        <FormLayout>
          <Input name="name" label="First Name" required />
          <Button type="submit">submit</Button>
          <Debug />
        </FormLayout>
      </Form> */}
    </>
  );
};
