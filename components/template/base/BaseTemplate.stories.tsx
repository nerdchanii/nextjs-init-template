import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseTemplate from './BaseTemplate';
import { IBaseTemplateProps } from './BaseTemplate copy 2';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'template/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplateProps;
