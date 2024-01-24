<script setup>

</script>


<template>
    <div class="mobile-menu">
        <ul class="mobile__nav d-flex">
            <li class="mobile__nav-item">
                <button class="mobile__nav-button button__person">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0842 14.5015C23.4925 12.9602 24.3571 10.9305 24.3571 8.70175C24.3571 3.90382 20.3836 0 15.5 0C10.6164 0 6.64286 3.90382 6.64286 8.70175C6.64286 13.4997 10.6164 17.4035 15.5 17.4035C17.2216 17.4035 18.8248 16.9108 20.1865 16.0721C25.0026 17.8549 28.3185 22.1851 28.7403 27.193H2.26079C2.54754 23.8221 4.15732 20.6786 6.77571 18.4358C7.23739 18.0409 7.285 17.3546 6.88311 16.901C6.48232 16.4485 5.78261 16.4006 5.32093 16.7955C1.93861 19.691 0 23.8765 0 28.2807C0 28.8822 0.496 29.3684 1.10714 29.3684H29.8929C30.5051 29.3684 31 28.8822 31 28.2807C31 22.3135 27.4793 16.9847 22.0842 14.5015ZM8.85714 8.70175C8.85714 5.10249 11.8365 2.17544 15.5 2.17544C19.1635 2.17544 22.1429 5.10249 22.1429 8.70175C22.1429 12.301 19.1635 15.2281 15.5 15.2281C11.8365 15.2281 8.85714 12.301 8.85714 8.70175Z" fill="#474747"></path>
                    </svg>
                    <span class="mobile__nav-name">Профіль</span>
                </button>
            </li>
            <li class="mobile__nav-item">
                <button class="mobile__nav-button mobile__nav-button--wish">
                    <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2104 29L14.6459 27.5362C11.9554 24.9745 9.73096 22.7648 7.97274 20.9069C6.21453 19.049 4.81393 17.3881 3.77095 15.9243C2.72797 14.4604 1.99661 13.1351 1.57687 11.9482C1.15713 10.7613 0.947266 9.56116 0.947266 8.34789C0.947266 5.96999 1.71678 3.98421 3.25582 2.39054C4.79485 0.796846 6.69639 0 8.96042 0C10.4104 0 11.7523 0.356071 12.9861 1.06821C14.2199 1.78035 15.2946 2.809 16.2104 4.15416C17.2788 2.72988 18.4109 1.68145 19.6065 1.00887C20.8021 0.336289 22.0867 0 23.4604 0C25.7245 0 27.626 0.796846 29.165 2.39054C30.7041 3.98421 31.4736 5.96999 31.4736 8.34789C31.4736 9.56116 31.2637 10.7613 30.844 11.9482C30.4242 13.1351 29.6929 14.4604 28.6499 15.9243C27.6069 17.3881 26.2063 19.049 24.4481 20.9069C22.6899 22.7648 20.4655 24.9745 17.7749 27.5362L16.2104 29ZM16.2104 25.8745C18.7857 23.4217 20.905 21.3183 22.5682 19.5642C24.2314 17.8102 25.5527 16.2738 26.5321 14.955C27.5115 13.6362 28.1984 12.4607 28.5927 11.4285C28.987 10.3963 29.1841 9.3713 29.1841 8.35362C29.1841 6.60901 28.6499 5.17622 27.5815 4.05525C26.5131 2.93429 25.1422 2.37381 23.469 2.37381C22.1583 2.37381 20.9452 2.78922 19.8297 3.62005C18.7142 4.45089 17.8131 5.61801 17.1262 7.12142H15.2565C14.5951 5.64438 13.7066 4.48386 12.5911 3.63984C11.4756 2.79582 10.2625 2.37381 8.95184 2.37381C7.27861 2.37381 5.90779 2.93429 4.83937 4.05525C3.77095 5.17622 3.23674 6.61126 3.23674 8.36039C3.23674 9.3807 3.43389 10.4118 3.82819 11.4536C4.22248 12.4955 4.90933 13.6824 5.88871 15.0143C6.8681 16.3463 8.19727 17.8827 9.87621 19.6235C11.5552 21.3643 13.6666 23.4479 16.2104 25.8745Z" fill="#474747"></path>
                    </svg>
                    <span class="mobile__nav-name">Обране</span>
                </button>
            </li>
            <li class="mobile__nav-item">
                <button class="mobile__nav-button mobile__nav-button--cart">
                    <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.03639 7.51609L22.435 7.53716C23.127 7.53793 23.6144 8.47871 23.6841 9.64359L24.6556 25.8936C24.7253 27.0585 24.0985 28 23.4065 28H2.25271C1.5607 28 0.947089 27.0592 1.00362 25.8936L1.78729 9.74156C1.84386 8.57597 2.34438 7.51535 3.03639 7.51609Z" stroke="#474747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.9366 7.30687C18.9366 6.19786 18.6535 5.10845 18.1157 4.14852C17.578 3.18858 16.8046 2.39207 15.8737 1.8393C14.9428 1.28653 13.8871 0.997038 12.8133 1.00004C11.7395 1.00304 10.6854 1.29842 9.75739 1.85639C8.82937 2.41437 8.06023 3.21521 7.52753 4.17815C6.99483 5.14109 6.7174 6.23207 6.72323 7.34106" stroke="#474747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <span class="mobile__nav-name">Кошик</span>
                </button>
            </li>
            <li class="mobile__nav-item">
                <button class="mobile__nav-button mobile__nav-button--catalog">
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="11.1249" height="10.6874" stroke="#474747" stroke-width="2"></rect>
                        <rect x="17.875" y="1" width="11.1249" height="10.6874" stroke="#474747" stroke-width="2"></rect>
                        <rect x="1" y="17.3125" width="11.1249" height="10.6874" stroke="#474747" stroke-width="2"></rect>
                        <rect x="17.875" y="17.3125" width="11.1249" height="10.6874" stroke="#474747" stroke-width="2"></rect>
                    </svg>
                    <span class="mobile__nav-name">Каталог</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .mobile-menu {
        width: 100%;
        display: block;

        background: var(--white);
        position: -webkit-fixed;
        position: fixed;
        bottom: 45px;
        left: 0;
        z-index: 4;
    }

    .mobile__nav {
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;

        background: #E5F6F8;
    }

.mobile__nav-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2px;
}

.mobile__nav-name {
    font-family: var(--main);
    font-size: 11px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: black;

    transition: all .1s linear;
}


</style>