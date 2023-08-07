import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    value: 'Some text inside',
    placeholder: 'Some text',
  },
};

export const WithoutText: Story = {
  args: {
    placeholder: 'Some text',
    value: '',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Some text',
    value: 'Some text inside',
    error: true
  },
};