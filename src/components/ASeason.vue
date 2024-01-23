<template>
  <div class="saisons">
    <div class="saison">
      <h1>{{ saison.label }} n°{{ saison.order }} : {{ saison.content }}</h1>
      <ul class="listsemaines">
        <AWeek class="" v-for="(semaine, key) in props.saison.semaines" :key="key" :semaine="semaine" :orderW="semaine.order" :orderS="orderS"></AWeek>
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
  orderS : {
    type : Number,
    default : null
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
  background-color: #654321;
}
.saison h1 {
  color: white;
}
.listsemaines {
  background-color: #ffffff01;
  padding-block: .5rem;
}
</style>