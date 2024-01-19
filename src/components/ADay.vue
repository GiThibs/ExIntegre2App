<template>
  <li class="listjours-el">
    <p>{{ sceance.label }} n°{{ sceance.id }}</p>
  </li>
</template>

<script setup>

const props = defineProps({
  sceance : {
    type : Object,
    default : null
  },
  indexD : {
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
.listjours-el {
  border: 1px solid green;
  padding-inline: 1rem;
}
</style>