import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "user",
  state: () => ({}),
  actions: {
    set(id, username) {
      this.id = id
    },
  },
})
