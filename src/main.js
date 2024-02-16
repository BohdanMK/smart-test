import { createApp } from 'vue'

import './style.scss';
import App from './App.vue'

// add global component
import ContainerBlock from '@/components/ContainerBlock.vue';
import ButtonElement from '@/ui/button/ButtonElement.vue';
import InputGroup from '@/ui/input/InputGroup.vue';
import SelectGroup from '@/ui/select/SelectGroup.vue';
import InputElement from '@/ui/input/InputElement.vue';
import CreateUserModal from '@/ui/modal/CreateUserModal.vue';

import router from './router';

const app = createApp(App);


app.component('container-block', ContainerBlock);
app.component('button-element', ButtonElement);
app.component('input-group', InputGroup);
app.component('input-element', InputElement);
app.component('select-group', SelectGroup);
app.component('modal-form', CreateUserModal);

app.use(router).mount('#app')
