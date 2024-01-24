<template>
  <li class="listsemaines-el">
    <h2>{{ semaine.label }} n°{{ semaine.order }}</h2>
    <ul class="listjours">
      <ADay v-for="(sceance, key) in props.semaine.sceances" :key="key" :sceance="sceance" :orderD="sceance.order" :orderS="orderS" :orderW="orderW"></ADay>
    </ul>
</li>
</template>

<script setup>

// Les imports
import ADay from '@/components/ADay.vue';

// Les propriétés reçues du parent
const props = defineProps({
  semaine : {
    type : Object,
    default : null
  },
  orderW : {
    type : Number,
    default : null
  },
  orderS : {
    type : Number,
    default : null
  }
})

</script>

<style scoped>
li {
  list-style: none;
}
.listsemaines-el {
  background-color: #ffffff22;
}
.listjours {
  background-color: #ffffff22;
}
</style>