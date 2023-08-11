import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@/shared/ui';


const meta: Meta<typeof Radio> = {
    component: Radio,
    parameters: {
        layout: 'centered',
    },
};



export default meta;
type Story = StoryObj<typeof Radio>;

export const Init: Story = {
    args: {
        label: "Radio init",
        checked: false,
        disabled: false,
        error: false,
    },
};

export const Checked: Story = {
    args: {
        label: "Radio checked",
        checked: true,
        disabled: false,
        error: false,
    },
};

export const Disabled: Story = {
    args: {
        label: "Radio disabled",
        checked: false,
        disabled: true,
        error: false,
    },
};

export const Checked_And_Disabled: Story = {
    args: {
        label: "Radio disabled",
        checked: true,
        disabled: true,
        error: false,
    },
};

export const Error: Story = {
    args: {
        label: "Radio error",
        checked: false,
        disabled: false,
        error: true
    },
};