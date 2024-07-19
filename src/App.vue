<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import PageTransition from '@/components/PageTransition.vue'
</script>

<template>
  <DefaultLayout>
    <PageTransition>
      <RouterView />
    </PageTransition>
  </DefaultLayout>
</template>
