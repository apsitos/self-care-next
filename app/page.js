'use client';

import { useState } from 'react';

import Image from 'next/image';

import meditate from '../images/meditate.svg';

export default function Home() {
  const [quoteType, setQuoteType] = useState('');

  const handleRadio = (e) => {
    setQuoteType(e.target.id);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-white">
      <h1 className="text-center text-3xl font-bold">✨ Self Care Center ✨</h1>

      <h2 className="font-bold text-xl mt-20 mb-5">Which type of message?</h2>
      <div className="bg-white py-4 px-5 w-1/2 rounded-lg flex flex-col">
        <div className="flex justify-around">
          <div>
            <input
              type="radio"
              id="affirmation"
              name="quote-type"
              value="affirmation"
              className="mr-2.5"
              onClick={handleRadio}
            />
            <label htmlFor="affirmation" className="text-black italic">
              affirmation
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="mantra"
              name="quote-type"
              value="mantra"
              className="mr-2.5"
              onClick={handleRadio}
            />
            <label htmlFor="mantra" className="text-black italic">
              mantra
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-dark-blue rounded-md px-5 mt-4 w-48">
            Receive Message
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-32 py-12 w-2/3 flex justify-center">
        <Image
          src={meditate}
          alt="clip art meditating person"
          width={50}
          height={75}
        />
      </div>
    </main>
  );
}
