import {ItemsWrapper} from '@/app/styles';
import {getShowDetails} from '@/services/shows';
import {ShowCard} from '@/components/Show/Show';
import {AboutShow} from '@/components/Show/About';
import {ShowWrapper} from '@/app/tv/styles';

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({params: {id}}: Props) => {
  return {
    title: `Streaming service | Show details ${id}`,
  };
};

export default async function Show({params: {id}}: Props) {
  const show = await getShowDetails(id);

  return (
    <ItemsWrapper>
      <ShowWrapper>
        <ShowCard card={show} />
        <AboutShow show={show} />
      </ShowWrapper>
    </ItemsWrapper>
  );
}
