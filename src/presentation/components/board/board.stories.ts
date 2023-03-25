import type { Meta, StoryObj } from '@storybook/react'

import Board from '.'

const meta = {
  title: 'Components/Board',
  component: Board,
  tags: ['autodocs'],
  argTypes: {
    skills: { control: 'array' }
  }
} satisfies Meta<typeof Board>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    skills: [
      {
        title: 'Typescript',
        score: 4
      },
      {
        title: 'Storybooks',
        score: 4
      },
      {
        title: 'Jest',
        score: 4
      }
    ]
  }
}
