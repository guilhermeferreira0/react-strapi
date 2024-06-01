export const mapSections = (sections = []) => {
  return sections.map((sec) => {
    if (sec.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(sec);
    }
    if (sec.__component === 'section.section-content') {
      return mapSectionContent(sec);
    }
    if (sec.__component === 'section.section-grid') {
      const { text_grid: textGrid = [], image_grid: imageGrid = [] } = sec;

      if (textGrid.length > 0) {
        return mapTextGrid(sec);
      }
      if (imageGrid.length > 0) {
        return mapImageGrid(sec);
      }
    }

    return sec;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImage = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = '',
  } = section;
  return {
    component,
    title,
    text,
    srcImage,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = '',
  } = section;
  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = '',
    text_grid: grid = [],
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = '',
    image_grid: grid = [],
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { alternativeText: altText = '', url: srcImage = '' } = '',
      } = img;
      return {
        altText,
        srcImage,
      };
    }),
  };
};
