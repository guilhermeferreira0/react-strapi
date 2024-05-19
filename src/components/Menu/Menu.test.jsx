import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/renderTheme';

import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('Should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();

    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Should render menu mobile and buttom for open and close the menu', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.ltemedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.ltemedium,
    });

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.ltemedium,
    });
  });

  it('Should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
  });
});
