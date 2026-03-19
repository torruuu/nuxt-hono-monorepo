<script setup lang="ts">
import { cn } from '@web/lib/shadcn/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p
    :class="cn('text-muted-foreground text-sm', props.class)"
    data-slot="card-description"
  >
    <slot />
  </p>
</template>
