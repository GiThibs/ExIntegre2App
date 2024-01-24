<template>
  <li class="listjours-el " :class="{'done':sceance.done,'nextone':nextOne}" ref="listItemRef">
    <router-link :to="{path: '/' + orderS + '/' + orderW + '/' + orderD}">{{ props.sceance.label }} n°{{ sceance.order }}</router-link>
  </li>
</template>

<script setup>

// Les imports
import { onMounted } from 'vue';
import { usePlanningStore } from '@/stores/planning'
import { ref, computed } from 'vue'

// Les propriétés reçues du parent
const props = defineProps({
  sceance: {
    type: Object,
    default: null
  },
  orderD: {
    type: Number,
    default: null
  },
  orderW: {
    type: Number,
    default: null
  },
  orderS: {
    type: Number,
    default: null
  }
})

// Le store
const planningStore = usePlanningStore()
const saisons = planningStore.thePlanning

// Les variables
let nextSaison = null
let nextWeek = null
let nextDay = null
const nextSess = ref({})
const listItemRef = ref(null)

// Défini la prochaine session à faire
const findNextSess = () => {
  nextSaison = saisons.find((el) => el.done == false)
  nextWeek = nextSaison.semaines.find((el) => el.done == false)
  nextDay = nextWeek.sceances.find((el) => el.done == false)
  nextSess.value = { nextS: nextSaison.order, nextW: nextWeek.order, nextD: nextDay.order }
}

// Regarde si la session est la suivante à faire
const nextOne = computed(() => {
  return ( // Renvoie true si les conditions sont remplies
    nextSess.value.nextS === props.orderS &&
    nextSess.value.nextW === props.orderW &&
    nextSess.value.nextD === props.orderD
  )
})

onMounted(() => {
  findNextSess()
})

</script>

<style scoped>
.listjours-el {
  width: 100%;
}
.listjours-el a {
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
}
.done a {
  color: rgb(170, 170, 170);
}
.nextone a {
  color: lightgreen;
}
</style>