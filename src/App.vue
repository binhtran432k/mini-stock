<script setup lang="ts">
import StockForm from "./components/StockForm.vue";
import ListStock from "./components/ListStock.vue";
</script>

<template>
  <header class="container">
    <hgroup>
      <h1>Mini Stock</h1>
    </hgroup>
  </header>
  <main class="container">
    <StockForm />
    <ListStock />
  </main>
</template>
