import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@/shared/ui';


const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Cat: Story = {
  args: {
    src: 'https://million-wallpapers.com/wallpapers/2/32/small/347053652646281.jpg',
    alt: 'some image'
  },
};

export const Cat2: Story = {
  args: {
    src: 'https://w.forfun.com/fetch/41/41b193d8c5bb5c6287912c7fa367c82f.jpeg',
    alt: 'some image'
  },
};
