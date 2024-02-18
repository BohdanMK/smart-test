import axios from "axios";
import { totalPages, userList } from "@/state/constantState";
import { BASE_URL } from '@/constants/api';

const getAllUsers = async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}?page=${page}`);
      totalPages.value = response.data.total_pages;
      userList.value = response.data.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  export default getAllUsers;