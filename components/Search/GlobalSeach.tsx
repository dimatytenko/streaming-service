'use client';
import {useRouter} from 'next/navigation';
import {StyledSearch} from './styles';

export const GlobalSearch: React.FC = () => {
  const router = useRouter();
  const onSearch = () => router.push(`/search`);

  return (
    <StyledSearch
      placeholder="Search for a movie, tv show, actor, etc..."
      allowClear
      size="large"
      onSearch={onSearch}
    />
  );
};
