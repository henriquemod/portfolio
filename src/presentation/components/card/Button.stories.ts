import type { Meta, StoryObj } from '@storybook/react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import Card, { type Action } from '.'

const actionList: Action[] = [
  {
    icon: faGithub,
    url: '#'
  },
  {
    icon: faArrowUpRightFromSquare,
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
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper sapien eu ullamcorper pretium.',
    actions: actionList
  }
}
