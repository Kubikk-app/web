import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from './avatar1.jpeg'
import { Avatar } from './Avatar.tsx';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarFromFolder: Story = {
  args: {
    src: AvatarImg,
    alt: 'avatar'
  },
};

export const AvatarFromServer: Story = {
  args: {
    src: 'https://i.pinimg.com/originals/59/20/63/59206380ed869b62ac538c9e678a2b04.png',
    alt: 'avatar'
  },
};
