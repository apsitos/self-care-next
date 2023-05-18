import Image from 'next/image';

import meditate from '../images/meditate.svg';

export default function QuoteDisplay({ saying }) {
  return (
    <div className='bg-white rounded-lg mt-32 py-12 w-2/3 flex justify-center'>
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
  );
}
