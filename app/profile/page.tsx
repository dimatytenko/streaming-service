import {authConfig} from '@/configs/auth';
import {getServerSession} from 'next-auth';
import Image from 'next/image';

export const metadata = {
  title: 'Streaming service | Profile',
  description: 'User profile',
};

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <Image src={session?.user?.image} width={100} height={100} alt="user image" />}
    </div>
  );
}
