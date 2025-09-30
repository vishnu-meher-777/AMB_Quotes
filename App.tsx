import React, { useState, useEffect, useCallback } from 'react';
import { quotes } from './constants/quotes';
import { images } from './constants/images';
import type { Quote } from './types';
import ImageDisplay from './components/ImageDisplay';
import QuoteCard from './components/QuoteCard';
import ActionButton from './components/ActionButton';

const App: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const staticImageUrl = images[0]; // The image is now static

  const getRandomItem = useCallback(<T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
  }, []);

  const getNewInspiration = useCallback(() => {
    let newQuote = currentQuote;
    // Ensure we get a new quote
    while (newQuote.text === currentQuote.text) {
      newQuote = getRandomItem(quotes);
    }
    setCurrentQuote(newQuote);
    
    // Update key to re-trigger quote animation
    setAnimationKey(prevKey => prevKey + 1);
  }, [currentQuote, getRandomItem]);

  useEffect(() => {
    // Set a random initial quote on load
    setCurrentQuote(getRandomItem(quotes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-stone-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-stone-50 to-amber-50"></div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-700 tracking-tight">Words of Light</h1>
          <p className="text-lg text-stone-500 mt-2">from Meher Baba</p>
        </header>
        
        <div className="w-full bg-white/60 backdrop-blur-lg shadow-2xl rounded-2xl ring-1 ring-black ring-opacity-5 p-6 md:p-10 flex flex-col items-center">
          <QuoteCard key={`quote-${animationKey}`} quote={currentQuote} className="mb-8" />
          <ImageDisplay src={staticImageUrl} />
          <div className="mt-8">
            <ActionButton onClick={getNewInspiration} />
          </div>
        </div>
        
        <footer className="mt-8 text-center text-stone-400 text-sm">
          <p>Refresh to discover a new moment of inspiration.</p>
        </footer>

      </div>
    </main>
  );
};

export default App;