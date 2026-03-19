<script setup lang="ts">
import { cn } from '@web/lib/shadcn/utils'
import { Loader2Icon } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Loader2Icon
    :class="cn('size-4 animate-spin', props.class)"
    aria-label="Loading"
    role="status"
  />
</template>
