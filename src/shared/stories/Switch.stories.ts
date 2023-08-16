import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/shared/ui';


const meta: Meta<typeof Switch> = {
    component: Switch,
    parameters: {
        layout: 'centered'
    }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Big: Story = {
    args: {
        sizeel: 'big',
        checked: false,
        error: false
    },
};

export const Middle: Story = {
    args: {
        sizeel: 'middle',
        checked: false,
        error: false
    },
};

export const Small: Story = {
    args: {
        sizeel: 'small',
        checked: false,
        error: false
    },
};

