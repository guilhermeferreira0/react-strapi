import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';

export const GridTwoColumn = ({
  title,
  text,
  srcImage,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase colorDark={background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <Styled.Image src={srcImage} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImage: P.string.isRequired,
  background: P.bool,
};
