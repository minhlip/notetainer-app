'use client';

import { Button } from '@/components/ui/button';
import { ArrowBigRight, ArrowRight, ArrowRightCircle } from 'lucide-react';
import React from 'react';

function Heading() {
  return (
    <div className="max-w-3xl space-y-4 mt-2">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, Plans. Unified. Welcome to{' '}
        <span className="underline">Notetainer</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notetainer is the connected workspace where better, faster work happens.
      </h3>
      <Button className="text-base">
        Enter Notetainer
        <ArrowRightCircle className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}

export default Heading;
