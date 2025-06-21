// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage: React.FC = () => {
  return (
    <div className="container text-center mt-5">
      <div className="p-4 bg-light rounded shadow">
        <h1 className="mb-4">Welcome to Your Meeting Manager</h1>
        <p className="lead mb-4">
          Manage your meetings and participants efficiently and easily.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/meetings" className="btn btn-primary btn-lg">
            Create New Meeting
          </Link>
          <Link to="/users" className="btn btn-outline-secondary btn-lg">
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
