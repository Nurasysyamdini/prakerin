import { defineStore } from 'pinia'
export const useCommonStore = defineStore('common', {
  state: () => ({
    isLoading: false,
    toast: {
      show: false,
      message: '',
      type: 'success',
    }
  }),
  actions: {
    startLoading({ state }) {
      this.$patch({
        isLoading: state,
      })
    },
    showToast(params) {
      this.toast = params
    },
  }
})
