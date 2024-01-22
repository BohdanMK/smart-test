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
            required: false,
            default: 'text'
        },
        value: {
            type: String,
            required: false,
        },
        readonly: {
            type: Boolean,
            required: false
        },
        error: {
            type: Array,
            required: false
        },
        name: {
            type: String,
            required: true,
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
            :placeholder="placeholder"
            :class="$attrs.class || 'input-text' "
            :readonly="readonly"
            :value="value"
            :name="name"
            @input="insertValue"
        >
        <label class="input-label">{{ placeholder }}</label>
        <svg v-if="iconSvg" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        v-html="iconSvg"
        >
        </svg>
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
        margin-bottom: 50px;
        position: relative;

        & .form-error {
            width: 100%;

            background: #dd2323;
            margin-top: 4px;
            border-radius: 7px;
            font-size: 13px;
            color: $bg-white;
            padding: 5px;

            position: absolute;
            z-index: 2;
        }

        & .input-text {
            border: 1px solid #d1d1d1;
            padding: 0 10px;
            height: 40px;
            border-radius: 7px;
            font-size: 15px;
            color: #1b1919;
            width: 100%;
            position: relative;
            z-index: 1;

            &::placeholder {
                color: #1b1919;
            }

            &:focus + .input-label {
                z-index: 1;
                opacity: 1;
                top: -20px;
            }

            &:focus::placeholder {
                opacity: 0;
            }

            &:not(:placeholder-shown) + .input-label {
                z-index: 1;
                opacity: 1;
                color: #1b1919;
                top: -20px;
            }
        }

        .input-label {
            font-weight: 400;
            display: block;
            position: absolute;
            top: 20px;
            opacity: 0;
            z-index: -1;
            transition: 0.3s;
            font-size: 15px;
            color: #1b1919;
        }


    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>