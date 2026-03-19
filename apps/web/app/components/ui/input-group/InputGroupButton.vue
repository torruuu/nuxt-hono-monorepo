<script setup lang="ts">
import type { ButtonVariants } from '@web/components/ui/button'
import { Button } from '@web/components/ui/button'
import { cn } from '@web/lib/shadcn/utils'
import type { HTMLAttributes } from 'vue'
import type { InputGroupButtonVariants } from '.'
import { inputGroupButtonVariants } from '.'

interface InputGroupButtonProps {
  variant?: ButtonVariants['variant']
  size?: InputGroupButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<InputGroupButtonProps>(), {
  size: 'xs',
  variant: 'ghost',
})
</script>

<template>
  <Button
    :class="cn(inputGroupButtonVariants({ size: props.size }), props.class)"
    :data-size="props.size"
    :variant="props.variant"
  >
    <slot />
  </Button>
</template>
