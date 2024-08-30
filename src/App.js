import Banner from './components/banner/banner';
import HeroPicklist from './components/HeroPicklist/HeroPicklist';
import TextField from './components/TextField/TextField';

function App() {

  return (
    <div className="App">
      <Banner />
      <TextField label="Nickname" placeholder="Digite a nick"/>
      <TextField label="Função" placeholder="Declare a função"/>
      <HeroPicklist label="Hero" placeholder="Selecione o Hero" options={[]} />
    </div>
  );
}

export default App;
