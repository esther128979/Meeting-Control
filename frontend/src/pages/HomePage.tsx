// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Meetings Manager</h1>
      <nav>
        <ul>
          <li><Link to="/users">View Users</Link></li>
          <li><Link to="/meetings">View Meetings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
