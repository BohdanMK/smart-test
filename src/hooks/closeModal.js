import { modalIsOpen } from '@/state/constantState.js'

const closeModal = () => {

    modalIsOpen.value = false;
  }


  export default closeModal;