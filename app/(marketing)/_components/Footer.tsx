import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between flex md:justify-end items-center gap-x-2 text-muted-foreground">
        <Button variant={'ghost'} size={'sm'}>
          Privary Policy
        </Button>
        <Button variant={'ghost'} size={'sm'}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
}

export default Footer;
