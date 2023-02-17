<template>
    <div class="flex p-6 bg-white rounded-md shadow-md cursor-pointer" :class="`${className} ${hoverStyle}`" :style="currentStyle">
        <div class="flex items-center h-full my-uto" >
            <slot name="icon"></slot>
        </div>
        <div class="flex items-center justify-end w-full">
            <h1 class="text-2xl font-bold text-primary-dark">{{ props.menu }}</h1>
        </div>
    </div>
</template>
<script setup>
 import { defineProps, computed } from 'vue';
 import usePriceFormat from '@/composables/usePriceFormat';
 const props = defineProps({
    height: {
        type: [String, Number],
        default: 'auto'
    },
    width: {
        type: [String, Number],
        default: 'auto'
    },
    className: {
        type: String,
        default: ''
    },
    amount: {
        type: Number,
        default: 0  
    },
    menu: {
        type: String,
        default: "Menu AC"  
    },
 })
 const currentHeight = computed(() => {
    return props.height === 'auto' ? 'auto' : `${props.height}px`
 })

 const currentWidth = computed(() => {
    if (props.width === 'full') {
        return '100%'
    }else {
        return props.width === 'auto' ? 'auto' : `${props.width}px`
    }
 })

const currentStyle = computed(() => {
    return {
        height: currentHeight.value,
        width: currentWidth.value
    }
})

const hoverStyle = computed(() => {
    return 'hover:bg-gray-200'
})
</script>
