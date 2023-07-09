'use client';
import {POSTER_IMG_URL} from '@/constants/api';
import {CardVariants} from '@/constants/common';
import {ICardWithTabs} from '@/types/data';
import {Typography} from 'antd';
import {ContentElementImage, ContentElementWrapper, StyledCard, StyledTitle} from './styles';

const {Text} = Typography;

type CardProps = CardContentProps & {
  title: string;
};

type CardContentProps = {
  data: ICardWithTabs[];
};

export const Card: React.FC<CardProps> = ({title, data}) => {
  return (
    <StyledCard $variant={CardVariants.SECONDARY} style={{width: '100%'}} title={title}>
      <CardContent data={data.slice(0, 7)} />
    </StyledCard>
  );
};

const CardContent: React.FC<CardContentProps> = ({data}) => {
  return (
    <>
      {data.map((d) => (
        <ContentElementWrapper key={d.id}>
          <ContentElementImage src={`${POSTER_IMG_URL}${d.image}`} />
          <StyledTitle level={5}>{d.title}</StyledTitle>
          <Text type="secondary">{d.releaseDate}</Text>
        </ContentElementWrapper>
      ))}
    </>
  );
};
