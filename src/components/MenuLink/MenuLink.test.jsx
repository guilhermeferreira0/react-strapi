import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MenuLink />', () => {
  it('Should render a link', () => {
    renderTheme(<MenuLink link={'https://localhost'}>Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('Should render open in a new tab', () => {
    renderTheme(
      <MenuLink link={'https://localhost'} newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('Should render a snapshot', () => {
    renderTheme(
      <MenuLink link={'https://localhost'} newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toMatchSnapshot();
  });
});
