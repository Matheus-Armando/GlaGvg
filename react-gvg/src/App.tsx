import './index.css'; 
import Banner from './components/banner';
import HeroPicklist from './components/HeroPicklist';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="pt-16"> 
        <TextField label="Nickname" placeholder="Digite a nick" />
        <TextField label="Função" placeholder="Declare a função" />
        <HeroPicklist label="Hero" placeholder="Selecione o Hero" />
      </div>
    </div>
  );
}

export default App;