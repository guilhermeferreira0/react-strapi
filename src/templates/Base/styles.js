import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 5.4rem;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media (max-width: 975px) {
      padding-top: 8.0rem;
    }

    @media ${theme.media.ltemedium} {
      padding-top: 0;
    }

  `}`;
