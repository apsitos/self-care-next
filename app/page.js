'use client';

import { useState } from 'react';

import { affirmations } from '@/data/affirmations';
import { mantras } from '@/data/mantras';

import QuoteDisplay from './QuoteDisplay';
import RadioInput from './RadioInput';

export default function Home() {
  const [quoteType, setQuoteType] = useState(null);
  const [saying, setSaying] = useState(null);

  const handleRadio = (e) => {
    setQuoteType(e.target.id);
  };
  console.log(quoteType);
  const getMessage = () => {
    const selection = Math.floor(Math.random() * (15 - 1) + 1);
    return setSaying(
      quoteType === 'affirmation' ? affirmations[selection] : mantras[selection]
    );
  };

  return (
    <main className='flex min-h-screen flex-col items-center p-24 text-white'>
      <h1 className='text-center text-3xl font-bold'>✨ Self Care Center ✨</h1>

      <h2 className='font-bold text-xl mt-20 mb-5'>Which type of message?</h2>
      <RadioInput
        handleRadio={handleRadio}
        getMessage={getMessage}
        quoteType={quoteType}
      />
      <QuoteDisplay saying={saying} />
    </main>
  );
}
