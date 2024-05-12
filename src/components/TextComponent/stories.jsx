import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem perspiciatis omnis nostrum amet voluptas assumenda, cupiditate molestiae id optio aspernatur explicabo eum inventore repudiandae quos beatae est libero, facere quidem.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem' }}>
      <TextComponent {...args} />
    </div>
  );
};
