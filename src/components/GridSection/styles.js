import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.media.ltemedium} {
      grid-template-columns: 1fr;
    }
  `}`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 7rem;
    }

    ${HeadingContainer}::before {
      content: counter(grid-counter);
      counter-increment: grid-counter;
      position: absolute;
      font-size: ${theme.fonts.sizes.huge};
      top: -2rem;
      left: -7rem;
      transform: rotate(10deg);
    }
  `}`;
