import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  return { count, increment }
})
