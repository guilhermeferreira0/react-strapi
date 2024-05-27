import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/renderTheme';
import mock from './mock';

describe('<GridImage />', () => {
  it('Should render grid image', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render grid with background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
