import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IslandReview from './pages/IslandReview';
import LoginPage from './pages/LoginPage';
import IslandsPage from './pages/IslandPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IslandsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/island/:id" element={<IslandReview />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;