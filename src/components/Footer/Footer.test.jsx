import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Footer />', () => {
  it('Should render', () => {
    const { container } = renderTheme(
      <Footer
        footerHtml="
      <h1>Testando</h1>"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
