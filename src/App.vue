<template>
  <div id="app" class="bg-primary-dark h-full">
    <TransitionRoot
      :show="commonStore.isLoading"
      enter="transition-opacity ease-linear duration-200"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity ease-linear duration-200"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <MainLoading/>
    </TransitionRoot>
    <div>
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
        >

        <Toast v-if="commonStore.toast.show" :type="commonStore.toast.type">
          {{ commonStore.toast.message }}
        </Toast>
      </transition>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import MainLoading from '@/components/Loading/MainLoading.vue'
import Toast from '@/components/Toast.vue'
import { useCommonStore } from '@/store';
import { TransitionRoot } from '@headlessui/vue'
const commonStore = useCommonStore();

commonStore.$subscribe((mutation, state) => {
  if(mutation.storeId === 'common') {
    if (state.toast.show) {
      setTimeout(() => {
        commonStore.showToast({
          show: false,
          type: '',
          message: '',
        });
      }, 2000);
    }
  }
})
</script>

<style>

</style>
