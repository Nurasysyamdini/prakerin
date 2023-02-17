import { defineStore } from 'pinia'
import { getTransactions } from '@/api/transaction.api'
export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transaction: [],
  }),
  actions: {
    async get(){
        await getTransactions()
        .then(res => {
            this.transaction = res.data.data.nobel_mm_uji_hasil
        })
        .catch(err => {
            console.log(err)
        })
    }
  },
  getters: {
    totalMahasiswaLulusUjiHasil: state => {
      let total = 0
      // state.transaction.forEach(item => {
      //   if (item.isIncome === false) {
      //     total += item.amount
      //   }
      // })
      return "500 Mhs"; //total
    },
    totalMahasiswaLulusUjiProposal: state => {
      let total = 0
      // state.transaction.forEach(item => {
      //   if (item.isIncome === false) {
      //     total += item.amount
      //   }
      // })
      return "400 Mhs"; //total
    },
    totalIncome: state => {
      let total = 0
      state.transaction.forEach(item => {
        if (item.isIncome === true) {
          total += item.amount
        }
      })
      return total
    },
    allTransaction: state => {
      return state.transaction.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },
    incomeTransaction: state => {
      return state.transaction.filter(item => item.isIncome === true).sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },
    outComeTransaction: state => {
      return state.transaction.filter(item => item.isIncome === false).sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    }
  }
})
