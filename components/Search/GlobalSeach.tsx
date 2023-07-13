'use client';
import {useRouter} from 'next/navigation';
import {StyledSearch} from './styles';

export const GlobalSearch: React.FC = () => {
  const router = useRouter();
  const onSearch = (value: string) => router.push(`/search?page=1&query=${value}`);

  return (
    <StyledSearch
      placeholder="Search for a movie, tv show, actor, etc..."
      allowClear
      size="large"
      onSearch={onSearch}
    />
  );
};
