import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<LogoLink />', () => {
  it('Should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  // it('Should render image logo', () => {
  //   renderTheme(
  //     <LogoLink link="#target" text="olá mundo" srcImage="image.jpg" />,
  //   );
  //   const heading = screen.getByRole('heading', { name: 'olá mundo' });
  //   expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpg');
  // });

  it('Should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="olá mundo" srcImage="image.jpg" />,
    );
    expect(screen.getByRole('img', { name: 'olá mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="olá mundo" srcImage="image.jpg" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
