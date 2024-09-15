import './index.css';
import PlayerForm from './components/PlayerForm';
import TeamTabs from './components/TeamTabs/TeamTabs';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="w-full max-w-4xl px-4 mb-8">
        <PlayerForm />
      </div>
      <div className="w-full max-w-4xl px-4">
        <TeamTabs />
      </div>
    </Layout>
  );
};

export default App;