<script setup>
    import UserListItem from '@/components/UserListItem.vue';

    const emits = defineEmits(['remove', 'editUser']);

    const props = defineProps({
        userList: {
            type: Array,
            default: () => []
        }
    });

    const handleRemoveUser = (userId) => {
        console.log('Handling remove event in UserList.vue with id:', userId);
        emits('remove', userId); // виправлено відправку події вгору
    };

    const handleEditUser = (userData) => {
        console.log(userData);
        emits('editUser', userData);
    };


</script>


<template>
    <ul class="list">
        <TransitionGroup name="slide-fade" >
            <user-list-item
            v-for="user in userList"
            :key="user.id"
            :image="user.avatar"
            :name="user.first_name"
            :soName="user.last_name"
            :id="user.id"
            :emailValue="user.email"
            :address="user.address"
            :tel="user.tel"
            @editUser="handleEditUser"
            @remove="handleRemoveUser"

            ></user-list-item>
        </TransitionGroup>
    </ul>
</template>


<style lang="scss">

    .list {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

</style>