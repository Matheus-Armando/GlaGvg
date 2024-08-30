import React from 'react';
import Banner from './components/banner/banner.tsx';
import HeroPicklist from './components/HeroPicklist/HeroPicklist.tsx';
import TextField from './components/TextField/TextField.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nickname" placeholder="Digite a nick"/>
      <TextField label="Função" placeholder="Declare a função"/>
      <HeroPicklist label="Hero" placeholder="Selecione o Hero" />
    </div>
  );
}

export default App;