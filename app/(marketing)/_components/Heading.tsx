'use client';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { useConvexAuth } from 'convex/react';
import { ArrowBigRight, ArrowRight, ArrowRightCircle } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { SignInButton } from '@clerk/clerk-react';

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 mt-2">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, Plans. Unified. Welcome to{' '}
        <span className="underline">Notetainer</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notetainer is the connected workspace where better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full h-full ml-2">
          <Spinner size={'lg'} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button className="text-base" asChild>
          <Link href={'/documents'}>
            Enter Notetainer
            <ArrowRightCircle className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Notetainer free
            <ArrowRightCircle className="ml-1 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}

export default Heading;
