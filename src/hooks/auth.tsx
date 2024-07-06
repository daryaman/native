import axios from "../libs/axios";
import { getToken, setToken } from "./token";


export async function login(params) {
  const { data } = await axios.post('/login', params);
  await setToken(data.token);
}

export async function loadUser(params) {
  const token = await getToken();
  
  const { data : user} = await axios.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return user;
}


