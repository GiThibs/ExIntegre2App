<template>
  <div class="formulaire">
      <form action="" @submit.prevent="formuler">
        <label for="">Nom</label>
        <input type="text" v-model="newContact.name"> <br>
        <label for="">Email</label>
        <input type="text" v-model="newContact.email"> <br>
        <button>Envoyer</button>
      </form>
  </div>
</template>

<script setup>
import{ref} from 'vue'
  const newContact = ref( {
    name: '',
    email : ''
  })
  const emit = defineEmits(['soumettre'])
  const formuler = () => {
    alert('Bien formulé')
    emit('soumettre', newContact.value)
  }
</script>

<style scoped>

</style>