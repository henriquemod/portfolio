import type { Meta, StoryObj } from '@storybook/react'

import JobSignature from '.'

const meta = {
  title: 'Components/JobSignature',
  component: JobSignature,
  tags: ['autodocs'],
  argTypes: {
    jobTitle: {
      control: {
        type: 'text'
      }
    },
    companyName: {
      control: {
        type: 'text'
      }
    },
    period: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof JobSignature>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    jobTitle: 'Front-end Developer',
    companyName: 'Company Name',
    period: '2020 - Present'
  }
}
