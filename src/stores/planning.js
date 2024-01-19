import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlanningStore = defineStore({

  id : "planning",

  state : () => ({
    planning : [{
      id : 1,
      label : "Saison",
      content : "Entraînements 0-5 Km",
      status : false,
      active : false,
      semaines : [
          {
            id : 1,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
              {
                id : 1,
                label : "Scéance",
                status : false,
                active : false,
                etapes : [
                  {
                    id : 1,
                    label : "Échauffements",
                    time : 600,
                    status : false,
                    active : false
                  },
                  {
                    id : 2,
                    label : "Trot",
                    time : 30,
                    status : false,
                    active : false
                  },
                  {
                    id : 3,
                    label : "Marche",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 4,
                    label : "Trot",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 5,
                    label : "Marche",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 6,
                    label : "Trot",
                    time : 90,
                    status : false,
                    active : false
                  },
                  {
                    id : 7,
                    label : "Marche",
                    time : 90,
                    status : false,
                    active : false
                  },
                  {
                    id : 8,
                    label : "Trot",
                    time : 120,
                    status : false,
                    active : false
                  },
                  {
                    id : 9,
                    label : "Marche",
                    time : 120,
                    status : false,
                    active : false
                  },
                  {
                    id : 10,
                    label : "Trot",
                    time : 90,
                    status : false,
                    active : false
                  },
                  {
                    id : 11,
                    label : "Marche",
                    time : 120,
                    status : false,
                    active : false
                  },
                  {
                    id : 12,
                    label : "Trot",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 13,
                    label : "Étirements",
                    time : 300,
                    status : false,
                    active : false
                  }
                ]
              },
              {
                id : 2,
                label : "Scéance",
                status : false,
                active : false,
                etapes : [
                  {
                    id : 1,
                    label : "Échauffements",
                    time : 600,
                    status : false,
                    active : false
                  },
                  {
                    id : 2,
                    label : "Trot",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 3,
                    label : "Marche",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 4,
                    label : "Trot",
                    time : 90,
                    status : false,
                    active : false
                  },
                  {
                    id : 5,
                    label : "Marche",
                    time : 90,
                    status : false,
                    active : false
                  },
                  {
                    id : 6,
                    label : "Trot",
                    time : 120,
                    status : false,
                    active : false
                  },
                  {
                    id : 7,
                    label : "Marche",
                    time : 150,
                    status : false,
                    active : false
                  },
                  {
                    id : 8,
                    label : "Trot",
                    time : 120,
                    status : false,
                    active : false
                  },
                  {
                    id : 9,
                    label : "Marche",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 10,
                    label : "Trot",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 11,
                    label : "Étirements",
                    time : 300,
                    status : false,
                    active : false
                  }
                ]
              },
              {
                id : 3,
                label : "Scéance",
                status : false,
                active : false,
                etapes : [
                  {
                    id : 1,
                    label : "Échauffements",
                    time : 600,
                    status : false,
                    active : false
                  },
                  {
                    id : 2,
                    label : "Trot",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 3,
                    label : "Marche",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 4,
                    label : "Trot",
                    time : 120,
                    status : false,
                    active : false
                  },
                  {
                    id : 5,
                    label : "Marche",
                    time : 120,
                    status : false,
                    active : false
                  },
                  {
                    id : 6,
                    label : "Trot",
                    time : 150,
                    status : false,
                    active : false
                  },
                  {
                    id : 7,
                    label : "Marche",
                    time : 180,
                    status : false,
                    active : false
                  },
                  {
                    id : 8,
                    label : "Trot",
                    time : 150,
                    status : false,
                    active : false
                  },
                  {
                    id : 9,
                    label : "Marche",
                    time : 150,
                    status : false,
                    active : false
                  },
                  {
                    id : 10,
                    label : "Trot",
                    time : 60,
                    status : false,
                    active : false
                  },
                  {
                    id : 11,
                    label : "Étirements",
                    time : 300,
                    status : false,
                    active : false
                  }
                ]
              }
            ]
          },
          {
            id : 2,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 150,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 150,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 150,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 150,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 3,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 90,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 150,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 90,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 150,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 150,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 90,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 4,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 5,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 360,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 6,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 360,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 360,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 420,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 7,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 360,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 420,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 540,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 8,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 360,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 9,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 480,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 720,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 10,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 720,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 840,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 720,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 840,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 720,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 840,
                      status : false,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 11,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 960,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 960,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 840,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 1080,
                      status : false,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 960,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 180,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 1080,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 12,
            label : "Semaine",
            status : false,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 1500,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 300,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      status : false,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 1800,
                      status : false,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  status : false,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      status : false,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 2400,
                      status : false,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Étirements",
                      time : 300,
                      status : false,
                      active : false
                    }
                  ]
                }
            ]
          }
      ]
    },
    {
      id : 2,
      label : "Saison",
      "content" : "Entraînements 5-10 Km",
      status : false,
      active : false,
      "semaines" : [
          {
              id : 1,
              label : "Semaine",
              status : false,
              active : false,
              sceances : [
                  {
                      id : 1,
                      label : "Scéance",
                      status : false,
                      active : false,
                      etapes : [
                        {
                          id : 1,
                          label : "Échauffements",
                          time : 600,
                          status : false,
                          active : false
                        },
                        {
                          id : 2,
                          label : "Trot",
                          time : 600,
                          status : false,
                          active : false
                        },
                        {
                          id : 3,
                          label : "Marche",
                          time : 120,
                          status : false,
                          active : false
                        },
                        {
                          id : 4,
                          label : "Trot",
                          time : 1500,
                          status : false,
                          active : false
                        },
                        {
                          id : 5,
                          label : "Étirements",
                          time : 300,
                          status : false,
                          active : false
                        }
                      ]
                    },
                    {
                      id : 2,
                      label : "Scéance",
                      status : false,
                      active : false,
                      etapes : [
                        {
                          id : 1,
                          label : "Échauffements",
                          time : 600,
                          status : false,
                          active : false
                        },
                        {
                          id : 2,
                          label : "Trot",
                          time : 300,
                          status : false,
                          active : false
                        },
                        {
                          id : 3,
                          label : "Marche",
                          time : 120,
                          status : false,
                          active : false
                        },
                        {
                          id : 4,
                          label : "Trot",
                          time : 1800,
                          status : false,
                          active : false
                        },
                        {
                          id : 5,
                          label : "Étirements",
                          time : 300,
                          status : false,
                          active : false
                        }
                      ]
                    }
              ]
          },
          {
              id : 2,
              label : "Semaine",
              status : false,
              active : false,
              sceances : [
                  {
                      id : 1,
                      label : "Scéance",
                      status : false,
                      active : false,
                      etapes : [
                        {
                          id : 1,
                          label : "Échauffements",
                          time : 600,
                          status : false,
                          active : false
                        },
                        {
                          id : 2,
                          label : "Trot",
                          time : 600,
                          status : false,
                          active : false
                        },
                        {
                          id : 3,
                          label : "Marche",
                          time : 120,
                          status : false,
                          active : false
                        },
                        {
                          id : 4,
                          label : "Trot",
                          time : 1500,
                          status : false,
                          active : false
                        },
                        {
                          id : 5,
                          label : "Étirements",
                          time : 300,
                          status : false,
                          active : false
                        }
                      ]
                    },
                    {
                      id : 2,
                      label : "Scéance",
                      status : false,
                      active : false,
                      etapes : [
                        {
                          id : 1,
                          label : "Échauffements",
                          time : 600,
                          status : false,
                          active : false
                        },
                        {
                          id : 2,
                          label : "Trot",
                          time : 300,
                          status : false,
                          active : false
                        },
                        {
                          id : 3,
                          label : "Marche",
                          time : 120,
                          status : false,
                          active : false
                        },
                        {
                          id : 4,
                          label : "Trot",
                          time : 1800,
                          status : false,
                          active : false
                        },
                        {
                          id : 5,
                          label : "Étirements",
                          time : 300,
                          status : false,
                          active : false
                        }
                      ]
                    }
              ]
          }
      ]
    }]
  }),

  getters : {
    thePlanning : (state) => {
      return state.planning
    },
    aSeason : (state) => {
      return (indexS) => state.planning[indexS]
    },
    aWeek : (state) => {
      return (indexS, indexW) => state.planning[indexS].semaines[indexW]
    },
    aDay : (state) => {
      return (indexS, indexW, indexD) => state.planning[indexS].semaines[indexW].sceances[indexD]
    },
    aStep : (state) => {
      return (indexS, indexW, indexD, indexStep) => state.planning[indexS].semaines[indexW].sceances[indexD].etapes[indexStep]
    }
  },

  actions : {
    //
  }
})
