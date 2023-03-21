import type { Preview } from '@storybook/react'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
  web: {
    name: 'Web',
    styles: {
      width: '992px',
      height: '963px'
    }
  },
  wide: {
    name: 'Wide',
    styles: {
      width: '1920px',
      height: '900px'
    }
  }
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
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
