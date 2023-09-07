import {Metadata} from 'next';

import {RegisterForm} from '@/components/Auth/Register';
import {StyledTitle} from '@/app/styles';
import {FormWrapper, FormContainer} from '../styles';

export const metadata: Metadata = {
  title: 'Streaming service | Register',
  description: 'Register page',
};

const Register = () => {
  return (
    <FormWrapper>
      <StyledTitle>Create Personal Account</StyledTitle>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </FormWrapper>
  );
};

export default Register;
