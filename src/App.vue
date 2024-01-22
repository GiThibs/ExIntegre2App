<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePlanningStore } from '@/stores/planning'
import { onMounted, ref } from 'vue';

const planningStore = usePlanningStore()
const saisons = planningStore.planning

let nextSaison = null
let nextWeek = null
let nextDay = null

const findNextSess = () => {
  nextSaison = saisons.find((el) => el.done == false)
  nextWeek = nextSaison.semaines.find((el) => el.done == false)
  nextDay = nextWeek.sceances.find((el) => el.done == false)
}
findNextSess()

const routes = ref([
        { id: 2, path: '/saison', label: 'Mes saisons' },
        { id: 3, path: '/help', label: "Besoin d'aide ?" },
      ])

onMounted(() => {
  routes.value.unshift({ id: 1, path: '/' + nextSaison.order + '/' + nextWeek.order + '/' + nextDay.order, label: "Prochaine Session" })
})

</script>

<template>
  <header>

    <div class="wrapper">
      <nav class="test">
        <router-link v-for="route in routes" :key="route.id" :to="route.path">{{ route.label }}</router-link>
      </nav>
    </div>

  </header>

  <RouterView />
</template>

<style scoped>
.test {
  background-color: #765432;
  padding: 1rem;
  display: grid;
  text-align: center;
}
.test > a {
  color: white;
  margin-inline-end: 1rem;
  text-decoration: none;
}

</style>
