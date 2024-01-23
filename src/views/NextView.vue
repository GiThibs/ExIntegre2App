

<template>
  <div class="nextsession">
    <h3 class="actuel">Vous en êtes ici :<br>Saison {{ saison }} - Semaine {{ week }} - Session {{ day }}</h3><hr>
    <section class="progress">
      <label for="progression">Progression : </label>
      <progress id="progression" max="" value=""></progress>
    </section>
    <section class="progress">  
      <div class="tempsecoule">Temps écoulé :</div>
      <div><span class="tempsecouleval">0</span>/{{ totalTimeMin }} min</div>
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
          <th class="timeStep">{{ Math.round((step.time / 60) * 100) / 100 }}</th>
        </tr>
      </table>
      <!--<audio controls :src="srcSound"></audio>-->
  </div>
  <div class="sessiondone hidden">
    <h2>Session déjà terminée</h2>
    <p>Vous avez courru pendant {{totalTimeMin}} minutes !</p>
  </div>
    <button class="resetbtn">Recommencer la session ?</button>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { usePlanningStore } from '@/stores/planning'
import { onMounted, ref } from 'vue';

const route = useRoute()
const planningStore = usePlanningStore()
const saisons = planningStore.planning

const saison = route.params.nextSaisonOrder
const week = route.params.nextWeekOrder
const day = route.params.nextDayOrder

const activeSession = saisons.find((el) => el.order == saison).semaines.find((el) => el.order == week).sceances.find((el) => el.order == day)
const steps = activeSession.etapes

let totalTimeMin = ref(0)
let totalTime = ref(0)

const basePath = window.location.href.replace(window.location.pathname, '');
// const srcSound = basePath + '/sounds/marches.mp3'
const mp3Echauffements = new Audio(basePath+'/sounds/echauffement.mp3')
const mp3Etirements = new Audio(basePath+'/sounds/etirements.mp3')
const mp3Trottes = new Audio(basePath+'/sounds/trottes.mp3')
const mp3Marches = new Audio(basePath+'/sounds/marches.mp3')
const mp3Fin = new Audio(basePath+'/sounds/fin.mp3')

onMounted(() => {

  //Background color from class by innerHTML Txt
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
  //Get session total time
  const allTime = document.querySelectorAll('.timeStep')
  allTime.forEach((el) => {
    totalTimeMin.value = totalTimeMin.value + Number.parseFloat(el.innerHTML)
  })
  totalTime.value = totalTimeMin.value * 60 // Temps total en secondes
  //Cible Eléments HTML
  const startBtn = document.querySelector('.startbtn')
  const stopBtn = document.querySelector('.stopbtn')
  const resetBtn = document.querySelector('.resetbtn')
  const progressBar = document.getElementById('progression')
  const tempsEcoule = document.querySelector('.tempsecouleval')
  const nextSession = document.querySelector('.nextsession')
  const sessionDone = document.querySelector('.sessiondone')

  const checkActiveDone = () => {
    if(activeSession.done == true) {
    nextSession.classList.add('hidden')
    sessionDone.classList.remove('hidden')
    } else if(activeSession.done == false) {
    nextSession.classList.remove('hidden')
    sessionDone.classList.add('hidden')
    }
  }
  checkActiveDone()
  //SetInterval
  let intervalStarted = null
  const timer = ref(0)
  
  steps[0].time = 7
  steps[1].time = 2
  steps[2].time = 2
  steps[3].time = 3
  steps[4].time = 2
  steps[5].time = 3
  steps[6].time = 2
  steps[7].time = 3
  steps[8].time = 2
  steps[9].time = 3
  steps[10].time = 2

  //Start du timer de la session
  startBtn.addEventListener('click', e => {
    startBtn.classList.add('hidden')
    stopBtn.classList.remove('hidden')
    if (!intervalStarted) { //Si session non démarrée
          console.log("session démarrée.")
          progressBar.max = totalTime.value  //Valeur max de la barre de progression

          mp3Echauffements.play()

          intervalStarted = setInterval(() => {
            timer.value++ // Incrémente le timer de 1 chaque sec
            progressBar.value = timer.value // La value de la progressBar = value timer
            tempsEcoule.innerHTML = Math.round((timer.value / 60) * 100) / 100 //Temps en min arrondi
            console.log(timer.value)
            let totalElapsedTime = 0;
            for (let i = 0; i < steps.length; i++) {
              totalElapsedTime += steps[i].time;
              if (timer.value === totalElapsedTime) {
                if(i != steps.length - 1) {
                  if(steps[i+1].label == "Trot") {
                    console.log(steps[i+1].label);
                    mp3Trottes.play(); // Joue un son
                  } else if(steps[i+1].label == "Marche") {
                    console.log(steps[i+1].label);
                    mp3Marches.play(); // Joue un son
                  } else if(steps[i+1].label == "Étirements") {
                    console.log(steps[i+1].label);
                    mp3Etirements.play(); // Joue un son
                  }
                }
                if (i === steps.length - 1) { // Si c'est la dernière étape
                  mp3Fin.play()
                  clearInterval(intervalStarted); // Arrête le SetInterval
                  intervalStarted = null;
                  console.log("session terminée");
                  activeSession.done = true; // Valide la session
                  stopBtn.classList.add('hidden');
                  checkActiveDone()
                }
                break; // Sort de la boucle dès qu'une étape est atteinte
              }
            }
          }, 1000);
          }
    })
  //Stop du timer de la session
  stopBtn.addEventListener('click', e => {
    if(confirm('Voulez vous vraiment arrêter la session ? Vous devrez la recommencer du début !')) {
      stopBtn.classList.add('hidden')
      startBtn.classList.remove('hidden')
        clearInterval(intervalStarted) // Arrête le SetInterval
        intervalStarted = null
        timer.value = 0  //Remet les valeurs à 0
        tempsEcoule.innerHTML = 0
        progressBar.value = ""
        progressBar.max = ""
        console.log("session arrêtée")
        checkActiveDone()
    }
    })
  //Reset de la session
  resetBtn.addEventListener('click', e => {
    if (activeSession.done) {
      if (confirm('Voulez vous vraiment réinitialiser cette session ? Elle ne sera plus considérée comme terminée !')) {
        activeSession.done = false
      }
    }
    checkActiveDone()
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
  margin-block-start: .2rem;
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
.hidden {
  display: none;
}
</style>
