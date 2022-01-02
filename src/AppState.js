import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  points: 0,
  amplifier: 1,
  cost: 25,
})
