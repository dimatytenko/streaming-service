import {Metadata} from 'next';
import {LoginForm} from '@/components/Auth/Login';
import {StyledTitle} from '@/app/styles';
import {FormWrapper, FormContainer} from '../styles';

export const metadata: Metadata = {
  title: 'Streaming service | Login',
  description: 'Login page',
};

export default function Login() {
  return (
    <FormWrapper>
        <StyledTitle>Log in</StyledTitle>
        <FormContainer>
          <LoginForm />
        </FormContainer>
    </FormWrapper>
  );
}
