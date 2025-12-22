//  @ts-check
import { tanstackConfig } from '@tanstack/eslint-config'

const filteredConfig = tanstackConfig.map((config) => {
  if (
    config.rules &&
    (config.rules['pnpm/json-valid-catalog'] ||
      config.rules['pnpm/json-enforce-catalog'])
  ) {
    return {
      ...config,
      rules: {
        ...config.rules,
        'pnpm/json-enforce-catalog': 'off',
        'pnpm/json-valid-catalog': 'off',
        'pnpm/no-standalone-execute': 'off',
        'pnpm/json-prefer-workspace-settings': 'off',
      },
    }
  }
  return config.ignores
    ? {
        ...config,
        ignores: [...config.ignores, 'eslint.config.js', 'prettier.config.js'],
      }
    : config
})

export default filteredConfig
