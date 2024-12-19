<script setup lang="ts">
import { stockStore } from "../store/stock";
import { ref } from "vue";

const id = ref();
const amount = ref();

function addStock(e: SubmitEvent) {
  e.preventDefault();
  if (id.value !== undefined && amount.value !== undefined) {
    stockStore
      .addStock(id.value, amount.value)
      .then(() => stockStore.fetchStocks());
  }
}
</script>

<template>
  <section id="add-stock">
    <h2>Add Stock</h2>
    <form :onsubmit="addStock">
      <fieldset role="group">
        <input type="text" placeholder="Id" required v-model="id" />
        <input
          type="number"
          min="1"
          placeholder="Amount"
          required
          v-model="amount"
        />
        <input type="submit" value="Add" />
      </fieldset>
    </form>
  </section>
</template>
