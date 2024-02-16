import modalIsOpen from '@/state/modalState.js'

const closeModal = () => {

    modalIsOpen.value = false;
  }


  export default closeModal;