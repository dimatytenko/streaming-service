import {ReadonlyURLSearchParams} from 'next/navigation';

export const updateSearchParam = (searchParams: ReadonlyURLSearchParams, param: string, value: string) => {
  const currentSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
  currentSearchParams.set(param, value);

  return currentSearchParams;
};
