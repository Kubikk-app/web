import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/shared/ui';


const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
};



export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Init: Story = {
    args: {
        label: "CheckBox init",
        checked: false,
        disabled: false,
        error: false,
    },
};

export const Checked: Story = {
    args: {
        label: "CheckBox checked",
        checked: true,
        disabled: false,
        error: false,
    },
};

export const Disabled: Story = {
    args: {
        label: "CheckBox disabled",
        checked: false,
        disabled: true,
        error: false,
    },
};

export const Checked_And_Disabled: Story = {
    args: {
        label: "CheckBox disabled",
        checked: true,
        disabled: true,
        error: false,
    },
};

export const Error: Story = {
    args: {
        label: "CheckBox error",
        checked: false,
        disabled: false,
        error: true
    },
};