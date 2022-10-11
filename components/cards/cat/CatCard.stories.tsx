import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardCat, { ICatCardProps } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'template/CardCat',
  component: CardCat,
  argTypes: {},
} as ComponentMeta<typeof CardCat>;

const Template: ComponentStory<typeof CardCat> = (args) => (
  <CardCat {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCatCardProps.base,
} as ICatCardProps;
