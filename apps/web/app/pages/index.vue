<script setup lang="ts">
import { Button } from '@web/components/ui/button'
import { authClient } from '@web/lib/auth/auth-client'
import { querySession } from '@web/lib/auth/query-session'
import { LogOutIcon } from 'lucide-vue-next'

const session = await querySession()
if (!session) navigateTo('/login')

const handleSignOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => reloadNuxtApp(),
    },
  })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2 p-4">
    <p>{{ $t('pages.home.welcome', { name: session?.user?.name }) }}</p>
    <Button @click="handleSignOut">
      <LogOutIcon />
      {{ $t('action.sign_out') }}
    </Button>
  </div>
</template>
