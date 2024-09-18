import React from 'react';
import { useNavigate } from 'react-router-dom';
import IslandCard from '../IslandsCards/IslandsCards';
import Layout from '../Layout/Layout';

const IslandsPage: React.FC = () => {
  const navigate = useNavigate();

  const islands = [
    { id: 1, title: 'Foosha Island', image: 'img/islands/foosha.png', recImage: 'img/islandsRec/fooshaRec.png' },
    { id: 2, title: 'Sheels Town', image: 'img/islands/sheels.png', recImage: 'img/islandsRec/sheelsRec.png'},
    { id: 3, title: 'Orange Town', image: 'img/islands/orange.png', recImage: 'img/islandsRec/orangeRec.png' },
    { id: 4, title: 'Cocoyashi Village', image: 'img/islands/cocoyashi.png', recImage: 'img/islandsRec/cocoyashiRec.png' },
    { id: 5, title: 'Loguetown', image: 'img/islands/loguetown.png', recImage: 'img/islandsRec/loguetownRec.png' },
    { id: 6, title: 'Whisky Peak', image: 'img/islands/whiskyPeak.png', recImage: 'img/islandsRec/whiskyRec.png' },
    { id: 7, title: 'Drum Island', image: 'img/islands/drum.png', recImage: 'img/islandsRec/drumRec.png' },
  ];

  const handleCardClick = (id: number) => {
    navigate(`/island/${id}`);
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {islands.map((island) => (
          <IslandCard
            key={island.id}
            id={island.id}
            title={island.title}
            image={island.image}
            recImage={island.recImage}
            onClick={() => handleCardClick(island.id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default IslandsPage;