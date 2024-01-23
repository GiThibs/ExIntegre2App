<template>
  <li class="listjours-el " ref="listItemRef">
    <router-link :to="{path: '/' + orderS + '/' + orderW + '/' + orderD}">{{ props.sceance.label }} n°{{ sceance.order }}</router-link>
  </li>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePlanningStore } from '@/stores/planning'
import { ref, computed } from 'vue'

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

const planningStore = usePlanningStore()
const saisons = planningStore.thePlanning

let nextSaison = null
let nextWeek = null
let nextDay = null
const nextSess = ref({})
const listItemRef = ref(null)

const nextOne = computed(() => {
  return (
    nextSess.value.nextS === props.orderS &&
    nextSess.value.nextW === props.orderW &&
    nextSess.value.nextD === props.orderD
  )
})

const findNextSess = () => {
  nextSaison = saisons.find((el) => el.done == false)
  nextWeek = nextSaison.semaines.find((el) => el.done == false)
  nextDay = nextWeek.sceances.find((el) => el.done == false)
  nextSess.value = { nextS: nextSaison.order, nextW: nextWeek.order, nextD: nextDay.order }
  console.log(nextSess.value)
  console.log(props.orderS + "-" + props.orderW + "-" + props.orderD)
}

onMounted(() => {
  findNextSess()

  if (props.sceance.done) {
    listItemRef.value.classList.add('done');
  }

  console.log(nextOne.value);
  if (nextOne.value) {
    listItemRef.value.classList.add('nextone');
  }
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