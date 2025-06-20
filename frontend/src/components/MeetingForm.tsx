import React, { useState, useEffect } from 'react';
import { createMeeting } from '../api/meetingsApi';
import { getAllUsers } from '../api/usersApi';
import { Meeting, User } from '../types/models';

const MeetingForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [scheduledAt, setScheduledAt] = useState('');
  const [participantIds, setParticipantIds] = useState<number[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then(setUsers).catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMeeting: Omit<Meeting, 'id'> = {
      title,
      scheduledAt,
      participantIds,
    };
    try {
      await createMeeting(newMeeting);
      setTitle('');
      setScheduledAt('');
      setParticipantIds([]);
      alert('Meeting created successfully');
    } catch (error) {
      console.error('Failed to create meeting:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="scheduledAt" className="form-label">Scheduled At:</label>
        <input
          type="datetime-local"
          className="form-control"
          id="scheduledAt"
          value={scheduledAt}
          onChange={(e) => setScheduledAt(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="participants" className="form-label">Participants:</label>
        <select
          multiple
          className="form-select"
          id="participants"
          value={participantIds.map(String)}
          onChange={(e) =>
            setParticipantIds(Array.from(e.target.selectedOptions, opt => Number(opt.value)))
          }
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-100">Create</button>
    </form>
  );
};

export default MeetingForm;
