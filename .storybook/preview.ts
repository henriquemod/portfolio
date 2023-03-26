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
  },
  bp992: {
    name: 'bp992',
    styles: {
      width: '992px',
      height: '963px'
    }
  },
  bp768: {
    name: 'bp768',
    styles: {
      width: '768px',
      height: '963px'
    }
  },
  bp576: {
    name: 'bp576',
    styles: {
      width: '576px',
      height: '963px'
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
