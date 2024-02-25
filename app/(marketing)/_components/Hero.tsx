import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl ">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src={`/documents.png`}
            fill
            alt="document"
            className="object-contain"
          />
        </div>
        <div className="w-[400px] h-[400px] relative hidden md:block">
          <Image
            alt="reading"
            src="/reading.png"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
