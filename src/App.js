import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SingleInvitePage from './pages/SingleInvitePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/single-invite" element={<SingleInvitePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
