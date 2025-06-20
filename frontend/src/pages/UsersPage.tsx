import React, { useEffect, useState } from "react";
import { User } from "../types/models";
import { getAllUsers } from "../api/usersApi";
import UserList from "../components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then(setUsers).catch((err) => console.error("Error loading users:", err));
  }, []);

  return (
    <div className="container mt-5">
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;
