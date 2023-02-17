<template>
  <div class="w-full px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-primary-dark rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-primary-lighter ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-primary-lightest-6 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(transactions, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'bg-white rounded-xl p-3',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-primary-lighter  ring-opacity-60',
          ]"
        >
          <ul v-if="transactions.length > 0">
            <li
              v-for="transaction in transactions"
              :key="transaction.id"
              class="relative flex justify-between p-3 rounded-md hover:bg-coolGray-100"
            >
              <div>
                <h3 class="text-sm font-medium leading-5">
                {{ transaction.id }}. <b>{{ transaction.nama }}
                </b></h3>

                <ul
                  class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                >
                  <li>{{ transaction.judul_tesis }}</li>
                </ul>
              </div>
              <div>
                <Chip :type="!transaction.isIncome ? 'danger': 'success'">
                  
                <router-link :to="{path:  transaction.path}">View </router-link>
                </Chip>
              </div>
              <!-- <a
                href="javascript:void(0)" @click="klikMenu('testing')"
                :class="[
                  'absolute inset-0 rounded-md',
                  'focus:z-10 focus:outline-none focus:ring-2 ring-primary-lighter',
                ]"
              /> -->
            </li>
          </ul>
          <span v-else>Belum ada Data...</span>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useMahasiswaStore } from '@/store/transaction';
import useDateFormat from '@/composables/useDateFormat'
import usePriceFormat from '@/composables/usePriceFormat';
import Chip from '@/components/Chip.vue'
import router from '../router/index';

const transactionStore = useMahasiswaStore();
const { allTransaction, incomeTransaction, outComeTransaction } = storeToRefs(transactionStore);

const categories = ref({
  "Uji Proposal": allTransaction,
  "Uji Hasil": allTransaction,
  "Uji Tutup" : outComeTransaction
})

function klikMenu(name) {
  console.log('menu clicked at name route ' + name)
  
  router.push({ path: name })
}
</script>
