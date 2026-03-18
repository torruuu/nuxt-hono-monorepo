<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { InputProps } from '@/components/ui/input/types'
import { cn } from '@/lib/shadcn/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'
import { ref } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<InputProps>()

const emits = defineEmits<{
  (_e: 'update:modelValue', _payload: string | number): void
}>()

const showPassword = ref(false)
</script>

<template>
  <div class="relative">
    <Input
      v-bind="{ ...$attrs, ...props }"
      :class="cn('pr-9', props.class)"
      :type="showPassword ? 'text' : 'password'"
      @update:model-value="emits('update:modelValue', $event)"
    />
    <Button
      class="absolute inset-y-1/2 right-1 size-7 -translate-y-1/2"
      size="icon"
      type="button"
      variant="ghost"
      @click="showPassword = !showPassword"
    >
      <component :is="showPassword ? EyeOffIcon : EyeIcon" class="size-5" />
      <span class="sr-only">
        {{ showPassword ? 'Hide password' : 'Show password' }}
      </span>
    </Button>
  </div>
</template>
