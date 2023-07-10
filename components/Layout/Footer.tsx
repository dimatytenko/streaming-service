import {Container} from '@/app/styles';
import {FooterWrapper, FooterContent} from './styles';

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>&copy; {date} Copyright. All rights reserved.</FooterContent>
      </Container>
    </FooterWrapper>
  );
};
