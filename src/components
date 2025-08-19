import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function MiningButton() {
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('roarTokens');
    if (saved) setTokens(parseInt(saved));
  }, []);

  const mine = () => {
    const newTokens = tokens + 1;
    setTokens(newTokens);
    localStorage.setItem('roarTokens', newTokens);
  };

  return (
    <div className="text-center mb-8">
      <motion.button
        onClick={mine}
        className="bg-red-600 text-white px-8 py-4 rounded-full text-2xl"
        whileTap={{ scale: 1.2 }}
      >
        Tap to Mine Roar!
      </motion.button>
      <p className="mt-4 text-xl">Tokens Mined: {tokens}</p>
      <div className="w-64 bg-gray-700 rounded-full h-4 mt-2">
        <motion.div
          className="bg-gold h-4 rounded-full"
          style={{ width: `${(tokens % 100)}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${(tokens % 100)}%` }}
        />
      </div>
    </div>
  );
}

export default MiningButton;