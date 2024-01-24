<script setup>

</script>

<template>

    <div class="container">
        <slot></slot>
    </div>

</template>


<style scoped lang="scss">
@import "@/style.scss";

    .container {
        width: 100%;
        min-height: 100svh;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 30px;

        overflow: auto;

        background: $content-color;

        box-shadow: 0px 0px 13px 7px rgba(0,0,0,0.21);
        -webkit-box-shadow: 0px 0px 13px 7px rgba(0,0,0,0.21);
        -moz-box-shadow: 0px 0px 13px 7px rgba(0,0,0,0.21);

    }
</style>