import type { Meta, StoryObj } from '@storybook/react'

import Tag from '.'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' }
  }
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Tag'
  }
}
