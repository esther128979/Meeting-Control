// src/types/models.ts

export interface User {
  id: number;
  name: string;
   meetingIds: number[];
}

export interface Meeting {
  id: number;
  title: string;
  scheduledAt: string; // תאריך בפורמט ISO
  participantIds: number[];
}
