import axios from "axios";
import { userList } from "@/state/constantState";
import closeModal from "./closeModal";



const handleAddUser = async (userData) => {
    try {

        const name = userData.value.name;
        const email = userData.value.email;

        const response = await axios.post('https://reqres.in/api/users', {
            first_name: name,
            email: email
        });

        console.log('Користувач успішно створений:', response.data);

        const newUser = {
            id: response.data.id,
            first_name: response.data.first_name,
            email: response.data.email,
        };

        userList.value.push(newUser);
        closeModal();

    } catch (error) {
        console.error('Помилка при створенні користувача:', error);
    }
  };


  export default handleAddUser;