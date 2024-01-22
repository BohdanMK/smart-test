<script setup>
    import { ref, computed } from 'vue';
    import useVueladate from '@vuelidate/core';
    import { helpers, minLength, email, required } from '@vuelidate/validators';



    const rules = computed(() => ({
        nameField: {
            required: helpers.withMessage('Це поле обов\'язкове', required),
            minLength: helpers.withMessage('Мінімальна довжина 3 символи', minLength(3))
        },
        soNameField: {
            required: helpers.withMessage('Це поле обов\'язкове', required),
            minLength: helpers.withMessage('Мінімальна довжина 3 символи', minLength(3))
        },
        emailField: {
            required: helpers.withMessage('Це поле обов\'язкове', required),
            email: helpers.withMessage('Введіть коректний email', email)
        },
        addressField: {
            required: helpers.withMessage('Це поле обов\'язкове', required),
            minLength: helpers.withMessage('Мінімальна довжина 5 символи', minLength(3))
        },
        telField: {
            required: helpers.withMessage('Введіть коректний номер телефону', required),
            customValidation: helpers.withMessage('Введіть коректний номер телефону', value => {

                const phoneRegex = /^(\+?(\d{1,4}))?[-. ]?(\(?(\d{1,})\)?)?[-. ]?(\d{1,})[-. ]?(\d{1,})[-. ]?(\d{1,})$/;
                return phoneRegex.test(value);
            })
        },
    }));

    const emits = defineEmits(['remove', 'editUser']);

    const modalIsOpen = ref(false);

    const canEdit = ref(false);



    const props = defineProps({
        name: {
            type: String,
            required: false
        },
        soName: {
            type: String,
            required: false
        },
        id: {
            type: [Number, String],
            required: false
        },
        image: {
            type: String,
            required: false
        },
        emailValue: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        tel: {
            type: String,
            required: false
        }

    });
    const idUser = ref(props.id || '');
    const nameField = ref(props.name || '');
    const soNameField = ref(props.soName || '');
    const emailField = ref(props.emailValue || '');
    const telField = ref(props.tel || '');
    const addressField = ref(props.address || '');
    const avatar = ref(props.image || '');

    const handleRemove = () => {
        emits('remove', props.id);
    };

    const openModal = () => {
        modalIsOpen.value = true;
    };

    const closeModalButton = () => {
        modalIsOpen.value = false;
    };

    const closeModal = (event) => {

        const target = event.target;
        if (target.classList.contains('list__item-modal-wrap')) {
        // Закрити модальне вікно тут
            modalIsOpen.value = false;
        }
    };

    const startEdit = () => {
        canEdit.value = true;
    }

    const userData = ref({
        id:idUser,
        name: nameField,
        soName: soNameField,
        email: emailField,
        tel: telField,
        address: addressField,
        avatar: avatar
    });

    const handleEditUser = () => {
        // console.log(userData);
        v.value.$touch();
        if (v.value.$pending) return;  // Чекаємо на валідацію
        if (v.value.$error) return;    // Якщо є помилки, не відправляємо дані
        canEdit.value = false;
        emits('editUser', userData);
        modalIsOpen.value = false;
    };

    const v = useVueladate(rules, {nameField, emailField, soNameField, addressField, telField});



</script>



<template>

        <li>
            <div class="list__item">

                <img
                    v-if="image"
                    class="list__item-img"
                    :src="image" alt="avatar"
                >
                <img v-else
                    class="list__item-img"
                    src="@/assets/image/avatar.png"
                    alt=""
                >
                <div class="list__item-info">
                    <span class="list__item-info-id">Користувач #{{ id }}</span>
                    <button-element
                    @click="openModal"
                    class="list__item-name"
                    >
                        {{ name }}
                    </button-element>
                    <a
                    class="list__item-email"
                    :href="`mailto:${emailValue}`"
                    >{{ emailValue }}</a>
                </div>
                <button-element
                class="button button--red"
                @click="handleRemove"
                >Видалити</button-element>
            </div>
            <Teleport to="#modal">
                <div class="list__item-modal-wrap" v-if="modalIsOpen" @click="closeModal">
                    <div class="list__item-modal">
                        <button-element
                            class="list__item-modal-close"
                            @click="closeModalButton"
                        >
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.57992 16.3866L0.613281 15.42L7.53332 8.49995L0.613281 1.57992L1.57992 0.613281L8.49995 7.53332L15.42 0.613281L16.3866 1.57992L9.46659 8.49995L16.3866 15.42L15.42 16.3866L8.49995 9.46659L1.57992 16.3866Z" fill="black"></path>
                            </svg>
                        </button-element>
                        <div class="list__item-modal-head">
                            <span class="list__item-modal-id">Користувач #{{ id }}</span>
                            <img
                            v-if="image"
                            class="list__item-img"
                            :src="image" alt="avatar"
                            >
                            <img v-else
                                class="list__item-img"
                                src="@/assets/image/avatar.png"
                                alt=""
                            >
                        </div>
                        <form class="list__item-modal-body">
                            <div>
                                <input-element
                                class="list__item-modal-input"
                                v-model:value="v.nameField.$model"
                                :error="v.nameField.$errors"
                                :name="name"
                                :type="'text'"
                                :readonly="!canEdit"

                                />
                            </div>
                            <div>
                                <input-element
                                class="list__item-modal-input"
                                v-model:value="v.soNameField.$model"
                                :error="v.soNameField.$errors"
                                :type="'text'"
                                :name="soName"
                                :readonly="!canEdit"
                                />
                            </div>
                            <div>
                                <input-element
                                class="list__item-modal-input"
                                v-model:value="v.emailField.$model"
                                :error="v.emailField.$errors"
                                :name="'email'"
                                :type="'text'"
                                :readonly="!canEdit"

                                />
                            </div>
                            <div>
                                <input-element
                                class="list__item-modal-input"
                                v-model:value="v.telField.$model"
                                :error="v.telField.$errors"
                                :name="'tel'"
                                :type="'text'"
                                :placeholder="'Номер телефона'"
                                :readonly="!canEdit"
                                />
                            </div>
                            <div>
                                <input-element
                                class="list__item-modal-input"
                                v-model:value="v.addressField.$model"
                                :error="v.addressField.$errors"
                                :name="'address'"
                                :type="'text'"
                                :placeholder="'Адрес проживания'"
                                :readonly="!canEdit"
                                />
                            </div>
                            <div >
                                <button-element v-if="!canEdit"
                                    class="button button--modal"
                                    @click="startEdit"
                                >Редагувати</button-element>
                                <button-element v-else class="button button--green button--modal"
                                @click="handleEditUser"
                                >Зберегти</button-element>
                            </div>
                        </form>
                    </div>
                </div>
            </Teleport>
        </li>

</template>


<style scoped lang="scss">
    @import "@/style.scss";
    .list__item {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        border: 1px solid #d1d1d1;
        border-radius: 7px;

        &-info {
            width: 40%;
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        }

        &-name {
            font-size: 25px;
            text-align: left;

            transition: all .2s linear;

            &:hover {
                transform: scale(1.02);
                transition: all .2s linear;
            }
        }

        &-img {
            width: 15%;
            border-radius: 50%;
        }

        &-info-id {
            font-weight: 600;
            color: #312d2b;
        }

        &-email {
            font-weight: 700;
            color: #595656;
        }
    }

    .list__item-modal-wrap {
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
    }

    .list__item-modal {
        width: 100%;
        max-width: 550px;
        padding: 30px 50px;

        background: $bg-white;
        border-radius: 10px;

        position: relative;
        z-index: 1;

        &-head {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 25px;
            margin-bottom: 15px;

            text-align: center;

            & img {
                width: 200px;
                height: 200px;

                border-radius: 50%;
            }
        }

        &-body {
            margin: 0 auto;
        }

        &-id {
            font-size: 30px;
            font-weight: 600;
            color: #858993;
        }

        &-close {
            position: absolute;
            right: 20px;
            top: 20px;
            z-index: 3;

            transition: all .2s linear;

            &:hover {
                transform: scale(1.2);
                transition: all .2s linear;
            }
        }

        &-input {
            display: block;
            margin: 0 auto;
            text-align: center;
        }
    }


    .button--modal {
            display: block;
            margin: 15px auto 0;
    }

    @media (max-width: 768px)  {
        .list__item {
            display: flex;
            flex-direction: column;
            align-items: center;

            &-info {
                margin-bottom: 10px;
                align-items: center;
            }

            &-img {
                width: 150px;
            }
        }


    }

    .list__item-modal {
        max-width: 450px;

        &-head img {
            width: 150px;
            height: 150px;
        }
    }


    @media (max-width: 450px) {
        .list__item-modal {
        max-width: 350px;

        &-head img {
            width: 150px;
            height: 150px;
        }
    }
    }


</style>