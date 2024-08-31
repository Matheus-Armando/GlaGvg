import React, { useState, useEffect } from 'react';

interface Hero {
  id: number;
  shortname: string;
  [key: string]: any;
}

interface HeroPicklistProps {
  label: string;
  placeholder: string;
}

const HeroPicklist: React.FC<HeroPicklistProps> = (props) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    fetch('/heroes.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const heroOptions = data.heroes
          .filter((hero: Hero) => hero.shortname)
          .map((hero: Hero) => ({
            value: hero.id,
            label: hero.shortname,
            ...hero
          }));
        heroOptions.sort((a: Hero, b: Hero) => a.label.localeCompare(b.label));
        setHeroes(heroOptions);
      })
      .catch(error => console.error('Error fetching heroes:', error));
  }, []);

  return (
    <div className="hero-picklist mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{props.label}</label>
      <select className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <option value="" disabled hidden>{props.placeholder}...</option>
        {heroes.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default HeroPicklist;