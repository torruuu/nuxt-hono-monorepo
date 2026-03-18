export default {
  '**/*.{js,ts}': 'pnpm --filter api exec eslint --fix',
  '**/*.ts': () => 'pnpm --filter api exec tsc --noEmit',
  '**/*.json': 'pnpm --filter api exec prettier --write',
}
