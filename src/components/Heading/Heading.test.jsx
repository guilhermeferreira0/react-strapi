import { Heading } from '../Heading';
import { renderTheme } from '../../styles/renderTheme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Heading /> ', () => {
  it('Should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: 'black',
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('Should render with white color', () => {
    renderTheme(<Heading colorDark>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('Should render correct heading sizes', () => {
    renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  // it('Should render correct font-size when using mobile', () => {
  //   renderTheme(<Heading size="huge">Texto</Heading>);
  //   const heading = screen.getByRole('heading', { name: 'Texto' });

  //   expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.medium, {
  //     media: theme.media.ltemedium,
  //   });
  // });

  it('Should render with text uppercase', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({ 'text-transform': 'uppercase' });
  });

  it('Should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
