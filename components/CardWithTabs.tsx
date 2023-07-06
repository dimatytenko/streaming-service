'use client';
import {Card} from 'antd';
import {useState} from 'react';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList: Record<string, React.ReactNode> = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

export const CardWithTabs = () => {
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  return (
    <Card
      style={{width: '100%'}}
      title="Card title"
      tabList={tabList}
      activeTabKey={activeTabKey1}
      onTabChange={onTab1Change}>
      {contentList[activeTabKey1]}
    </Card>
  );
};
