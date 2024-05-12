import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/renderTheme';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('Should render links', () => {
    renderTheme(<NavLinks Links={mock}>Children</NavLinks>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('Should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  // it('Should render style link 10', () => {
  //   renderTheme(<NavLinks Links={mock} />);
  //   expect(screen.getByText(/Link 10/i).parentElement).toHaveStyleRule(
  //     'flex-flow',
  //     'column wrap',
  //     {
  //       media: theme.media.ltemedium,
  //     },
  //   );
  // });

  it('Should match snapshot', () => {
    renderTheme(<NavLinks Links={mock} />);
    expect(screen.queryAllByRole('link')).toMatchSnapshot();
  });
});
