import './HeroPicklist.css';
import React, { useState, useEffect } from 'react';

const HeroPicklist = (props) => {
  const [heroes, setHeroes] = useState([]);

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
          .filter(hero => hero.shortname)
          .map(hero => ({
            value: hero.id,
            label: hero.shortname,
            ...hero
          }));
        heroOptions.sort((a, b) => a.label.localeCompare(b.label));
        setHeroes(heroOptions);
      })
      .catch(error => console.error('Error fetching heroes:', error));
  }, []);

  return (
    <div className="hero-picklist">
      <label>{props.label}</label>
      <select>
        <option value="" disabled hidden>{props.placeholder}...</option>
        {heroes.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default HeroPicklist;