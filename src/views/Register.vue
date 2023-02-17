<template>
 <div class="flex items-center justify-center max-w-lg min-h-screen px-6 py-12 mx-auto login">
    <div class="w-full h-auto p-6 bg-white rounded-md shadow-md">
        <h1 class="px-3 mb-6 text-3xl font-bold border-l-2 text-primary-dark border-1 border-primary-light">Register</h1>
        <div>
            <text-field
                label="Username"
                v-model="username"
            />

            <text-field
                class="mt-3"
                label="Email"
                v-model="email"
            />

            <text-field
                class="mt-3"
                type="password"
                label="password"
                v-model="password"
            />
        </div>
        <div class="flex justify-between w-full mt-5">
            <router-link to="/login" class="font-[0.5em] text-primary-light cursor-pointer  font-bold">
                <small>
                    Login disini
                </small>
            </router-link>
            <button @click="onRegis" class="px-4 py-2 text-white rounded-md bg-primary-light">
                Register
            </button>
        </div>
     </div>
 </div>
</template>
<script setup>
import { ref } from 'vue';
import TextField from '@/components/Form/TexField.vue';
import { useRouter } from 'vue-router';
import { useCommonStore } from '@/store/index'
import axios from '@/middleware';
const username = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
const commonStore = useCommonStore();
const onRegis = async () => {
    // // router.push('/')
    await axios.post('/auth/local/register' , {
        username: username.value,
        email: email.value,
        password: password.value
    })
    .then(res => {
        console.log(res)
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('token', res.data.jwt)
        router.push('/')
    })
    .catch(err => {
        console.log(err)
        commonStore.showToast({
            message: 'Username atau email sudah digunakan',
            type: 'error',
            show: true
        })
    })
}
</script>
