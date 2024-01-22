

<template>
  <div class="nextsession">
    <h1>Votre prochaine session</h1><hr>
    <h3 class="actuel">Vous en êtes ici :<br>Saison {{ saison }} - Semaine {{ week }} - Session {{ day }}</h3><hr>
    <section class="progress">
      <div class="progressionbar">Barre de progression</div>
      <div class="tempsecoule">Temps écoulé : 5/{{ totalTimeMin }} min</div>
    </section>
    <div class="btns">
      <button class="startbtn">Démarrer la session ?</button>
      <button class="stopbtn hidden">Arrêter la session ?</button>
    </div>
      <table class="steparray">
        <tr class="row">
          <th>Etapes</th>
          <th>Rythme</th>
          <th>Temps en minutes</th>
        </tr>
        <tr class="row" v-for="(step, key) in steps" :key="key" :index="key">
          <th>Etape n°{{ step.order }}</th>
          <th class="label">{{ step.label }}</th>
          <th class="timeStep">{{ step.time / 60 }}</th>
        </tr>
      </table>
    <button class="resetbtn">Recommencer la session ?</button>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { usePlanningStore } from '@/stores/planning'
import { onMounted, ref } from 'vue';

const route = useRoute()

const saison = route.params.nextSaisonOrder
const week = route.params.nextWeekOrder
const day = route.params.nextDayOrder

const planningStore = usePlanningStore()
const saisons = planningStore.planning

const activeSession = saisons.find((el) => el.order == saison).semaines.find((el) => el.order == week).sceances.find((el) => el.order == day)

const steps = activeSession.etapes

let totalTimeMin = ref(0)
let totalTime = ref(0)

onMounted(() => {
  const labels = document.querySelectorAll('.label')
  labels.forEach((el) => {
    if (el.innerHTML == 'Échauffements') {
      el.classList.add('echauff')
    } else if (el.innerHTML == 'Trot') {
      el.classList.add('trot')
    } else if(el.innerHTML == 'Marche') {
      el.classList.add('marche')
    } else if(el.innerHTML == 'Étirements') {
      el.classList.add('echauff')
    }
  })

  const allTime = document.querySelectorAll('.timeStep')
  allTime.forEach((el) => {
    totalTimeMin.value = totalTimeMin.value + Number.parseFloat(el.innerHTML)
  })

  totalTime.value = totalTimeMin.value * 60
  console.log(totalTime.value)

  const startBtn = document.querySelector('.startbtn')
  const stopBtn = document.querySelector('.stopbtn')
  const resetBtn = document.querySelector('.resetbtn')

  let intervalStarted = null
  const timer = ref(0)
    
  startBtn.addEventListener('click', e => {
    startBtn.classList.add('hidden')
    stopBtn.classList.remove('hidden')
    if (!intervalStarted) {
          console.log("session démarrée.")
          intervalStarted = setInterval(() => {
            timer.value++
            console.log(timer.value)
            if (timer.value == 5) {
              console.log('Ca fait 5s')
            }
          }, 1000);
          }
    })
  stopBtn.addEventListener('click', e => {
    if(confirm('Voulez vous vraiment arrêter la session ? Vous devrez la recommencer du début !')) {
      stopBtn.classList.add('hidden')
      startBtn.classList.remove('hidden')
      if (intervalStarted) {
        clearInterval(intervalStarted)
        intervalStarted = null
        timer.value = 0
        console.log("session arrêtée")
      }
    }
    })
  resetBtn.addEventListener('click', e => {
    if (activeSession.done) {
      if (confirm('Voulez vous vraiment réinitialiser cette session ? Elle ne sera plus considérée comme terminée !')) {
        activeSession.done = false
      }
    }
  })
})





</script>


<style scoped>

table {
  border-spacing: 0;
  margin-block: 1rem;
}
table > tr > th {
  padding: .3rem;
}
.actuel {
  padding-block: .5rem;
}
.nextsession {
  padding: 1rem;
  display: grid;
  text-align: center;
}
.progress {
  display: flex;
  padding-block: 1rem;
  justify-content: space-between;
}
.echauff{
  background-color: teal;
}
.marche {
  background-color: aqua;
}
.trot {
  background-color: cornflowerblue;
}

.startbtn {
  padding: 1rem;
  background-color: green;
  color: white;
  border: none;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1rem;
  width: 100%;
}
.resetbtn, .stopbtn {
  padding: 1rem;
  background-color: red;
  color: white;
  border: none;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1rem;
  width: 100%;
}

</style>
