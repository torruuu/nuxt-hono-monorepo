<script setup lang="ts">
import { Button } from '@web/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@web/components/ui/dropdown-menu'
import { Languages } from 'lucide-vue-next'

const { locales, setLocale, locale } = useI18n()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        <Languages class="h-[1.2rem] w-[1.2rem] transition-all" />
        <span class="sr-only">Toggle language</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="loc in locales"
        :key="loc.code"
        :class="{ 'font-semibold': locale === loc.code }"
        @click="setLocale(loc.code)"
      >
        {{ loc.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
