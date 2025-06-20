import React from "react";
import { User } from "../types/models";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div className="mt-4">
      <h2 className="mb-4">Users</h2>
      {users.length === 0 ? (
        <p className="text-muted">No users available.</p>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div className="col-md-6 col-lg-4 mb-3" key={user.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    <strong>Meetings:</strong> {user.meetingIds.length}
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

export default UserList;
