import axios from "axios";
import { userList } from "@/state/constantState";
import { BASE_URL } from '@/constants/api';


const deleteUserById = (userId) => {
    userList.value = userList.value.filter(user => user.id !== userId);
  };

const handleRemoveUser = async (userId) => {

    try {
      const response = await axios.delete(`${BASE_URL}/${userId}`);
      console.log(response);
      deleteUserById(userId);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  export default handleRemoveUser;