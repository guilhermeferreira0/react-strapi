import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    & > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
  `}`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 8px;
  `}`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all .5s ease-in-out;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
      transform: scale(1.4) rotate(10deg);
    }
  `}`;
