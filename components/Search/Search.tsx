'use client';
import {Input} from 'antd';
const {Search} = Input;
import {useRouter} from 'next/navigation';

import {ActorsPaths} from '@/constants/common';

type Props = {
  route: ActorsPaths;
  placeholder: string;
};

export const SearchComponent: React.FC<Props> = ({route, placeholder}) => {
  const router = useRouter();
  const onSearch = (value: string) => router.push(`${route}?page=1&query=${value}`);

  return <Search placeholder={placeholder} allowClear enterButton="Search" size="large" onSearch={onSearch} />;
};
