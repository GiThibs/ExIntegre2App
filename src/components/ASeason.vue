<template>
  <div class="saisons">
    <div class="saison">
      <h1>Saison 1</h1>
      <ul class="listsemaines">
        <li class="listsemaines-el">Semaine 1</li>
        <li class="listsemaines-el">Semaine 2</li>
        <li class="listsemaines-el">Semaine 3</li>
        <li class="listsemaines-el">Semaine 4</li>
        <li class="listsemaines-el">Semaine 5</li>
      </ul>
    </div>
    <div class="saison">
      <h1>Saison 2</h1>
      <ul class="listsemaines">
        <AWeek></AWeek>
      </ul>
    </div>
    <div class="saison">
      <h1>Saison 3</h1>
      <ul class="listsemaines">
        <AWeek></AWeek>
      </ul>
    </div>
  </div>
</template>

<script setup>
import AWeek from '@/components/AWeek.vue';
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