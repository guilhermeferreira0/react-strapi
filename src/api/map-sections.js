export const mapSections = (sections = []) => {
  return sections.map((sec) => {
    if (sec.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(sec);
    }
    if (sec.__component === 'section.section-content') {
      return mapSectionContent(sec);
    }
    if (sec.__component === 'section.section-grid') {
      return mapSectionGrid(sec);
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

export const mapSectionGrid = (section) => {
  return section;
};
