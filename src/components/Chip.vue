<template>
<div class="rounded-md px-2 py-1 font-semibold" :class="className">
    <slot></slot>
</div>
</template>
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'success',
        validator: value => ['success', 'info', 'warning', 'danger'].includes(value)
    },
})

const className = computed(() => {
    if (props.type === 'success') {
        return 'bg-primary-lightest-3 text-primary-dark'
    }else if (props.type === 'info') {
        return 'bg-blue-200 text-blue-800'
    }else if (props.type === 'warning') {
        return 'bg-orange-200 text-orange-800'
    }else {
        return 'bg-secondary-lightest-2 text-primay-dark'
    }

})
</script>