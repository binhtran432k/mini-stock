<script setup lang="ts">
import { onMounted } from "vue";

import { stockStore } from "../store/stock";

onMounted(() => stockStore.fetchStocks());
</script>
<template>
  <section id="list-stock">
    <h2>List Stocks</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in stockStore.stocks">
          <td>{{ stock.id }}</td>
          <td>{{ stock.amount }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
