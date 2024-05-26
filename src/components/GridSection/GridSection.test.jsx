import { screen } from '@testing-library/react';
import { GridSection } from '.';
import { renderTheme } from '../../styles/renderTheme';
import mock from './mock';

describe('<GridSection />', () => {
  it('Should render grid content', () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
