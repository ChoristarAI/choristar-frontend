//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  ...tanstackConfig,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]
