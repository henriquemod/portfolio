import type { Meta, StoryObj } from '@storybook/react'

import SkillLevel from '.'

const meta = {
  title: 'Components/SkillLevel',
  component: SkillLevel,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    level: { control: 'number' }
  }
} satisfies Meta<typeof SkillLevel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Typescript',
    level: 4
  }
}
