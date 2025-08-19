import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleMine = () => {
    setBalance(balance + 1); // Each click = +1 ROAR
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      {!started ? (
        // Start Screen
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">🚀 Roar Mining</h1>
          <p className="text-lg text-gray-200">
            Welcome to the official Roar Token Mining Mini App!
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-2xl shadow-lg hover:bg-yellow-400 transition"
          >
            Roar
          </button>
        </div>
      ) : (
        // Dashboard / Home
        <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg text-gray-900 space-y-6">
          <h2 className="text-2xl font-bold text-center">🏠 Dashboard</h2>

          {/* Balance */}
          <div className="text-center">
            <p className="text-lg text-gray-600">Your Balance</p>
            <h1 className="text-4xl font-bold text-purple-700">{balance} ROAR</h1>
          </div>

          {/* Mining Button */}
          <div className="flex justify-center">
            <button
              onClick={handleMine}
              className="px-8 py-4 bg-yellow-500 text-black text-xl font-bold rounded-full shadow-xl hover:bg-yellow-400 transition"
            >
              Roar
            </button>
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setStarted(false)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
