<script setup>

  import { ref, onMounted, watch, computed } from 'vue';
  import axios from 'axios';
 
  import { totalPages, userList , modalIsOpen } from "@/state/constantState";

  import closeModal from '@/hooks/closeModal';
  import { BASE_URL } from '@/constants/api';

  import UserList from '@/components/UserList.vue';
  import InstructionModal from '@/components/InstructionModal.vue';

  import getAllUsers from '@/hooks/getUsers.js';
  import handleEditUser from '@/hooks/editUser.js';
  import handleRemoveUser from '@/hooks/handleRemoveUser.js';
  import handleAddUser from '@/hooks/handleAddUser.js';


  // work with modal block

  const modalInstruction = ref(false);

  const openModal = () => {
      modalIsOpen.value = true;
  }



  // instruction
  const toggleInsructionModal = () => {
    modalInstruction.value = !modalInstruction.value;
  };


  // sort user
  const selectedSort = ref('');

  // search
  const searchSort = ref('');

  const userListQuery = computed(() => {
  const searchValue = searchSort.value.trim().toLowerCase();


    return userList.value.filter(user => {
      const firstNameMatch = user.first_name.toLowerCase().includes(searchValue);
      const emailMatch = user.email.toLowerCase().includes(searchValue);

      return firstNameMatch || emailMatch;
    });
  });

  const sortOptions = ref([
    {value: 'email', name: 'По електронній пошті'},
    {value: 'first_name', name: 'По імені'},
    {value: 'last_name', name: 'По прізвищу'}
  ]);

  // user list




  // pagination

  const currentPage = ref(1);

  const handlePageClick = (pageNumber) => {
    getAllUsers(pageNumber);
    currentPage.value = pageNumber;
  };

  // remove user


  onMounted(() => {
    getAllUsers();
  });

  watch(selectedSort, (newValue, oldValue) => {
    // console.log('Змінилося selectedSort:', newValue);

    userList.value.sort((user1, user2) => {
      const prop1 = user1[selectedSort.value];
      const prop2 = user2[selectedSort.value];

      // Перетворюємо числові значення в рядки перед порівнянням
      const value1 = typeof prop1 === 'number' ? prop1.toString() : prop1;
      const value2 = typeof prop2 === 'number' ? prop2.toString() : prop2;

      return value1.localeCompare(value2);
    });
  });


</script>

<template>
  <container-block>
    <div class="block__header block__header--flex">
      <button-element @click="toggleInsructionModal">
        Read Me
      </button-element>

      <button-element
        @click="openModal"
        class="button button--green"
      >
        Create user
      </button-element>
    </div>
    <div class="block__body">
      <div class="block__body-row block__body-row--flex">
        <input-group
          placeholder="Пошук"
          type="text"
          name="search"
          v-model:value="searchSort"
        ></input-group>
        <select-group
          v-model="selectedSort"
          :options="sortOptions"
        ></select-group>
      </div>
      <div class="block__body-row block__body-row--list" v-if="userList">
        <user-list
        v-if="userListQuery.length > 0"
        :userList="userListQuery"
        @editUser="handleEditUser"
        @remove="handleRemoveUser"
        ></user-list>
        <div v-else>Результатів пошуку не має...</div>
      </div>
      <div v-else>Йде завантаження...</div>
      <div class="block__body-row block__body-row--center" v-if="userList">
        <div v-if="userListQuery.length > 0"
            class="pagination__list"
          >
          <div v-for="pageNumber in totalPages" :key="pageNumber">
            <button-element
              @click="handlePageClick(pageNumber)"
              :class="{ 'button active': pageNumber === currentPage }"
            >{{ pageNumber }}</button-element>
          </div>
        </div>
      </div>
    </div>
    <menu-bar></menu-bar>
    <Teleport to="#modal">
      <modal-form
        v-if="modalIsOpen"
        @addUser="handleAddUser"
        @closeModal="closeModal"
      />
    </Teleport>
    <Teleport to="#modal">
      <InstructionModal
      @closeModal="toggleInsructionModal"
      v-if="modalInstruction"/>
    </Teleport>

  </container-block>


</template>

<style lang="scss" scoped>

.block__header{

  margin-bottom: 50px;


  &.block__header--flex {
    display: flex;
    justify-content: space-between;
  }
}

.block__body-row {
  &.block__body-row--flex {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &.block__body-row--center {
    margin-top: 25px;
    text-align: center;
  }
}


.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.pagination__list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

@media (max-width: 768px) {
  .block__body-row.block__body-row--flex {
    margin-bottom: 30px;
    flex-wrap: wrap;

    & .form-input {
      margin-bottom: 0;
    }
  }

}
</style>
