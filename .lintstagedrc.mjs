export default {
  '**/*.{js,ts,vue}': 'pnpm --filter web exec eslint --fix',
  '**/*.{ts,vue}': () => 'pnpm --filter web exec vue-tsc --noEmit',
  '**/*.{css,vue}': 'pnpm --filter web exec stylelint --fix',

  '**/*.{js,ts}': [
    'pnpm --filter api exec eslint --fix',
    'pnpm --filter eslint-config exec eslint --fix',
  ],
  '**/*.ts': () => 'pnpm --filter api exec tsc --noEmit',

  '**/*.json': [
    'pnpm --filter web exec prettier --write',
    'pnpm --filter api exec prettier --write',
    'pnpm --filter eslint-config exec prettier --write',
  ],
}
