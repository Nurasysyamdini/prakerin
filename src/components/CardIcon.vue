<template>
    <div :class="`${currentClass} ${textColor} ${hoverClass} p-3 flex items-center justify-center w-60 h-12 relative rounded-md`">
     <slot></slot>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    height: {
        type: String,
        default: 'auto'
    },
    width: {
        type: Number,
        default: 600
    },
    className: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'primary'
    }
})

const currentColor = computed(() => {
    return props.color === 'primary' ? 'bg-primary-lightest-3' : 'bg-secondary-lightest-2'
})

const currentClass = computed(() => {
    return `${currentColor.value}`
})

const textColor = computed(() => {
    return props.color === 'primary' ? 'text-primary-dark' : 'text-black'
})

const hoverClass = computed(() => {
    if (props.color === 'primary') {
        return 'hover:bg-primary-lightest-2'
    } else {
        return 'hover:bg-secondary-lightest'
    }
})

</script>