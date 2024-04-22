import instance from "./index.api.ts";
import { TTable } from "../interfaces/Table";

export const getTables = async () => {
  try {
    const { data } = await instance.get(`/table`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTableById = async (id: string) => {
  try {
    const { data } = await instance.get(`/table/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const register = async (user: TTable) => {
  try {
    const { data } = await instance.post(`/user`, user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
