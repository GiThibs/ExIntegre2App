<template>
  <header>
    <div class="wrapper">
      <nav class="test">
        <router-link v-for="route in routes" :key="route.id" :to="route.path">{{ route.label }}</router-link>
      </nav>
    </div>
  </header>
  <button class="installBtn">Installer l'app ?</button>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePlanningStore } from '@/stores/planning'
import { ref, onMounted, computed } from 'vue';

const planningStore = usePlanningStore()
const saisons = planningStore.planning

let nextSaison = null
let nextWeek = null
let nextDay = null

const findNextSess = () => {
  nextSaison = saisons.find((el) => el.done == false)
  nextWeek = nextSaison.semaines.find((el) => el.done == false)
  nextDay = nextWeek.sceances.find((el) => el.done == false)
}
findNextSess()

const routes = ref([
  { id: 1, path: '/' + nextSaison.order + '/' + nextWeek.order + '/' + nextDay.order, label: "Prochaine Session" },
  { id: 2, path: '/', label: 'Mes saisons' },
  { id: 3, path: '/help', label: "Besoin d'aide ?" },
])

const appInstalled = computed(() => {
  // Vérifier si l'application est installée sur iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS && navigator.standalone) {
    return true;
  }

  // Vérifier si l'application est installée sur d'autres navigateurs
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (!isIOS && isStandalone) {
    return true;
  }

  return false;
});

onMounted(() => {

  const installer = document.querySelector('.installBtn')
  
  let deferredPrompts = null
  
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    deferredPrompts  = e
    installer.classList.remove('hidden')
  })
  
  installer.addEventListener('click', e => {
    e.preventDefault()
    installer.classList.add('hidden')
    deferredPrompts.prompt()
    deferredPrompts.userChoice.then(choice => {
      if (choice === 'accepted') {
        console.log("installation acceptée")
      } else {
        console.log("installation refusée")
      }
      deferredPrompts = null
    })
  })

  if(appInstalled) {
    installer.classList.add('hidden')
  }
  
})

</script>

<style scoped>
.test {
  background-color: #765432;
  padding: 1rem;
  display: grid;
  text-align: center;
}
.test > a {
  color: white;
  margin-inline-end: 1rem;
  text-decoration: none;
}
.installBtn {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: black;
  color: white;
  border: none;
  padding: .5rem;
  text-transform: capitalize;
  font-weight: bold;
  position: fixed;
  margin-block-start: -6rem;
  margin-inline-start: 1rem;
}

.hidden {
  display: none;
}
</style>
