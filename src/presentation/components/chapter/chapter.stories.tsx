import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import * as React from 'react'

import Chapter from '.'

const children = (
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit dolor
    sint autem asperiores repellat, cupiditate ipsum aut unde maxime iste.
    Facere ipsa dicta neque expedita deleniti ex velit culpa?
  </span>
)

const meta = {
  title: 'Components/Chapter',
  component: Chapter,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    id: {
      control: 'number'
    }
  }
} satisfies Meta<typeof Chapter>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: 1,
    title: 'Chapter title',
    description: 'Chapter description',
    children
  }
}

Primary.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement)

  await step('should render title, footer and children', async () => {
    const title = canvas.getByText(`<${args.title}>`)
    const content = canvas.getByTestId('child-box')
    const footer = canvas.getByText(`</${args.title}>`)

    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(args.children).toBeDefined()
    expect(footer).toBeInTheDocument()
  })
}

export const WithoutChildren: Story = {
  args: {
    id: 1,
    title: 'Without Children',
    description: 'Without Children example description'
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)

    await step('should not render children', async () => {
      const title = canvas.getByText(`<${args.title}>`)
      const content = canvas.queryByTestId('child-box')
      const footer = canvas.getByText(`</${args.title}>`)

      expect(title).toBeInTheDocument()
      expect(content).not.toBeInTheDocument()
      expect(args.children).toBeUndefined()
      expect(footer).toBeInTheDocument()
    })
  }
}
