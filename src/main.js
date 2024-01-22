import { createApp } from 'vue'
import './style.scss'
import Main from './Main.vue'

// add global component
import ContainerBlock from '@/components/ContainerBlock.vue';
import ButtonElement from '@/ui/button/ButtonElement.vue';
import InputGroup from '@/ui/input/InputGroup.vue';
import SelectGroup from '@/ui/select/SelectGroup.vue';
import InputElement from '@/ui/input/InputElement.vue';
import CreateUserModal from '@/ui/modal/CreateUserModal.vue';

const app = createApp(Main);


app.component('container-block', ContainerBlock);
app.component('button-element', ButtonElement);
app.component('input-group', InputGroup);
app.component('input-element', InputElement);
app.component('select-group', SelectGroup);
app.component('modal-form', CreateUserModal);


app.mount('#app')
