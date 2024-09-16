import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IslandReview from './pages/IslandReview';
import LoginPage from './pages/LoginPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IslandReview />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;