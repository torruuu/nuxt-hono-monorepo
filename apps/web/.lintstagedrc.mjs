export default {
  '**/*.{js,ts,vue}': 'pnpm --filter web exec eslint --fix',
  '**/*.{ts,vue}': () => 'pnpm --filter web exec vue-tsc --noEmit',
  '**/*.{css,vue}': 'pnpm --filter web exec stylelint --fix',
  '**/*.json': 'pnpm --filter web exec prettier --write',
}
