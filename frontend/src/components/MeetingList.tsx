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
    <div className="mt-5">
      <h2 className="mb-4">All Meetings</h2>
      {meetings.length === 0 ? (
        <p className="text-muted">No meetings found.</p>
      ) : (
        <div className="row">
          {meetings.map((meeting) => (
            <div className="col-md-6 col-lg-4 mb-4" key={meeting.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{meeting.title}</h5>
                  <p className="card-text">
                    <strong>Date:</strong>{' '}
                    {new Date(meeting.scheduledAt).toLocaleString()}
                  </p>
                  <p className="card-text">
                    <strong>Participants:</strong> {meeting.participantIds.length}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeetingList;
