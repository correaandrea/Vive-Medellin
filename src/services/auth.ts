import axiosInstance from '../axios/axiosInstance'
import { UserLogin, ResponseLogin, UserRegister } from '../interfaces/user'

export const Login = async (login: UserLogin): Promise<ResponseLogin> => {
    const { data } = await axiosInstance.post<ResponseLogin>('/login', login);
    return data;
};

export const Register = async (registerData: UserRegister): Promise<{ message: string }> => {
  const { data } = await axiosInstance.post('/register', registerData);
  return data;
};
