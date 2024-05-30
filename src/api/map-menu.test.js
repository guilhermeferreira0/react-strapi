import { mapMenu, mapMenuLinks } from './map-menu';

describe('Map-menu', () => {
  it('Should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('Should map menu to match keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      _id: '602fdf30540c00269e0561ae',
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561b3',
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561b4',
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613748744/landing_page_2_f7da938739.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe(
      'https://res.cloudinary.com/dlizakp2a/image/upload/v1613748744/landing_page_2_f7da938739.svg',
    );
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('Should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('Should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        _id: '602fdf30540c00269e0561b3',
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
