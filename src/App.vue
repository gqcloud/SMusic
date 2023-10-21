<template>
  <div></div>
</template>

<script setup lang="ts">
import { test } from '@/services/modules/home'
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await test(10)
  console.log(res)
})
</script>

<style scoped lang="less"></style>
