<script setup>

    const props = defineProps({
        type: {
            type: String,
            required: false,
            default: 'button'
        }
    })


</script>

<template>
    <button
        :class="$attrs.class || 'button' "
        :type="type"
    >
        <slot></slot>

    </button>

</template>

<style scoped lang="scss">
    @import "@/style.scss";

</style>