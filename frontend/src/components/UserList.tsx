// src/components/UserList.tsx
import React from "react";
import { User } from "../types/models";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> (Meetings: {user.meetingIds.length})
        </li>
      ))}
    </ul>
  );
};


export default UserList;
