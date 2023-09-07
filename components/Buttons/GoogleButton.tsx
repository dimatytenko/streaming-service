'use client';

import {signIn} from 'next-auth/react';
import {useSearchParams} from 'next/navigation';
import {FcGoogle} from 'react-icons/fc';

import {StyledGoogleButton} from './styles';

export const GoogleButton = () => {
  const searchParams = useSearchParams()!;
  let callbackUrl = searchParams.get('callbackUrl')!;

  if (callbackUrl === null) {
    callbackUrl = '/profile';
  }

  return (
    <StyledGoogleButton onClick={() => signIn('google', {callbackUrl})}>
      <FcGoogle size={20} />
      <span>Continue with Google</span>
    </StyledGoogleButton>
  );
};
