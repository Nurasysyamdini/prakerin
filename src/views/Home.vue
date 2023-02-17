<template>
<div class="max-w-2xl min-h-screen px-6 py-12 mx-auto home">
    <div class="flex items-end justify-end mb-5">
        <Navigation/>
    </div>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
            
            <Card @click="router.push({ name: 'AddOutcome'})" :menu="transactionStore.totalMahasiswaLulusUjiHasil" :height="120" width="full">
            <!-- <Card @click="router.push({ name: 'AddIncome'})" :menu="TESS" :height="120" width="full"> -->
                <template #icon>
                    <CardIcon :width="600">
                        <Plant className="text-[24px]" /> Uji Proposal
                    </CardIcon>
                </template>
            </Card>
        </div>
        <div>
            <Card @click="router.push({ name: 'AddOutcome'})" :menu="transactionStore.totalMahasiswaLulusUjiProposal" :height="120" width="full">
            <!-- <Card @click="router.push({ name: 'AddOutcome'})" :amount="234" :height="120" width="full"> -->
                <template #icon>
                    <CardIcon color="secondary">
                        <Fire className="text-[24px]" /> Uji Hasil
                    </CardIcon>
                </template>
            </Card>
        </div>
    </div>
    <div>
        <RecentSection />
    </div>
</div>
</template>
<script setup>
import Card from '@/components/Card.vue'
import CardIcon from '@/components/CardIcon.vue';
import CardLabel from '@/components/CardLabel.vue'
import Plant from '@/components/Icons/PlantIcon.vue';
import Fire from '@/components/Icons/FireIcon.vue';
import RecentSection from '@/components/RecentSection.vue';
import Navigation from '@/components/Navigation.vue';
import { useTransactionStore } from '@/store/menu';
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';


const router = useRouter();
const authStore = useAuth();
const transactionStore = useTransactionStore();

authStore.getUserLogedIn();
transactionStore.get();

</script>
