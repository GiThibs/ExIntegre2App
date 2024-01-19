<template>
  <div class="title">
    <h1>Bienvenue sur la liste du programme</h1>
  </div>
  <hr>
  <ASeason v-for="(saison, key) in saisons" :key="key" :saison="saison" :indexS="key"></ASeason>
</template>


<script setup>
import ASeason from '@/components/ASeason.vue';
import { usePlanningStore } from '@/stores/planning'

const planningStore = usePlanningStore()
const saisons = planningStore.planning
console.log(saisons)



</script>


<style scoped>
.title {
  padding: 1rem;
}
</style>