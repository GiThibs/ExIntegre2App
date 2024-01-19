<template>
  <li class="listsemaines-el">
    <h1>Semaine 1</h1>
    <ul class="listjours">
      <li class="listjours-el">Jour 1</li>
      <li class="listjours-el">Jour 2</li>
      <li class="listjours-el">Jour 3</li>
      <li class="listjours-el">Jour 4</li>
      <ADay></ADay>
    </ul>
</li>
</template>

<script setup>
import ADay from '@/components/ADay.vue';
/*
const props = defineProps({
  leproduit : {
    type : Object,
    default : null
  }
})

const emit = defineEmits(['cancel'])
const reset = (key) => {
    emit('cancel', key)
}
*/

</script>

<style scoped>

</style>