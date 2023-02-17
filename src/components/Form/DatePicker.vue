<!-- SFC file -->
<template>
  <div class="flex flex-col">
    <span class="mb-2 text-lg text-primary-lighter">Tanggal</span>
    <litepie-datepicker
      :pickerValue="dateValue"
      :modelValue="dateValue"
      as-single
      v-slot="{ value, placeholder, clear }"
      @update:modelValue="onInput"
    >
      <div class="flex">
        <div class="flex-1">
          <button
            type="button"
            class="flex w-full px-2 py-2 space-x-2 leading-6 transition duration-300 ease-out border-2 rounded-md bg-gray-50 text-primary-light hover:text-gray-900 sm:px-3 border-primary-lighter items-left justify-left sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none"
          >
            <span class="text-left text-primary-lighter">
              {{ value || placeholder }}
            </span>
          </button>
        </div>
        <div class="flex-shrink-0">
          <button
            type="button"
            class="flex items-center justify-center flex-none px-3 py-2 ml-4 space-x-2 leading-6 transition duration-300 ease-out border-2 rounded-md bg-indigo-50 text-primary-dark hover:text-primary-lighter sm:px-6 border-primary-lighter sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-300 focus:outline-none"
            @click="clear"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </litepie-datepicker>
  </div>
</template>

<script setup>
    import { defineProps, defineEmits, computed } from 'vue';
    import LitepieDatepicker from 'litepie-datepicker';

    const props = defineProps({
      modelValue: {
        type: Date,
        default: [new Date()],
      },
    })

    const dateValue = computed(() => {
      return [props.modelValue]
    })

    const emit = defineEmits(['update:modelValue'])

    function onInput(value) 
    { 
      emit('update:modelValue', value[0])
    }
      
</script>
