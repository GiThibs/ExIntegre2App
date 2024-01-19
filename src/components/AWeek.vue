<template>
  <li class="listsemaines-el">
    <h2>{{ semaine.label }} n°{{ semaine.id }}</h2>
    <ul class="listjours">
      <ADay v-for="(sceance, key) in semaine.sceances" :key="key" :sceance="sceance" :indexD="key"></ADay>
    </ul>
</li>
</template>

<script setup>
import ADay from '@/components/ADay.vue';

const props = defineProps({
  semaine : {
    type : Object,
    default : null
  },
  indexW : {
    type : Number
  }
})

/*
const emit = defineEmits(['cancel'])
const reset = (key) => {
    emit('cancel', key)
}
*/

</script>

<style scoped>
li {
  list-style: none;
}
.listsemaines-el {
  border: 1px solid blue;
  padding-inline: 1rem;
}
.listjours {
  border: 1px solid aqua;
  padding-inline: 1rem;
}
</style>