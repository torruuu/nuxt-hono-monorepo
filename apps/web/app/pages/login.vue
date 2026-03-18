<script setup lang="ts">
import { SignIn, SignUp } from '@/components/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { querySession } from '@/lib/auth/query-session'

const session = await querySession()
if (session) navigateTo('/')
</script>

<template>
  <Tabs class="max-auto my-6 w-full items-center px-4" default-value="signin">
    <TabsList>
      <TabsTrigger value="signin">{{ $t('auth.sign_in.title') }}</TabsTrigger>
      <TabsTrigger value="signup">{{ $t('auth.sign_up.title') }}</TabsTrigger>
    </TabsList>
    <TabsContent class="w-full max-w-md" value="signin">
      <Card>
        <CardHeader>
          <CardTitle>{{ $t('auth.sign_in.title') }}</CardTitle>
          <CardDescription>
            {{ $t('auth.sign_in.description') }}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn />
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent class="w-full max-w-md" value="signup">
      <Card>
        <CardHeader>
          <CardTitle>{{ $t('auth.sign_up.title') }}</CardTitle>
          <CardDescription>
            {{ $t('auth.sign_up.description') }}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUp />
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</template>
