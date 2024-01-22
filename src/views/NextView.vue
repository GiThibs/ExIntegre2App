

<template>
  <div class="nextsession">
    <h1>Votre prochaine session</h1><hr>
    <h3 class="actuel">Vous en êtes ici :<br>Saison {{ saison }} - Semaine {{ week }} - Session {{ day }}</h3><hr>
    <div class="masession">
      <table class="steparray">
        <caption>
          Ma sessions du jour
        </caption>
        <tr v-for="(step, key) in steps" :key="key" :index="key">
          <th>Etape n°{{ step.order }}</th>
          <th class="label">{{ step.label }}</th>
          <th>{{ step.time }}s</th>
        </tr>
      </table>
      <section class="progress">
        <div class="progressionbar">Barre de progression</div>
        <div class="progressionstep">Progression de étapes : 3/13</div>
        <div class="tempsecoule">Temps écoulé : 5/35 min</div>
      </section>
    </div>
    <button class="resetbtn">Recommencer la session ?</button>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { usePlanningStore } from '@/stores/planning'
import { onMounted } from 'vue';

const route = useRoute()

const saison = route.params.nextSaisonOrder
const week = route.params.nextWeekOrder
const day = route.params.nextDayOrder

const planningStore = usePlanningStore()
const saisons = planningStore.planning

const activeSession = saisons.find((el) => el.order == saison).semaines.find((el) => el.order == week).sceances.find((el) => el.order == day)

const steps = activeSession.etapes

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
})

</script>


<style scoped>

table > tr > th {
  padding: .3rem;
}
.actuel {
  padding-block: .5rem;
}
.nextsession {
  padding: 1rem;
}
.masession {
  display: flex;
  justify-content: space-between;
}
.echauff{
  background-color: red;
}
.marche {
  background-color: aqua;
}
.trot {
  background-color: green;
}

</style>
