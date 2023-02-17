<template>
 <div class="flex items-center justify-center max-w-lg min-h-screen px-6 py-12 mx-auto login">
    <div class="w-full h-auto p-6 bg-white rounded-md shadow-md">
        <h1 class="px-3 mb-6 text-3xl font-bold border-l-2 text-primary-dark border-1 border-primary-light">Login</h1>
        <div>
            <text-field
                label="username"
                v-model="identifier"
            />

            <text-field
                class="mt-3"
                type="password"
                label="password"
                v-model="password"
            />
        </div>
        <div class="flex justify-between w-full mt-5">
            <small @click="registerPage" class="font-[0.5em] text-primary-light cursor-pointer  font-bold">
                Daftar disini
            </small>
            <button @click="onlogin" class="px-4 py-2 text-white rounded-md bg-primary-light">
                Login
            </button>
        </div>
     </div>
 </div>
</template>
<script setup>
import TextField from '@/components/Form/TexField.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/store/auth';
import { useCommonStore } from '@/store/index'
import axios from '@/middleware'
import qs from 'qs'
import apiKey from '../modules/config'


const router = useRouter();
const store = useAuth();
const commonStore = useCommonStore();
const identifier = ref('');
const password = ref('');
const registerPage = () => {
    router.push({ name: 'Register' })
}

const onlogin = async () => {
    commonStore.$patch({
        isLoading: true
    })
    let formData = {
        username: identifier.value,
        password: password.value
      }
    await axios.post('/user/login',
    qs.stringify(formData),
    {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "x-api-key": apiKey
    }
    })
    .then(res => {
        
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('truckingToken', res.data.token)

        store.$patch({
            isAuthenticated: true,
            user: res.data.user,
            token: res.data.token
        })

        commonStore.$patch({
            isLoading: false
        })

        router.push('/')
    })
    .catch(err => {
        commonStore.$patch({
            isLoading: false
        })

        commonStore.showToast({
            message: 'password atau username salah',
            type: 'error',
            show: true
        })
        
        alert("Login Failed");
    })
}
</script>
