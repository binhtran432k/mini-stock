<script setup lang="ts">
import AddStock from "./components/AddStock.vue";
import ListStock from "./components/ListStock.vue";
</script>

<template>
  <header class="container">
    <hgroup>
      <h1>Mini Stock</h1>
    </hgroup>
  </header>
  <main class="container">
    <AddStock />
    <ListStock />
  </main>
</template>
