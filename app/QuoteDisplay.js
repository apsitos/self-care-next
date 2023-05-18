import Image from 'next/image';

import meditate from '../images/meditate.svg';

export default function QuoteDisplay({ saying, handleClear }) {
  return (
    <div
      className={`bg-white rounded-lg mt-32 w-2/3 ${
        saying ? 'pt-12 pb-6' : 'py-12'
      }`}
    >
      <div className='flex justify-center'>
        {saying ? (
          <p className='text-black'>{saying}</p>
        ) : (
          <Image
            src={meditate}
            alt='clip art meditating person'
            width={50}
            height={75}
          />
        )}
      </div>
      {saying && (
        <button className='text-black mt-6 mx-4' onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
}
