<template>
    <div class="max-w-2xl min-h-screen px-6 py-12 mx-auto">
        <div class="w-full h-auto p-6 bg-white rounded-md shadow-md">
            <h1 class="px-3 mb-6 text-3xl font-bold border-l-2 text-primary-dark border-1 border-primary-light">Tambah Pemasukan</h1>
            <div class="flex flex-col">
                <text-field
                    label="Nama Pemasukan"
                    v-model="request.name"
                />
                <text-field
                    label="Jumlah"
                    class="my-2"
                    v-model="request.amount"
                />

                <div class="flex my-3">
                    <div class="flex items-center">
                        <input class="mr-3" type="radio" :checked="radio == 'pendapatan'" id="one" value="pendapatan" v-model="radio" />
                        <label for="one">Pendapatan</label>
                    </div>
                    <div class="flex items-center ml-3">
                        <input class="mr-3" type="radio" :checked="radio == 'pengeluaran'" id="two" value="pengeluaran" v-model="radio" />
                        <label for="two">Pengeluaran</label>
                    </div>
                </div>


                <date-picker :model-value="request.datetime" @update:modelValue="newVal => request.date = newVal"/>
                
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
    datetime: new Date(),
    isIncome: true
})

const radio = ref('pendapatan')

onMounted(() => {
    request.value.date = new Date();
});

const save = async () => {
    await createTransaction({ ...request.value, isIncome: radio.value == 'pendapatan' ? true : false })
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
