import type { Meta, StoryObj } from '@storybook/react'

import ChapterSkeleton from '.'

const meta = {
  title: 'Skeletons/ChapterSkeleton',
  component: ChapterSkeleton,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof ChapterSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: '1',
    title: 'Chapter 1'
  }
}
