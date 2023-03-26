import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Card, { type Action } from '.'
import { IconType } from '@/domain/models/profile-data-model'

const actionList: Action[] = [
  {
    icon: IconType.Github,
    url: '#'
  },
  {
    icon: IconType.ArrowUpRightFromSquare,
    url: '#'
  }
]

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    tags: { control: 'array' }
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Lorem Ipsum',
    tags: ['tag1', 'tag2', 'tag3'],
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    actions: actionList
  }
}

Primary.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement)

  await step('should render all tags', async () => {
    const tags = canvas.queryAllByRole('tag')

    expect(tags).toHaveLength(args.tags.length)
  })
}
