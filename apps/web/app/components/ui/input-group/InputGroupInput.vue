<script setup lang="ts">
import { Input } from '@web/components/ui/input'
import { cn } from '@web/lib/shadcn/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Input
    :class="
      cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
        props.class,
      )
    "
    data-slot="input-group-control"
  />
</template>
