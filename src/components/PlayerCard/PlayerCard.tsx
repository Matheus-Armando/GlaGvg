import { Hero } from '@/interface/hero';
import React from 'react';

interface Player {
    id: number;
    name: string;
    role: string;
    heroes: number[];
  }
  
  interface PlayerCardProps {
    player: Player;
    heroes: Hero[];
  }
  
  const PlayerCard: React.FC<PlayerCardProps> = ({ player, heroes }) => {
    const playerHeroes = Array.isArray(heroes) ? heroes.filter(hero => player.heroes.includes(hero.id)) : [];
  
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{player.name}</h2>
        <p className="text-gray-700 dark:text-gray-300">{player.role}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Heroes</h3>
          <ul className="list-disc list-inside">
            {playerHeroes.map(hero => (
              <li key={hero.id} className="text-gray-700 dark:text-gray-300">
                {hero.shortname} - {hero.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default PlayerCard;