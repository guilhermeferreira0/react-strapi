import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('Map-sections', () => {
  it('Should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('Should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('Should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('Should test section.section-grid no image-grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('Should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImage).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map section two columns insert values', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'To wrap up.',
      metadata: {
        background: true,
        section_id: 'home',
        name: 'Home',
      },
      image: {
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

  it('Should map section content', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map section content insert values', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      content:
        '<p>The release of Apple Silicon-based Macs at the end of last year generated.</p>',
      metadata: {
        background: true,
        name: 'intro',
        section_id: 'intro',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe(
      '<p>The release of Apple Silicon-based Macs at the end of last year generated.</p>',
    );
  });

  it('Should map section grid text', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
    expect(data.title).toBe('');
  });

  it('Should map section grid text insert Values', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description:
        'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
      title: 'My Grid',
      text_grid: [
        {
          _id: '602fdf2d540c00269e05617c',
          title: 'Teste 1',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
      ],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.description).toBe(
      'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
    );
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    );
    expect(data.title).toBe('My Grid');
  });

  it('Should map section grid text undefined', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map section grid image', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
  });

  it('Should map section grid image insert values', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056175',
      description:
        'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.description).toBe(
      'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
    );
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].altText).toBe(
      'Uma paisagem com céu claro e montanhas bonitas',
    );
    expect(data.grid[0].srcImage).toBe(
      'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg',
    );
  });
});
