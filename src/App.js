import Banner from './components/banner/banner';
import TextField from './components/TextField/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nickname" placeholder="Digite a nick"/>
      <TextField label="Função" placeholder="Declare a função"/>
    </div>
  );
}

export default App;
