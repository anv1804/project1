import instance from "./index.api.ts";
import { TTable } from "../interfaces/Table.ts";

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
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTableByName = async (name : string) => {
  try {
    const { data } = await instance.get(`/table/name/${name}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const updateTable = async (id: any, table: any) => {
  try {
    const { data } = await instance.put(`/table/${id}`, table);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTable = async (table: TTable) => {
  try {
    const { data } = await instance.post(`/table`, table);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
