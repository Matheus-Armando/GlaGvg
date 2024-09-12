import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import PlayerCard from '../PlayerCard/PlayerCard';
import { Hero } from '@/interface/hero';

export interface Player {
    id: number;
    name: string;
    role: string;
    heroes: number[];
  }
  
  const TeamTabs: React.FC = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const players: Player[] = [
      { id: 1, name: 'Cool Kids', role: 'DPS', heroes: [1, 2] },
      { id: 2, name: 'Hector', role: 'Suporte', heroes: [2, 3] },
      { id: 3, name: 'Storm', role: 'Tanque', heroes: [1, 3] },
      { id: 3, name: 'Pitapigas', role: 'DPS', heroes: [1, 3] },
      { id: 3, name: 'Doug', role: 'DPS', heroes: [1, 3] },
      { id: 3, name: 'Jojji', role: 'Solo Bomb', heroes: [1, 3] },
    ];
  
    useEffect(() => {
      fetch('../../public/heroes.json')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            setHeroes(data);
          } else if (data && Array.isArray(data.heroes)) {
            setHeroes(data.heroes);
          } else {
            console.error('Data is not an array:', data);
          }
        })
        .catch(error => console.error('Error fetching heroes:', error));
    }, []);
  
    return (
      <Tabs defaultValue="players" className="w-full">
        <TabsList className="flex border-b border-gray-200 dark:border-gray-700">
          <TabsTrigger
            value="players"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500"
          >
            Players
          </TabsTrigger>
          <TabsTrigger
            value="other"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500"
          >
            Other
          </TabsTrigger>
        </TabsList>
  
        <TabsContent value="players" className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map(player => (
              <PlayerCard key={player.id} player={player} heroes={heroes} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="other" className="p-4">
          <p>Content for the other tab.</p>
        </TabsContent>
      </Tabs>
    );
  };
  
  export default TeamTabs;