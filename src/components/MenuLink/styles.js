import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;
    scale: 1;
    transition: scale 0.5s ease-in-out;


    &::after {
      content: '';
      position: absolute;
      bottom: 0.75rem;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all 0.5s ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }

    &:hover {
      scale: 1.1;
    }

    @media ${theme.media.ltemedium} {
      &:hover::after {
      left: 20.5%;
      width: 50%;
    }
    }
  `}`;
