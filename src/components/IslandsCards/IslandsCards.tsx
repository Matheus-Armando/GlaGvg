import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface IslandCardProps {
  id: number;
  title: string;
  image: string;
  recImage: string;
  onClick: () => void;
}

const IslandCard: React.FC<IslandCardProps> = ({ title, image, recImage, onClick }) => {
  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <CardHeader className="text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img src={image} alt={title} className="w-full h-auto" />
        </CardContent>
        <CardFooter className="flex justify-center text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="text-gray-900 dark:text-gray-100">Recompensas</button>
              </TooltipTrigger>
              <TooltipContent>
                <img src={recImage} alt={`Recompensas ${title}`} className="w-96 h-auto" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </div>
    </Card>
  );
};

export default IslandCard;