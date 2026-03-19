import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

const unusedVarsConfig = {
  argsIgnorePattern: '^_',
  varsIgnorePattern: '^_',
}

/**
 * @param {import('eslint').Linter.Config[]} configs
 */
export default function createConfig(...configs) {
  return defineConfig([
    {
      ignores: ['dist/', 'node_modules/', '**/generated/'],
    },
    eslintConfigPrettier,
    eslintPluginPrettier,
    {
      files: ['**/*.js'],
      plugins: { js },
      extends: ['js/recommended'],
      rules: {
        'no-unused-vars': [RULES.ERROR, unusedVarsConfig],
        'array-callback-return': [RULES.OFF, { checkForEach: true }],
        'no-return-assign': RULES.OFF,
        'no-undef': RULES.OFF,
      },
    },
    ...tseslint.configs.recommended.map((config) => ({
      ...config,
      files: ['**/*.ts'],
    })),
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': [RULES.ERROR, unusedVarsConfig],
      },
    },
    ...configs,
  ])
}
