<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { cn } from '@web/lib/shadcn/utils'
import type { TabsContentProps } from 'reka-ui'
import { TabsContent } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <TabsContent
    :class="cn('flex-1 outline-none', props.class)"
    data-slot="tabs-content"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
