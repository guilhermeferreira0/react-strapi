import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  margin-left: 0;
  opacity: 1;
`;

export const Container = styled.nav`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 14.5%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 0.6s ease-in-out;

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.ltemedium} {
      height: 100vh;
      margin-left: 350px;
      opacity: 0;
      ${visible && menuVisible(theme)}

      & ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.ltemedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
`}`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;
    cursor: pointer;
    pointer-events: ${visible ? 'none' : 'all'};

  > svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media ${theme.media.ltemedium} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`}
`;
