import axios from "axios";
import { userList } from "@/state/constantState";
import { BASE_URL } from '@/constants/api';

const handleEditUser = async (userData) => {
  try {
    const id = userData.value.id;
    const name = userData.value.name;
    const email = userData.value.email;
    const soName = userData.value.soName;
    const tel = userData.value.tel;
    const address = userData.value.address;
    const avatar = userData.value.avatar;

    const response = await axios.put(`${BASE_URL}/${id}`, {
        avatar: avatar,
        first_name: name,
        email: email,
        last_name: soName,
        tel: tel,
        address: address
    });

    console.log('Користувач успішно обновлений:', response.data);

    const updatedUser = {
        id: userData.value.id,
        first_name: response.data.first_name,
        email: response.data.email,
        last_name: response.data.last_name,
        avatar: response.data.avatar,
        tel: response.data.tel,
        address: response.data.address
    };

    // Оновлення користувача в userList
    const index = userList.value.findIndex(user => user.id === id);
    if (index !== -1) {
        userList.value.splice(index, 1, updatedUser);
    }

  } catch (error) {
    console.error('Помилка при створенні користувача:', error);
  }
};

export default handleEditUser;
