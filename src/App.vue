<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="test">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/saison">Mes saisons</RouterLink>
        <RouterLink to="/help">Besoin d'aide ?</RouterLink>
        <RouterLink to="/next">Prochaine session</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.test {
  background-color: #765432;
  padding: 1rem;
}
.test > a {
  color: white;
  margin-inline-end: 1rem;
  text-decoration: none;
  padding-inline: 1rem;
}

</style>
