import type { StorybookConfig } from '@storybook/react-webpack5'
import type { AddonOptionsBabel } from '@storybook/addon-coverage'
import path from 'path'

const coverageConfig: AddonOptionsBabel = {
  istanbul: {
    include: ['**/*/*.stories.*'],
    excludeNodeModules: true
  }
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          ...coverageConfig
        }
      }
    }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}

config.webpackFinal = async (config) => {
  config.module?.rules?.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../')
  })

  return config
}

export default config
