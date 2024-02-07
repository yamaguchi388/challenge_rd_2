<template>
  <div>
    <button @click="performBalancing">Realizar Balanceamento</button>
    <p v-if="balancedCS !== 0">O CS com mais clientes é o ID: {{ balancedCS }}</p>
    <p v-else>Não foi possível determinar um único CS com mais clientes.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCsStore } from '@/stores/csStore';

const csStore = useCsStore();

const csData = [
  { id: 1, score: 50 },
  { id: 2, score: 100 }
];
const clientData = [
  { id: 1, score: 20 },
  { id: 2, score: 30 },
  { id: 3, score: 35 },
  { id: 4, score: 40 },
  { id: 5, score: 60 },
  { id: 6, score: 80 }
];
const csAwayData = []; 

const balancedCS = ref(0);

const performBalancing = () => {
  csStore.setCustomerSuccess(csData);
  csStore.setClients(clientData);
  csStore.setCsAway(csAwayData);
  balancedCS.value = csStore.balanceCS();
};
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 20px;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

p {
  color: #333;
}
</style>
