<template>
  <div class="saisons">
    <div class="saison">
      <h1>{{ saison.label }} n°{{ saison.order }} : {{ saison.content }}</h1>
      <ul class="listsemaines">
        <AWeek class="" v-for="(semaine, key) in props.saison.semaines" :key="key" :semaine="semaine" :indexW="key"></AWeek>
      </ul>
    </div>
  </div>
</template>

<script setup>
import AWeek from '@/components/AWeek.vue';


const props = defineProps({
  saison : {
    type : Object,
    default : null
  },
  indexS : {
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
.saison {
  border: 1px solid red;
  padding: 1rem;
}
.listsemaines {
  border: 1px solid purple;
  padding-inline: 1rem;
}
</style>