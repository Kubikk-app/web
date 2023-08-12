import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/shared/ui';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarFromFolderS: Story = {
  args: {
    src: 'https://i.pinimg.com/originals/59/20/63/59206380ed869b62ac538c9e678a2b04.png',
    alt: 'avatar',
    size: 'small'
  },
};


export const AvatarFromServerM: Story = {
  args: {
    src: 'https://i.pinimg.com/originals/59/20/63/59206380ed869b62ac538c9e678a2b04.png',
    alt: 'avatar',
    size: 'medium'
  },
};


export const AvatarFromServerL: Story = {
  args: {
    src: 'https://i.pinimg.com/originals/59/20/63/59206380ed869b62ac538c9e678a2b04.png',
    alt: 'avatar',
    size: 'large'
  },
};
