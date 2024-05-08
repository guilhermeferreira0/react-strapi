import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('Should render home', () => {
    renderTheme(<Home />);
  });
});
