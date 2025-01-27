import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StarshipList } from './components/StarshipList';
import { StarshipDetail } from './components/StarshipDetail';
import { Home } from './page/Home';
import { Login } from './page/Login';
import { SignUp } from './page/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
