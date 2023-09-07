import {Metadata} from 'next';
import {LoginForm} from '@/components/Auth/Login';
import {StyledTitle} from '@/app/styles';

export const metadata: Metadata = {
  title: 'Streaming service | Login',
  description: 'Login page',
};

export default function Login() {
  return (
    <section>
      <StyledTitle>Log in</StyledTitle>
      <LoginForm />
    </section>
  );
}
