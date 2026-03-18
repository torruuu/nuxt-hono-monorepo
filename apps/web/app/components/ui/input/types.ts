import type { HTMLAttributes } from 'vue'

export interface InputProps {
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}
