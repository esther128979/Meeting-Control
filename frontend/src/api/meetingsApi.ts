// src/api/meetings.ts
import axios from "axios";
import { Meeting } from "../types/models";

const BASE_URL = "http://localhost:8080/api/meetings";

export const getAllMeetings = async (): Promise<Meeting[]> => {
  const res = await axios.get<Meeting[]>(BASE_URL);
  return res.data;
};

export const createMeeting = async (
  meeting: Omit<Meeting, "id">
): Promise<Meeting> => {
  const res = await axios.post<Meeting>(BASE_URL, meeting, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const updateMeeting = async (
  id: number,
  meeting: Omit<Meeting, "id">
): Promise<Meeting> => {
  const res = await axios.put<Meeting>(`${BASE_URL}/${id}`, meeting, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};
