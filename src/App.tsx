import './index.css';
import Banner from './components/banner';
import PlayerForm from './components/PlayerForm';

const App: React.FC = () => {
  return (
  <div className="">
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="w-full">
        <Banner />
      </header>
      <main className="flex-grow flex items-center justify-center w-full">
        <div className="w-full max-w-4xl px-4">
          <PlayerForm />
        </div>
      </main>
    </div>
  </div>
  );
};

export default App;