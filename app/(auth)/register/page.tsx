import {Metadata} from 'next';

import {RegisterForm} from '@/components/Auth/Register';
import {StyledTitle} from '@/app/styles';

export const metadata: Metadata = {
  title: 'Streaming service | Register',
  description: 'Register page',
};

const Register = () => {
  return (
    <section>
      <StyledTitle>Create Personal Account</StyledTitle>
      <RegisterForm />
    </section>
  );
};

export default Register;
