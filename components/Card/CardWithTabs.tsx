'use client';
import {POSTER_IMG_URL} from '@/constants/api';
import {ITrendingMovies} from '@/types/data';
import {Typography} from 'antd';
import {useState} from 'react';
import {ContentElementImage, ContentElementWrapper, StyledCard, StyledTitle} from './styles';

const {Text} = Typography;

const tabList = [
  {
    key: 'tab1',
    tab: 'Today',
  },
  {
    key: 'tab2',
    tab: 'This week',
  },
];

type CardWithTabsProps = {
  title: string;
  dayData: ITrendingMovies[];
  weekData: ITrendingMovies[];
};

type CardContentProps = {
  data: ITrendingMovies[];
};

export const CardWithTabs: React.FC<CardWithTabsProps> = ({title, dayData, weekData}) => {
  const [activeTabKey, setActiveTabKey] = useState<string>(tabList[0].key);
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };
  const contentList: Record<string, React.ReactNode> = {
    tab1: <CardContent data={dayData.slice(0, 7)} />,
    tab2: <CardContent data={weekData.slice(0, 7)} />,
  };

  return (
    <StyledCard
      style={{width: '100%'}}
      title={title}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}>
      {contentList[activeTabKey]}
    </StyledCard>
  );
};

const CardContent: React.FC<CardContentProps> = ({data}) => {
  return (
    <>
      {data.map((d) => (
        <ContentElementWrapper key={d.id}>
          <ContentElementImage src={`${POSTER_IMG_URL}${d.poster_path}`} />
          <StyledTitle level={5}>{d.title}</StyledTitle>
          <Text type="secondary">{d.release_date}</Text>
        </ContentElementWrapper>
      ))}
    </>
  );
};
