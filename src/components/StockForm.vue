<script setup lang="ts">
import { stockStore } from "../store/stock";
import { ref } from "vue";

const id = ref();
const amount = ref();

function addStock() {
  if (id.value !== undefined && amount.value !== undefined) {
    stockStore.addStock(id.value, amount.value).then((val) => {
      if (val.status === 200)
        alert(`id: ${val.item.id}\namount: ${val.item.amount}`);
      stockStore.fetchStocks();
    });
  }
}

function deductStock() {
  if (id.value !== undefined && amount.value !== undefined) {
    stockStore.deductStock(id.value, amount.value).then((val) => {
      if (val.status === 200)
        alert(`id: ${val.item.id}\namount: ${val.item.amount}`);
      else if (val.status === 204) alert(`'${id.value}' is out of stock`);
      else if (val.status === 404) alert(`'${id.value}' is not found`);
      stockStore.fetchStocks();
    });
  }
}

function queryStock() {
  if (id.value !== undefined) {
    stockStore.queryStock(id.value).then((val) => {
      if (val.status === 200)
        alert(`id: ${val.item.id}\namount: ${val.item.amount}`);
      else if (val.status === 404) alert(`'${id.value}' is not found`);
    });
  }
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const name = (e.submitter as HTMLInputElement).name;
  switch (name) {
    case "add":
      return addStock();
    case "deduct":
      return deductStock();
    case "query":
      return queryStock();
  }
}
</script>

<template>
  <section id="stock">
    <form :onsubmit="handleSubmit">
      <fieldset role="group">
        <input type="text" placeholder="Id" required v-model="id" />
        <input
          type="number"
          min="1"
          placeholder="Amount"
          required
          v-model="amount"
        />
      </fieldset>
      <input type="submit" name="add" value="Add" />
      <input type="submit" name="deduct" value="Deduct" />
      <input type="submit" name="query" value="Query" />
    </form>
  </section>
</template>
