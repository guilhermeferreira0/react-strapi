import { mapSectionTwoColumns, mapSections } from './map-sections';

describe('Map-sections', () => {
  it('Should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('Should map section two columns', () => {
    const data = mapSectionTwoColumns({});
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImage).toBe('');
  });

  it('Should map section two columns insert values', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056172',
      title: 'January brings us Firefox 85',
      description: 'To wrap up.',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617f',
        section_id: 'home',
        name: 'Home',
        __v: 0,
        id: '602fdf2d540c00269e05617f',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056172',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.srcImage).toBe(
      'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
    );
    expect(data.text).toBe('To wrap up.');
    expect(data.title).toBe('January brings us Firefox 85');
  });
});
