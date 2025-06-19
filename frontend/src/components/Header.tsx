// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={{ padding: "1rem", background: "#eee", marginBottom: "1rem" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/users" style={{ marginRight: "1rem" }}>Users</Link>
        <Link to="/meetings">Meetings</Link>
      </nav>
    </header>
  );
};

export default Header;
