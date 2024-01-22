<script setup>

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
})

const changeOption = (event) => {
    // console.log(event.target.value);
    emits('update:modelValue', event.target.value);
};
</script>

<template>
    <select
        :value="modelValue"
        @input="changeOption"
        :class="$attrs.class || 'select' "
    >

        <option disabled value="">Виберіть із списку</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>


<style scoped lang="scss">
    .select {
        width: 100%;
        max-width: 300px;
        height: 40px;
        padding: 0 10px;

        border: 1px solid #d1d1d1;
        border-radius: 7px;

        font-size: 15px;
        color: #1b1919;


    }
</style>