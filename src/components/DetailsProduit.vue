<template>
  <div class="detailsproduit">
    <div class="infoproduit">
      <h2>Name : {{ props.leproduit.name }}</h2>
      <h3>Price : {{ leproduit.price }} </h3>
    </div>
    <div class="detailsduproduit">
      <p>Color : {{ leproduit.color }} </p>
      <p>Category : {{ leproduit.categorie }} </p>
      <p>Details : {{ leproduit.about }} </p>
    </div>
    <div class="reset">
      <button class="cancel" @click="reset">Cancel</button>
    </div>
  </div>
</template>

<script setup>

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


</script>

<style scoped>
.detailsproduit {
  width: 60%;
}
.infoproduit {
  width: 100%;
}

</style>