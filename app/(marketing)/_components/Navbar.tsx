'use client';

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react';
import Logo from './Logo';
import { ModeToggle } from '@/components/mode-toggle';
import { useConvexAuth } from 'convex/react';
import { SignUpButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';
import { User } from 'lucide-react';

function Navbar() {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        'z-50 bg-background fixed top-0 dark:bg-[#1F1F1F] flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm dark:bg-[#1F1F1F]'
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner size={'default'} />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignUpButton mode={'modal'}>
              <Button variant={'ghost'} size={'sm'}>
                Log in
              </Button>
            </SignUpButton>
            <SignUpButton mode={'modal'}>
              <Button size={'sm'}>Get Notetainer free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={'ghost'} size={'sm'} asChild>
              <Link href={'/documents'}>Enter Notetainer</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
