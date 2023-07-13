'use client';

import {POSTER_IMG_URL} from '@/constants/api';
import {toGlobalSearchState} from '@/helpers/data';
import {searchAllData} from '@/services/search';
import {ISearchContent, ISearchData} from '@/types/search';
import {List} from 'antd';
import React, {useEffect, useState} from 'react';
import {NothingFound} from '../404/NothingFound';
import {PageLoader} from '../Loader';
import noPhoto from '@/assets/No_image_available.png';
import Image from 'next/image';
import {IconSvg} from '../icons';
import {ActorsPaths, MediaTypes} from '@/constants/common';
import {GlobalSearchContentWrapper, StyledSpan, StyledSpanBold} from './styles';
import {Pagination} from '../Pagination';

type Props = {
  query: string;
  page: number;
};

export const GlobalSearchContent: React.FC<Props> = ({query, page}) => {
  const [initialData, setInitialData] = useState<ISearchData>({} as ISearchData);
  const [searchData, setSearchData] = useState<ISearchContent[]>();
  const getData = async (query: string, page: number) => {
    try {
      const data = await searchAllData(query, page);
      setInitialData(data);
      const convertedData = toGlobalSearchState(data);
      console.log(data);
      console.log('convertedData', convertedData);
      setSearchData(convertedData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData(query, page);
  }, [query, page]);

  if (!searchData) {
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
              avatar={<IconSvg type={item.type} width="32" height="32" />}
              title={
                <a href={item.type === MediaTypes.PERSON ? `${ActorsPaths.ACTORS}/${item.id}` : '#'}>{item.title}</a>
              }
              description={
                <>
                  <StyledSpanBold>
                    {item.type === MediaTypes.MOVIE
                      ? 'Release Date: '
                      : item.type === MediaTypes.TV
                      ? 'First air date : '
                      : 'Department: '}
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
