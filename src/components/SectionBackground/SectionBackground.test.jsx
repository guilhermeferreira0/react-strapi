import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionBackground />', () => {
  it('Should render', () => {
    renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('Should render', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
