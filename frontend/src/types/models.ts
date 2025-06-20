// src/types/models.ts

export interface User {
  id: number;
  name: string;
   email: string; // הוסיפי שדה ז
   meetingIds: number[];
   
}

export interface Meeting {
  id: number;
  title: string;
  scheduledAt: string; // תאריך בפורמט ISO
  participantIds: number[];
}
