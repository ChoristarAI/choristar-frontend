//  @ts-check
import { tanstackConfig } from '@tanstack/eslint-config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const filteredConfig = tanstackConfig.map((config) => {
  if (
    config.rules &&
    (config.rules['pnpm/json-valid-catalog'] ||
      config.rules['pnpm/json-enforce-catalog'])
  ) {
    return {
      ...config,
      plugins: {
        'simple-import-sort': simpleImportSort,
      },
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        ...config.rules,
        'pnpm/json-enforce-catalog': 'off',
        'pnpm/json-valid-catalog': 'off',
        'pnpm/no-standalone-execute': 'off',
        'pnpm/json-prefer-workspace-settings': 'off',
      },
    }
  }
  return config
})

export default filteredConfig
