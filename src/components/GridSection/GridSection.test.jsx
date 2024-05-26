import { screen } from '@testing-library/react';
import { GridSection } from '.';
import { renderTheme } from '../../styles/renderTheme';
import mock from './mock';

describe('<GridSection />', () => {
  it('Should render grid content', () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render grid withou background', () => {
    const { container } = renderTheme(
      <GridSection {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
