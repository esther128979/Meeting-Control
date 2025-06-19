// src/api/users.ts
import axios from "axios";
import { User } from "../types/models";



const BASE_URL = "http://localhost:8080/api/users";

export const getAllUsers = async (): Promise<User[]> => {
  const res = await axios.get<User[]>(BASE_URL);
  return res.data;
};

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const res = await axios.post<User>(BASE_URL, user, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(BASE_URL, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

