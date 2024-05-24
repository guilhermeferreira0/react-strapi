import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/renderTheme';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('Should render two columns grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
