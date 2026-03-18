<script setup lang="ts">
import { CreateProduct } from '@/components/product'
import { LangSwitch, ThemeSwitch } from '@/components/ui/switches'

const { session } = useSession()
</script>

<template>
  <div>
    <header class="flex items-center justify-end gap-2 p-4">
      <CreateProduct v-if="session" />
      <ThemeSwitch />
      <LangSwitch />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
