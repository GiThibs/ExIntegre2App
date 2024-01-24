<template>
  <section class="monplanning">
    <ASeason v-for="(saison, key) in saisons" :key="key" :saison="saison" :orderS="saison.order"></ASeason>
  </section>
</template>


<script setup>

// Les imports
import ASeason from '@/components/ASeason.vue';
import { usePlanningStore } from '@/stores/planning'

// Le store
const planningStore = usePlanningStore()
const saisons = planningStore.planning

</script>

<style scoped>
.monplanning {
  text-align: center;
}
</style>