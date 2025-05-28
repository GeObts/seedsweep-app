'use client';
import { useState } from 'react';

export default function Home() {
  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);

  const generateSeed = () => {
    // Simple word list for demo
    const words = ['apple', 'banana', 'cherry', 'date', 'elder', 'fig', 'grape', 'honey', 'ice', 'juice', 'kiwi', 'lemon'];
    const newSeed = [];
    for (let i = 0; i < 12; i++) {
      newSeed.push(words[Math.floor(Math.random() * words.length)]);
    }
    setSeedPhrase(newSeed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🌱 SeedSweep
        </h1>
        <p className="text-xl text-gray-300 text-center mb-8">
          Generate secure cryptocurrency wallet seed phrases
        </p>
        
        <div className="text-center mb-8">
          <button 
            onClick={generateSeed}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:scale-105 transition-transform"
          >
            Generate New Seed Phrase
          </button>
        </div>

        {seedPhrase.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Your Seed Phrase:</h2>
            <div className="grid grid-cols-3 gap-4">
              {seedPhrase.map((word, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-3 text-center">
                  <span className="text-gray-300 text-sm">{index + 1}.</span>
                  <div className="text-white font-semibold">{word}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
