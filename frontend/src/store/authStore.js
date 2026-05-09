import axios from "axios";

const URL = "http://localhost:5000/api/auth";

export const register = async (data) => {
  try {
    const response = await axios.post(`${URL}/register`, data);

    console.log(response.data);

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

