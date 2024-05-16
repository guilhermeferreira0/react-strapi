import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
          facere. Corporis asperiores aut odit modi explicabo est ratione harum
          amet dicta provident. Perferendis voluptatem aliquid vero eligendi
          harum vitae. Deserunt.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
