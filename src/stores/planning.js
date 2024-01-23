// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlanningStore = defineStore({

  id : "planning",

  state : () => ({
    planning : [{
      id : 1,
      label : "Saison",
      content : "Entraînements 0-5 Km",
      done : false,
      order : 1,
      active : false,
      semaines : [
          {
            id : 1,
            label : "Semaine",
            done : false,
            order : 1,
            active : false,
            sceances : [
              {
                id : 1,
                label : "Scéance",
                done : true,
                order : 1,
                active : false,
                etapes : [
                  {
                    id : 1,
                    label : "Échauffements",
                    time : 600,
                    done : true,
                    order : 1,
                    active : false
                  },
                  {
                    id : 2,
                    label : "Trot",
                    time : 30,
                    done : true,
                    order : 2,
                    active : false
                  },
                  {
                    id : 3,
                    label : "Marche",
                    time : 60,
                    done : true,
                    order : 3,
                    active : false
                  },
                  {
                    id : 4,
                    label : "Trot",
                    time : 60,
                    done : true,
                    order : 4,
                    active : false
                  },
                  {
                    id : 5,
                    label : "Marche",
                    time : 60,
                    done : true,
                    order : 5,
                    active : false
                  },
                  {
                    id : 6,
                    label : "Trot",
                    time : 90,
                    done : true,
                    order : 6,
                    active : false
                  },
                  {
                    id : 7,
                    label : "Marche",
                    time : 90,
                    done : true,
                    order : 7,
                    active : false
                  },
                  {
                    id : 8,
                    label : "Trot",
                    time : 120,
                    done : true,
                    order : 8,
                    active : false
                  },
                  {
                    id : 9,
                    label : "Marche",
                    time : 120,
                    done : true,
                    order : 9,
                    active : false
                  },
                  {
                    id : 10,
                    label : "Trot",
                    time : 90,
                    done : true,
                    order : 10,
                    active : false
                  },
                  {
                    id : 11,
                    label : "Marche",
                    time : 120,
                    done : true,
                    order : 11,
                    active : false
                  },
                  {
                    id : 12,
                    label : "Trot",
                    time : 60,
                    done : true,
                    order : 12,
                    active : false
                  },
                  {
                    id : 13,
                    label : "Étirements",
                    time : 300,
                    done : true,
                    order : 13,
                    active : false
                  }
                ]
              },
              {
                id : 2,
                label : "Scéance",
                done : false,
                order : 2,
                active : false,
                etapes : [
                  {
                    id : 1,
                    label : "Échauffements",
                    time : 600,
                    done : false,
                    order : 1,
                    active : false
                  },
                  {
                    id : 2,
                    label : "Trot",
                    time : 60,
                    done : false,
                    order : 2,
                    active : false
                  },
                  {
                    id : 3,
                    label : "Marche",
                    time : 60,
                    done : false,
                    order : 3,
                    active : false
                  },
                  {
                    id : 4,
                    label : "Trot",
                    time : 90,
                    done : false,
                    order : 4,
                    active : false
                  },
                  {
                    id : 5,
                    label : "Marche",
                    time : 90,
                    done : false,
                    order : 5,
                    active : false
                  },
                  {
                    id : 6,
                    label : "Trot",
                    time : 120,
                    done : false,
                    order : 6,
                    active : false
                  },
                  {
                    id : 7,
                    label : "Marche",
                    time : 150,
                    done : false,
                    order : 7,
                    active : false
                  },
                  {
                    id : 8,
                    label : "Trot",
                    time : 120,
                    done : false,
                    order : 8,
                    active : false
                  },
                  {
                    id : 9,
                    label : "Marche",
                    time : 60,
                    done : false,
                    order : 9,
                    active : false
                  },
                  {
                    id : 10,
                    label : "Trot",
                    time : 60,
                    done : false,
                    order : 10,
                    active : false
                  },
                  {
                    id : 11,
                    label : "Étirements",
                    time : 300,
                    done : false,
                    order : 11,
                    active : false
                  }
                ]
              },
              {
                id : 3,
                label : "Scéance",
                done : false,
                order : 3,
                active : false,
                etapes : [
                  {
                    id : 1,
                    label : "Échauffements",
                    time : 600,
                    done : false,
                    order : 1,
                    active : false
                  },
                  {
                    id : 2,
                    label : "Trot",
                    time : 60,
                    done : false,
                    order : 2,
                    active : false
                  },
                  {
                    id : 3,
                    label : "Marche",
                    time : 60,
                    done : false,
                    order : 3,
                    active : false
                  },
                  {
                    id : 4,
                    label : "Trot",
                    time : 120,
                    done : false,
                    order : 4,
                    active : false
                  },
                  {
                    id : 5,
                    label : "Marche",
                    time : 120,
                    done : false,
                    order : 5,
                    active : false
                  },
                  {
                    id : 6,
                    label : "Trot",
                    time : 150,
                    done : false,
                    order : 6,
                    active : false
                  },
                  {
                    id : 7,
                    label : "Marche",
                    time : 180,
                    done : false,
                    order : 7,
                    active : false
                  },
                  {
                    id : 8,
                    label : "Trot",
                    time : 150,
                    done : false,
                    order : 8,
                    active : false
                  },
                  {
                    id : 9,
                    label : "Marche",
                    time : 150,
                    done : false,
                    order : 9,
                    active : false
                  },
                  {
                    id : 10,
                    label : "Trot",
                    time : 60,
                    done : false,
                    order : 10,
                    active : false
                  },
                  {
                    id : 11,
                    label : "Étirements",
                    time : 300,
                    done : false,
                    order : 11,
                    active : false
                  }
                ]
              }
            ]
          },
          {
            id : 2,
            label : "Semaine",
            done : false,
            order : 2,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 150,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 150,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 150,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 150,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 3,
            label : "Semaine",
            done : false,
            order : 3,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 90,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 150,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 90,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 150,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 150,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 90,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 4,
            label : "Semaine",
            done : false,
            order : 4,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 11,
                      active : false
                    },
                    {
                      id : 12,
                      label : "Trot",
                      time : 60,
                      done : false,
                      order : 12,
                      active : false
                    },
                    {
                      id : 13,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 13,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 5,
            label : "Semaine",
            done : false,
            order : 5,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 120,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 11,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 11,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 30,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 360,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 11,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 6,
            label : "Semaine",
            done : false,
            order : 6,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 11,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 360,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 11,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 360,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 420,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 11,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 7,
            label : "Semaine",
            done : false,
            order : 7,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 360,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 420,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 540,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 180,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 9,
                      active : false
                    },
                    {
                      id : 10,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 10,
                      active : false
                    },
                    {
                      id : 11,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 11,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 8,
            label : "Semaine",
            done : false,
            order : 8,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 360,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 55,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 9,
            label : "Semaine",
            done : false,
            order : 9,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 480,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 7,
                      active : false
                    },
                    {
                      id : 8,
                      label : "Trot",
                      time : 720,
                      done : false,
                      order : 8,
                      active : false
                    },
                    {
                      id : 9,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 9,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 10,
            label : "Semaine",
            done : false,
            order : 10,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 720,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 840,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 7,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 720,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 840,
                      done : false,
                      rder : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 7,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 720,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 840,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 7,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 11,
            label : "Semaine",
            done : false,
            order : 11,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 960,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 960,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 7,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 840,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 60,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 240,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 5,
                      active : false
                    },
                    {
                      id : 6,
                      label : "Trot",
                      time : 1080,
                      done : false,
                      order : 6,
                      active : false
                    },
                    {
                      id : 7,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 7,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 960,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 180,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 1080,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 5,
                      active : false
                    }
                  ]
                }
            ]
          },
          {
            id : 12,
            label : "Semaine",
            done : false,
            order : 12,
            active : false,
            sceances : [
                {
                  id : 1,
                  label : "Scéance",
                  done : false,
                  order : 1,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 600,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 1500,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 5,
                      active : false
                    }
                  ]
                },
                {
                  id : 2,
                  label : "Scéance",
                  done : false,
                  order : 2,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 300,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Marche",
                      time : 120,
                      done : false,
                      order : 3,
                      active : false
                    },
                    {
                      id : 4,
                      label : "Trot",
                      time : 1800,
                      done : false,
                      order : 4,
                      active : false
                    },
                    {
                      id : 5,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 5,
                      active : false
                    }
                  ]
                },
                {
                  id : 3,
                  label : "Scéance",
                  done : false,
                  order : 3,
                  active : false,
                  etapes : [
                    {
                      id : 1,
                      label : "Échauffements",
                      time : 600,
                      done : false,
                      order : 1,
                      active : false
                    },
                    {
                      id : 2,
                      label : "Trot",
                      time : 2400,
                      done : false,
                      order : 2,
                      active : false
                    },
                    {
                      id : 3,
                      label : "Étirements",
                      time : 300,
                      done : false,
                      order : 3,
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
      done : false,
      order : 2,
      active : false,
      "semaines" : [
          {
              id : 1,
              label : "Semaine",
              done : false,
              order : 1,
              active : false,
              sceances : [
                  {
                      id : 1,
                      label : "Scéance",
                      done : false,
                      order : 1,
                      active : false,
                      etapes : [
                        {
                          id : 1,
                          label : "Échauffements",
                          time : 600,
                          done : false,
                          order : 1,
                          active : false
                        },
                        {
                          id : 2,
                          label : "Trot",
                          time : 600,
                          done : false,
                          order : 2,
                          active : false
                        },
                        {
                          id : 3,
                          label : "Marche",
                          time : 120,
                          done : false,
                          order : 3,
                          active : false
                        },
                        {
                          id : 4,
                          label : "Trot",
                          time : 1500,
                          done : false,
                          order : 4,
                          active : false
                        },
                        {
                          id : 5,
                          label : "Étirements",
                          time : 300,
                          done : false,
                          order : 5,
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
