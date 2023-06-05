import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useCounterStore = defineStore('counter',{ 
  state: () => {
    const count = ref(0)
    const name = ref('Storybook')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
    return { count, name, doubleCount, increment }
  },
  persist: true,
})