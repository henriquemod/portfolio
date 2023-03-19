import type { Meta, StoryObj } from '@storybook/react'
import { within, fireEvent } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'

import Button from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Click Me',
    handleClick: jest.fn()
  }
}

Primary.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement)

  await step('should be enabled', async () => {
    const btn = canvas.getByTestId('component-button')

    expect(btn).toBeEnabled()
  })

  await step('should render all blocks', async () => {
    const btn = canvas.getByTestId('component-button')

    fireEvent.click(btn)

    expect(args.handleClick).toHaveBeenCalled()
  })
}

export const Disabled: Story = {
  args: {
    label: 'Click Me',
    handleClick: jest.fn(),
    disabled: true
  }
}

Disabled.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement)

  await step('should be disabled', async () => {
    const btn = canvas.getByTestId('component-button')

    expect(btn).toBeDisabled()
  })

  await step('should not call handleClick', async () => {
    const btn = canvas.getByTestId('component-button')

    fireEvent.click(btn)

    expect(args.handleClick).toHaveBeenCalledTimes(0)
  })
}
