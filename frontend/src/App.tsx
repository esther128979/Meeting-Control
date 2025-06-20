import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import MeetingsPage from "./pages/MeetingsPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
