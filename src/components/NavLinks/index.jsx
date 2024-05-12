import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ Links = [] }) => {
  return (
    <Styled.Container>
      {Links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  Links: P.arrayOf({
    children: P.string.isRequired,
    link: P.string.isRequired,
    newTab: P.bool,
  }),
};
