<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { ConfigProvider } from 'reka-ui'

const { locale } = useI18n()
const colorMode = useColorMode()
</script>

<template>
  <ConfigProvider :locale>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>

  <ClientOnly>
    <Toaster
      :theme="(colorMode.preference as any) || 'system'"
      class="pointer-events-auto"
      position="top-left"
    />
  </ClientOnly>
</template>
