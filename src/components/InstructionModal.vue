<script setup>



</script>


<template>
    <div class="modal"
        @click="$emit('closeModal')"
    >
        <div class="modal__block"
            @click.stop
        >
            <button-element class="modal__block-close"
                @click="$emit('closeModal')"
            >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.57992 16.3866L0.613281 15.42L7.53332 8.49995L0.613281 1.57992L1.57992 0.613281L8.49995 7.53332L15.42 0.613281L16.3866 1.57992L9.46659 8.49995L16.3866 15.42L15.42 16.3866L8.49995 9.46659L1.57992 16.3866Z" fill="black"></path>
				</svg> </button-element>
            <h4 class="modal__title">Що реалізовано на даний момент:</h4>
            <ul class="modal__block-list">
            <li>
                1. GET, POST, PUT, DELETE запити з відповідним функціоналом по ТЗ(юзаю Axios для запитів).
            </li>
            <li>
                2. Стилізація на Scss
            </li>
            <li>
                3. Валідація на vuelidate.
            </li>
            <li>
                4. Пагінація.
            </li>
            <li>
                5. Фільтрація та сортування.
            </li>
            <li>
                6. Адаптив під мобілки.
            </li>
            <li>
                Хочу зробити: рефакторинг існуючого коду...
            </li>
            <li>
                <a  class="modal__block-list-link"
                    href="https://docs.google.com/document/d/17FRWaq_unRVi89wNUIwIOUCY8yystCaLhl-7joW_y4U/edit?usp=sharing"> Посилання на Т3 </a>
            </li>
            <li>
                <a
                    class="modal__block-list-link"
                    href="https://reqres.in/"
                >API:https://reqres.in/</a>

            </li>
        </ul>
        </div>

    </div>
</template>

<style scoped lang="scss">
     @import "@/style.scss";
     @import "@/style.scss";
    .modal {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #312d2b;
        background-position: center;
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 5;

        &__block {
            width: 100%;
            max-width: 650px;
            padding: 30px 50px;
            background: $bg-white;
            border-radius: 10px;
            text-align: center;
            position: relative;
            z-index: 1;

            &-list {
                padding: 20px 30px;
                text-align: left;

                &-link {

                    max-width: 300px;
                    word-break: break-all;
                    display: block;

                    color: black;
                    font-family: inherit;
                    font-weight: 600;
                    text-decoration: underline;
                }


            }

            &-close {
                position: absolute;
                top: 20px;
                right: 20px;
                z-index: 2;

                transition: all .2s linear;

                &:hover {
                    transform: scale(1.1);
                    transition: all .2s linear;
                }
            }
        }
    }

    @media (max-width: 768px) {

        .modal {
            &__title {
                font-weight: 500;
                text-transform: uppercase;
            }


            &__block {
                max-width: 350px;
                padding: 10px 15px;
            }

        }
        }
</style>