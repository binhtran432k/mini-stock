<script setup lang="ts">
import { useFetch } from "../composables/fetch";

defineProps<{ msg: string }>();

const { data } = useFetch("/api/stocks");
</script>

<template>
  <header class="container">
    <h1>{{ msg }}</h1>
    <p>{{ data }}</p>
  </header>
</template>
