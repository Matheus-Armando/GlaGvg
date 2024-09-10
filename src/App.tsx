import './index.css';
import Banner from './components/banner';
import PlayerForm from './components/PlayerForm';
import TeamTabs from './components/TeamTabs/TeamTabs';

const App: React.FC = () => {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <header className="w-full">
          <Banner />
        </header>
        <main className="flex-grow flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-4xl px-4 mb-8">
            <PlayerForm />
          </div>
          <div className="w-full max-w-4xl px-4">
            <TeamTabs />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;