import { defineStore } from 'pinia'
import { getUser } from '@/api/user.api'

export const useAuth = defineStore({
    id: 'auth',
    state: () => ({ 
        user: null,
        isAuthenticated: false,
        token: null,
    }),
    getters: {
        userData: (state) => {
            return state.user
        }
    },

    actions: {
        async getUserLogedIn(){
            await getUser()
            .then(res => {
                this.user = res.data.data.truck_user
            })
            .catch(err => {
                console.log(err)
            })
        },
    
        loggedIn({commit}) {
            commit('setIsAuthenticated', this.isAuthenticated)
            commit('setUser', this.user)
            commit('setToken', this.token)
        },

        logout({ commit }) {
            commit('setIsAuthenticated', false)
            commit('setUser', null)
            commit('setToken', null)
        }
    },
})
