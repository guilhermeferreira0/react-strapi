import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('Should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
