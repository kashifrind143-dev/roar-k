import MiningButton from './components/MiningButton';
import DailyTasks from './components/DailyTasks';
import RoarGame from './components/RoarGame';
import './App.css';

function App() {
  return (
    <div className="bg-black text-gold min-h-screen flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6">Roar Token Miner</h1>
      <MiningButton />
      <DailyTasks />
      <RoarGame />
    </div>
  );
}

export default App;