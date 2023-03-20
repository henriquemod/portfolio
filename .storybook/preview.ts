import type { Preview } from '@storybook/react'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
  kindleFire2: {
    name: 'Web',
    styles: {
      width: '992px',
      height: '963px'
    }
  }
}

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports
      }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
