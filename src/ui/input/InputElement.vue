<script setup>
    const emits = defineEmits(['update:value']);

    const props = defineProps({
        placeholder: {
            type: String,
            required: false,
            default: 'text'

        },
        iconSvg: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: true,
            default: 'text'
        },
        value: {
            type: String,
            required: false,
        },
        error: {
            type: Array,
            required: false
        },
        name: {
            type: String,
            required: true,
        },
        readonly: {
            type: Boolean,
            required: false
        }
    });

    const insertValue = (event) => {

        emits('update:value', event.target.value);
    }


</script>



<template>
    <div class="form-input">


    <input
        :type="type"
        :value="value"
        :name="name"
        :class="$attrs.class"
        :placeholder="placeholder"
        :readonly="readonly"
        @input="insertValue"
    >
    <TransitionGroup name="fade" >
        <div class="form-error"
            v-for="element of error"
            :key="element.$uid"
        >
            <div class="form-error__message">
                {{ element.$message }}
            </div>

        </div>
    </TransitionGroup>
    </div>
</template>

<style scoped lang="scss">
    @import "@/style.scss";

    .form-input {
        margin-bottom: 12px;
        position: relative;
        & .form-error {
        width: 100%;


        margin-top: 4px;
        border-radius: 7px;
        font-size: 13px;
        color: red;
        padding: 5px;

        position: absolute;
        top: 5px;
        z-index: 2;
    }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>