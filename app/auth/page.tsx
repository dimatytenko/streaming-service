import {LoginForm} from '@/components/Auth/LoginForm';

export const metadata = {
  title: 'Streaming service | Auth',
  description: 'Log in to get full access',
};

export default function Auth() {
  return <LoginForm />;
}
