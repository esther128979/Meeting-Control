// src/pages/MeetingsPage.tsx
import React from 'react';
import MeetingList from '../components/MeetingList';
import MeetingForm from '../components/MeetingForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const MeetingsPage: React.FC = () => {
  return (
    <div className="meetings-page">
      <h1>Meetings</h1>
      <MeetingForm />
      <MeetingList />
    </div>
  );
};

export default MeetingsPage;
