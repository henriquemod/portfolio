import type { Meta, StoryObj } from '@storybook/react'
import Box from '.'

const meta = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' }
  }
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Box'
  }
}

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Box'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Medium Box'
  }
}

export const FullWidth: Story = {
  args: {
    size: 'full-width',
    children: 'Medium Box'
  }
}
