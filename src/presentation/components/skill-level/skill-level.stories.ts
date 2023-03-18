import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import SkillLevel from '.'

const meta = {
  title: 'Components/SkillLevel',
  component: SkillLevel,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    level: { control: 'number', min: 1, max: 5 }
  }
} satisfies Meta<typeof SkillLevel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Typescript',
    level: 3
  }
}

Primary.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement)
  const expectedFilledBlocksSize = args.level
  const expectedNoneBlocksSize = 5 - args.level

  await step('should render all blocks', async () => {
    const blocks = canvas.queryAllByRole('rank-block')
    const noneBlocks = canvas.queryAllByRole('rank-block-none')

    expect(blocks).toHaveLength(expectedFilledBlocksSize)
    expect(noneBlocks).toHaveLength(expectedNoneBlocksSize)
  })
}
