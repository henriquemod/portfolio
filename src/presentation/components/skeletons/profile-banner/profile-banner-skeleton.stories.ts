import type { Meta, StoryObj } from '@storybook/react'

import ProfileBannerSkeleton from '.'

const meta = {
  title: 'Skeletons/ProfileBannerSkeleton',
  component: ProfileBannerSkeleton,
  tags: ['autodocs']
} satisfies Meta<typeof ProfileBannerSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
