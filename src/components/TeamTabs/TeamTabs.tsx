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
      { id: 1, name: 'Player 1', role: 'Role 1', heroes: [1, 2] },
      { id: 2, name: 'Player 2', role: 'Role 2', heroes: [2, 3] },
      { id: 3, name: 'Player 3', role: 'Role 3', heroes: [1, 3] },
    ];
  
    useEffect(() => {
      fetch('/heroes.json')
        .then(response => response.json())
        .then(data => setHeroes(data))
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