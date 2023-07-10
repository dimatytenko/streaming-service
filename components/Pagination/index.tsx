'use client';
import {FC} from 'react';
import {useRouter, usePathname} from 'next/navigation';
import {Pagination as AntdPagination} from 'antd';
import {ITrendingActorsData} from '@/types/actors';

export const Pagination: FC<{data: ITrendingActorsData; query?: string}> = ({data, query}) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log('pathname', pathname);

  const onChange = (page: number) => {
    if (!page) return;
    router.push(pathname + '?' + `page=${page}${query ? `&query=${query}` : ''}`);
  };

  return (
    <AntdPagination
      current={data.page || 1}
      pageSizeOptions={[20]}
      defaultPageSize={20}
      total={data.total_results || 20}
      onChange={onChange}
    />
  );
};
