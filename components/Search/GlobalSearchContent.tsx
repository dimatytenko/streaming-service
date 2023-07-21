'use client';

import {POSTER_IMG_URL} from '@/constants/api';
import {
  toGlobalSearchState,
  toSearchStateCollections,
  toSearchStateCompanies,
  toSearchStateKeywords,
  toSearchStateMovies,
  toSearchStatePeople,
  toSearchStateShows,
} from '@/helpers/data';
import {
  searchAllData,
  searchDataByCollection,
  searchDataByCompany,
  searchDataByKeyword,
  searchDataByMovie,
  searchDataByPerson,
  searchDataByShows,
} from '@/services/search';
import {ISearchContent, ISearchData} from '@/types/search';
import {List} from 'antd';
import React, {useEffect, useState} from 'react';
import {NothingFound} from '../404/NothingFound';
import {PageLoader} from '../Loader';
import noPhoto from '@/assets/No_image_available.png';
import Image from 'next/image';
import {IconSvg} from '../icons';
import {ActorsPaths, MediaTypes, SearchFilters, ShowPaths} from '@/constants/common';
import {GlobalSearchContentWrapper, StyledSpan, StyledSpanBold} from './styles';
import {Pagination} from '../Pagination';

type Props = {
  query: string;
  page: number;
  filter: SearchFilters;
};

export const GlobalSearchContent: React.FC<Props> = ({query, page, filter}) => {
  const [initialData, setInitialData] = useState<ISearchData>({} as ISearchData);
  const [searchData, setSearchData] = useState<ISearchContent[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const makeReqByFilter = async (filter: SearchFilters, query: string, page: number) => {
    switch (filter) {
      case SearchFilters.MOVIES:
        return await searchDataByMovie(query, page);
      case SearchFilters.SHOWS:
        return await searchDataByShows(query, page);
      case SearchFilters.PEOPLE:
        return await searchDataByPerson(query, page);
      case SearchFilters.KEYWORDS:
        return await searchDataByKeyword(query, page);
      case SearchFilters.COLLECTIONS:
        return await searchDataByCollection(query, page);
      case SearchFilters.COMPANIES:
        return await searchDataByCompany(query, page);
      default:
        return await searchAllData(query, page);
    }
  };

  const convertDataByFilter = (filter: SearchFilters, data: ISearchData): ISearchContent[] => {
    switch (filter) {
      case SearchFilters.MOVIES:
        return toSearchStateMovies(data);
      case SearchFilters.SHOWS:
        return toSearchStateShows(data);
      case SearchFilters.PEOPLE:
        return toSearchStatePeople(data);
      case SearchFilters.KEYWORDS:
        return toSearchStateKeywords(data);
      case SearchFilters.COLLECTIONS:
        return toSearchStateCollections(data);
      case SearchFilters.COMPANIES:
        return toSearchStateCompanies(data);
      default:
        return toGlobalSearchState(data);
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      const data = await makeReqByFilter(filter, query, page);
      setInitialData(data);
      const convertedData = convertDataByFilter(filter, data);
      setSearchData(convertedData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const getItemTitle = (item: ISearchContent): React.ReactNode => {
    switch (item.type) {
      case MediaTypes.PERSON:
        return <a href={`${ActorsPaths.ACTORS}/${item.id}`}>{item.title}</a>;
      case MediaTypes.TV:
        return <a href={`${ShowPaths.SHOWS}/${item.id}`}>{item.title}</a>;
      default:
        return <span>{item.title}</span>;
    }
  };

  useEffect(() => {
    getData();
  }, [query, page, filter]);

  if (!searchData || loading) {
    return <PageLoader />;
  }
  if (!searchData.length) {
    return <NothingFound />;
  }
  return (
    <GlobalSearchContentWrapper>
      <List
        itemLayout="vertical"
        size="large"
        style={{paddingLeft: 20, width: '100%'}}
        dataSource={searchData}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={
              <Image
                width={110}
                height={165}
                alt="item_image"
                src={item.image ? `${POSTER_IMG_URL}${item.image}` : noPhoto}
              />
            }>
            <List.Item.Meta
              avatar={
                Object.values<string>(MediaTypes).includes(item.type) ? (
                  <IconSvg type={item.type as MediaTypes} width="32" height="32" />
                ) : undefined
              }
              title={getItemTitle(item)}
              description={
                <>
                  <StyledSpanBold>
                    {item.type === MediaTypes.MOVIE
                      ? 'Release Date: '
                      : item.type === MediaTypes.TV
                      ? 'First air date : '
                      : item.type === MediaTypes.PERSON
                      ? 'Department: '
                      : ''}
                  </StyledSpanBold>
                  <StyledSpan>{item.subtitle}</StyledSpan>
                </>
              }
            />
            <StyledSpanBold>{item.type === MediaTypes.PERSON ? 'Known for: ' : ''}</StyledSpanBold>
            <StyledSpan>{item.description}</StyledSpan>
          </List.Item>
        )}
      />
      <Pagination data={initialData} query={query} />
    </GlobalSearchContentWrapper>
  );
};
