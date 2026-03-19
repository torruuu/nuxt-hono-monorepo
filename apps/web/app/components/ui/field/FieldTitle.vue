<script setup lang="ts">
import { cn } from '@web/lib/shadcn/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50',
        props.class,
      )
    "
    data-slot="field-label"
  >
    <slot />
  </div>
</template>
