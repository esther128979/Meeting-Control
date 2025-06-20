import React from 'react';
import MeetingList from '../components/MeetingList';
import MeetingForm from '../components/MeetingForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const MeetingsPage: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1 className="display-4">Meetings</h1>
      </div>

      <div className="row">
        <div className="col-md-5">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title mb-3">Create New Meeting</h4>
              <MeetingForm />
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-3">All Meetings</h4>
              <MeetingList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingsPage;
