<template>
    <div class="max-w-2xl min-h-screen px-6 py-12 mx-auto">
        <div class="w-full h-auto p-6 bg-white rounded-md shadow-md">
            <h1 class="px-3 mb-6 text-3xl font-bold border-l-2 text-primary-dark border-1 border-primary-light">Tambah Pengeluaran</h1>
            <div class="flex flex-col">
                <text-field
                    label="Nama Pengeluaran"
                    v-model="request.name"
                />
                <text-field
                    label="Jumlah"
                    class="my-2"
                    v-model="request.amount"
                />

                <date-picker :model-value="request.date" @update:modelValue="newVal => request.date = newVal"/>
                
            </div>
            <div class="flex justify-end w-full mt-5">
                <button @click="router.push('/')" class="px-4 py-2 mr-2 rounded-md bg-secondary-lightest-2 text-primary-dark">
                    Kembali
                </button>
                <button @click="save" class="px-4 py-2 text-white rounded-md bg-primary-light">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCommonStore } from '@/store';
import { createTransaction } from '@/api/transaction.api';

import TextField from '@/components/Form/TexField.vue';
import DatePicker from '@/components/Form/DatePicker.vue';

const router = useRouter();
const commonStore = useCommonStore();
const request = ref({
    name: '',
    amount: 0,
    date: new Date(),
    isIncome: false
})

onMounted(() => {
    request.value.date = new Date();
});

const save = async () => {
    await createTransaction(request.value)
    .then(res => {
        console.log(res)
        router.push({ name: 'Home' })
        commonStore.showToast({
            message: 'Data berhasil ditambahkan',
            type: 'success',
            show: true
        })
    }).catch(err => {
        console.log(err)
        commonStore.showToast({
            message: 'Data gagal ditambahkan',
            type: 'error',
            show: true
        })
    })
    
}
</script>
