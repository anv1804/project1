import { TUser } from "../interfaces/User.ts";
import instance from "./index.api.ts";

export const getUsers = async () => {
  try {
    const { data } = await instance.get(`/user`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const { data } = await instance.get(`/user/${id}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateUsers = async (id: any, user: any) => {
  try {
    const { data } = await instance.get(`/user/${id}`, user);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (user: TUser) => {
  try {
    const { data } = await instance.post(`/user`, user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
