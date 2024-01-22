<script setup>
    import { ref, computed } from 'vue';
    import useVueladate from '@vuelidate/core';
    import { helpers, minLength, email, required } from '@vuelidate/validators';


    const emits = defineEmits(['addUser', 'closeModal']);
    const nameField = ref('');
    const emailField = ref('');
    const userData = ref({
        name: nameField,
        email: emailField
    });



    const rules = computed(() => ({
        nameField: {
            required: helpers.withMessage('Це поле обов\'язкове', required),
            minLength: helpers.withMessage('Мінімальна довжина 3 символи', minLength(3))
        },
        emailField: {
            required: helpers.withMessage('Це поле обов\'язкове', required),
            email: helpers.withMessage('Введіть коректний email', email)
        }
    }));

    const handleCreateUser = () => {
        console.log(userData);
        v.value.$touch();
        if (v.value.$pending) return;  // Чекаємо на валідацію
        if (v.value.$error) return;    // Якщо є помилки, не відправляємо дані
        emits('addUser', userData);
    };

    const v = useVueladate(rules, {nameField, emailField});



</script>

<template>

        <div class="modal" @click="$emit('closeModal')">
            <form class="modal__form"
                @click.stop
                @submit.prevent
            >

                <button-element class="modal__close"
                    @click="$emit('closeModal')"
                >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.57992 16.3866L0.613281 15.42L7.53332 8.49995L0.613281 1.57992L1.57992 0.613281L8.49995 7.53332L15.42 0.613281L16.3866 1.57992L9.46659 8.49995L16.3866 15.42L15.42 16.3866L8.49995 9.46659L1.57992 16.3866Z" fill="black"></path>
					</svg>
                </button-element>
                <h2 class="modal__form--title">Додати нового користувача</h2>
                <div class="modal__form-element">
                    <input-group
                        name="name"
                        :placeholder="'Имя'"
                        v-model:value="v.nameField.$model"
                        :error="v.nameField.$errors"
                    ></input-group>
                </div>
                <div class="modal__form-element">
                    <input-group
                        name="email"
                        :placeholder="'Email'"
                        v-model:value="v.emailField.$model"
                        :error="v.emailField.$errors"
                    ></input-group>
                </div>
                <div class="modal__form-element">
                    <button-element @click="handleCreateUser">
                        Створити користувача
                    </button-element>
                </div>
            </form>
        </div>

</template>

<style scoped lang="scss">
    @import "@/style.scss";
    .modal {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        background: #312d2b;
        // background-repeat: no-repeat;
        // background-size: cover;
        background-position: center;

        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 5;

        &__form {
            width: 100%;
            max-width: 550px;
            padding: 30px 50px;

            background: $bg-white;
            border-radius: 10px;

            text-align: center;

            position: relative;
            z-index: 1;
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 2;

            transition: all .2s linear;

            &:hover {
                transition: all .2s linear;
                transform: scale(1.1);
            }
        }



        &__form--title {
            margin-bottom: 25px;
            font-size: 25px;
            text-align: center;
        }
    }

    @media (max-width: 768px) {
        .modal{
            &__form {
                max-width: 350px;
                padding: 10px 15px;


                & .form-input {
                    margin-bottom: 40px;
                }
            }
        }
    }
</style>