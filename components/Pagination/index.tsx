'use client';
import {useRouter, usePathname} from 'next/navigation';
import {Pagination as AntdPagination} from 'antd';
import {ITrendingActorsData} from '@/types/actors';
import {ISearchData} from '@/types/search';

export const Pagination: React.FC<{data: ITrendingActorsData | ISearchData; query?: string}> = ({data, query}) => {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (page: number) => {
    if (!page) return;
    router.push(pathname + '?' + `page=${page}${query ? `&query=${query}` : ''}`);
  };

  return (
    <AntdPagination
      current={data.page || 1}
      showSizeChanger={false}
      defaultPageSize={20}
      total={data.total_results || 20}
      onChange={onChange}
    />
  );
};
