// src/components/MeetingList.tsx
import React, { useEffect, useState } from 'react';
import { getAllMeetings } from '../api/meetingsApi';
import { Meeting } from '../types/models';

const MeetingList: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    getAllMeetings()
      .then(setMeetings)
      .catch((err) => console.error('Failed to fetch meetings:', err));
  }, []);

  return (
    <div>
      <h2>All Meetings</h2>
      {meetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <strong>{meeting.title}</strong> – {new Date(meeting.scheduledAt).toLocaleString()}
              <br />
              Participants: {meeting.participantIds.length}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MeetingList;
