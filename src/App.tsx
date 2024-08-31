import React, { useState } from 'react';
import MultiSelect from './components/MultiSelect';
import Banner from './components/banner';
import HeroPicklist from './components/HeroPicklist';
import TextField from './components/TextField';
import './index.css';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const App: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <div className="App">
      <Banner />
      <div className="pt-16">
        <TextField label="Nickname" placeholder="Digite a nick" />
        <TextField label="Função" placeholder="Declare a função" />
        <HeroPicklist label="Hero" placeholder="Selecione o Hero" />
        <MultiSelect
          options={options}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
        />
      </div>
    </div>
  );
};

export default App;