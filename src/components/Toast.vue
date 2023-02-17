<template>
    <div class="rounded-md rounded-t-none shadow-md p-4 font-semibold absolute w-auto flex top-0 right-0 left-0  h-auto " :class="className">
        <slot>
            <span :class="className">
                {{ text }}
            </span>
        </slot>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: 'message'
    },
    type: {
        type: String,
        default: 'success',
        validator: value => ['success', 'info', 'warning', 'danger'].includes(value)
    },
})

const className = computed(() => {
    if (props.type === 'success') {
        return 'bg-primary-lightest-4 text-primary-dark'
    }else if (props.type === 'info') {
        return 'bg-blue-200 text-blue-800'
    }else if (props.type === 'warning') {
        return 'bg-orange-200 text-orange-800'
    }else {
        return 'bg-secondary-lightest-2 text-primay-dark'
    }

})
</script>