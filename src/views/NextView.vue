

<template>

  <div class="nextsession"> <!-- Englobe la session --> 

    <h3 class="actuel">Vous êtes ici :<br>Saison {{ saison }} - Semaine {{ week }} - Session {{ day }}</h3><hr> <!-- Affiche les infos de la session -->


    <section class="progress"> 
      <div><!-- Affiche la progression de la session sous forme de barre -->
        <label for="progression">Progression : </label>
        <progress id="progression" max="" value=""></progress> 
      </div>
      <div><!-- Affiche le temps de course et le temps de la session -->
        <p class="tempsecoule">Temps écoulé : <span class="tempsecouleval"> 0 </span> / {{ totalTimeMin.toFixed(2) }} min</p>
      </div>
    </section>

    <div class="bouton"> <!-- Boutons pour démarrer et arrêter la session -->
      <button class="startbtn">Démarrer la session ?</button>
      <button class="stopbtn hidden">Arrêter la session ?</button>
    </div>


    <div class="tableau">
      <table class="steparray"> <!-- Tableau des étapes -->
        <tr class="row">
          <th>Etapes</th>
          <th>Rythme</th>
          <th>Temps en minutes</th>
        </tr>
        <tr class="row" v-for="(step, key) in steps" :key="key" :index="key">
          <th>Etape n°{{ step.order }}</th>
          <th class="label">{{ step.label }}</th>
          <th class="timeStep">{{ (step.time / 60).toFixed(2) }}</th>
        </tr>
      </table>
    </div>

  </div>

  <div class="sessiondone hidden"> <!-- Affiché si session terminée (attribut done sur true) -->
    <h2>Session terminée !</h2>
    <p>Vous avez courru pendant {{totalTimeMin.toFixed(2)}} minutes !</p>
    <p class="emoji">🏁 🏃 </p>
  </div>
  <div class="bouton">
    <button class="resetbtn">Recommencer la session ?</button> <!-- Bouton pour réinitialiser la session -->
  </div>

</template>


<script setup>
// Les imports
import { useRoute } from 'vue-router'
import { usePlanningStore } from '@/stores/planning'
import { onMounted, ref } from 'vue';

// Le store
const route = useRoute()
const planningStore = usePlanningStore()
const saisons = planningStore.planning

// Les variables (paramètres d'url)
const saison = route.params.nextSaisonOrder
const week = route.params.nextWeekOrder
const day = route.params.nextDayOrder

// Récupère les paramètres d'url pour aller chercher la session active dans le store
const activeSession = saisons.find((el) => el.order == saison).semaines.find((el) => el.order == week).sceances.find((el) => el.order == day)
const steps = activeSession.etapes

  // Données à modifier pour tester le fonctionnement de la session

  steps[0].time = 3
  steps[1].time = 3
  steps[2].time = 2
  steps[3].time = 3
  steps[4].time = 2
  steps[5].time = 3
  steps[6].time = 2
  steps[7].time = 3
  steps[8].time = 2
  steps[9].time = 3
  steps[10].time = 2

// Variable pour le temps de session
let totalTimeMin = ref(0)
let totalTime = ref(0)

// Défini l'url de base
const basePath = window.location.href.replace(window.location.pathname, '');
// Récupère les fichiers audio grâce à l'url de base
const mp3Echauffements = new Audio(basePath+'/sounds/echauffement.mp3')
const mp3Etirements = new Audio(basePath+'/sounds/etirements.mp3')
const mp3Trottes = new Audio(basePath+'/sounds/trottes.mp3')
const mp3Marches = new Audio(basePath+'/sounds/marches.mp3')
const mp3Fin = new Audio(basePath+'/sounds/fin.mp3')


onMounted(() => {

  // Applique une couleur de fond au tableau selon le texte HTML
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

  // Récupère le temps total de la session
  const allTime = document.querySelectorAll('.timeStep')
  allTime.forEach((el) => {
    totalTimeMin.value = totalTimeMin.value + Number.parseFloat(el.innerHTML) // Converti le texte en nombre
  })
  totalTime.value = totalTimeMin.value * 60 // Temps total en secondes

  // Cible Eléments HTML
  const startBtn = document.querySelector('.startbtn')
  const stopBtn = document.querySelector('.stopbtn')
  const resetBtn = document.querySelector('.resetbtn')
  const progressBar = document.getElementById('progression')
  const tempsEcoule = document.querySelector('.tempsecouleval')
  const nextSession = document.querySelector('.nextsession')
  const sessionDone = document.querySelector('.sessiondone')

  // Vérifie si la session est déjà terminée
  const checkActiveDone = () => {
    if(activeSession.done == true) {
    nextSession.classList.add('hidden')
    sessionDone.classList.remove('hidden')
    } else if(activeSession.done == false) {
    nextSession.classList.remove('hidden')
    startBtn.classList.remove('hidden')
    sessionDone.classList.add('hidden')
    }
  }
  checkActiveDone()

  // SetInterval
  let intervalStarted = null
  const timer = ref(0)




  //Start du timer de la session
  startBtn.addEventListener('click', e => {
    // Echanger les boutons Démarrer / Arrêter
    startBtn.classList.add('hidden')
    stopBtn.classList.remove('hidden')
    if (!intervalStarted) { // Si session non démarrée
          console.log("session démarrée.")
          progressBar.max = totalTime.value  // Valeur max de la barre de progression
          mp3Echauffements.play() // Lance le son "Echauffements"
          intervalStarted = setInterval(() => {
            timer.value++ // Incrémente le timer de 1 chaque sec
            progressBar.value = timer.value // La value de la progressBar = value timer
            tempsEcoule.innerHTML = (timer.value / 60).toFixed(2) //Temps en min arrondi
            console.log(timer.value)
            let totalElapsedTime = 0; // Temps total passé (Augmente à chaque étape finie)
            for (let i = 0; i < steps.length; i++) {
              totalElapsedTime += steps[i].time;
              if (timer.value === totalElapsedTime) { // Si le timer de l'étape == temps passé
                if(i != steps.length - 1) { // Si ce n'est pas la dernière étape
                  if(steps[i+1].label == "Trot") { // Si la prochaine étape est : Trot
                    console.log(steps[i+1].label);
                    mp3Trottes.play(); // Joue le son
                  } else if(steps[i+1].label == "Marche") { // Si la prochaine étape est : Marche
                    console.log(steps[i+1].label);
                    mp3Marches.play(); // Joue le son
                  } else if(steps[i+1].label == "Étirements") { // Si la prochaine étape est : Etirements
                    console.log(steps[i+1].label);
                    mp3Etirements.play(); // Joue le son
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
                break;
              }
            }
          }, 1000);
          }
    })

  // Stop du timer de la session
  stopBtn.addEventListener('click', e => {
    if(confirm('Voulez vous vraiment arrêter la session ? Vous devrez la recommencer du début !')) { // Demande confirmation à l'utilisateur
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
  // Reset de la session
  resetBtn.addEventListener('click', e => {
    if (activeSession.done) { // Si la session est terminée
      if (confirm('Voulez vous vraiment réinitialiser cette session ? Elle ne sera plus considérée comme terminée !')) {
        activeSession.done = false // La réinitialise
      } 
    } else { // Si session non terminée
        alert("Vous n'avez pas encore fait cette session.")
      }
    checkActiveDone()
  })
})





</script>


<style scoped>

/***  Tableau ***/
.tableau {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  widows: 100%;
}
table {
  border-spacing: 0;
  margin-block: 1rem;
  width: 100%;
}
table > tr > th {
  padding: .3rem;
}
table th:nth-child(1) {
  width: 30%;
}
table th:nth-child(2) {
  width: 40%;
}
table th:nth-child(3) {
  width: 30%;
}

/***  Titre ***/
.actuel {
  padding-block: .5rem;
}
.nextsession {
  padding-inline: 1rem;
  display: grid;
  text-align: center;
}
.sessiondone {
padding: 1rem;
text-align: center;
}
.emoji {
  font-size: 2rem;
}

/*** Btn start stop + progression ***/
.progress {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-block: 1rem;
  justify-content: space-evenly;
}
/*** B-C du tableau ***/
.echauff{
  background-color: #765432cc;
}
.marche {
  background-color: #76543270;
}
.trot {
  background-color: #76543220;
}

/*** Boutons ***/
.startbtn {
  background-color: green;
}
.resetbtn, .stopbtn {
  background-color: red;
}
.startbtn, .stopbtn, .resetbtn {
  padding: 1.5rem;
  border: none;
  border-radius: 100px;
  box-shadow: black 3px 3px;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1rem;
  color: white;
}
.startbtn:hover, .stopbtn:hover, .resetbtn:hover {
  cursor: pointer;
}
.bouton {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.hidden {
  display: none;
}
</style>
