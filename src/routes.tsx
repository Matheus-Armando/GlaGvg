import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IslandReview from './pages/IslandReview';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IslandReview />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;