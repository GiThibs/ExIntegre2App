<template>
  <div class="title">
    <h1>Bienvenue sur la liste du programme</h1>
  </div>
  <hr>
  <section class="monplanning">
    <ASeason v-for="(saison, key) in saisons" :key="key" :saison="saison" :orderS="saison.order"></ASeason>
  </section>
</template>


<script setup>
import ASeason from '@/components/ASeason.vue';
import { usePlanningStore } from '@/stores/planning'

const planningStore = usePlanningStore()
const saisons = planningStore.planning



</script>


<style scoped>
.title {
  padding: 1rem;
  text-align: center;
}
.monplanning {
  text-align: center;
}
</style>