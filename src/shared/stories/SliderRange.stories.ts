import type { Meta, StoryObj } from '@storybook/react';
import { SliderRange } from '@/shared/ui';


const meta: Meta<typeof SliderRange> = {
    component: SliderRange,
};

export default meta;
type Story = StoryObj<typeof SliderRange>;

export const Primary: Story = {
    args: {
        sizeel: 'medium',
        disabled: false
    },
};

export const Disabled: Story = {
    args: {
        sizeel: 'medium',
        disabled: true
    },
};

