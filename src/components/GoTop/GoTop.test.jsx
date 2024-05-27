import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<GoTop />', () => {
  it('Should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to Top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to Top' })).toHaveAttribute(
      'href',
      '#',
    );

    expect(container).toMatchSnapshot();
  });
});
