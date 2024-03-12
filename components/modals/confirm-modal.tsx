'use client';

import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from '../ui/alert-dialog';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { AlertCircleIcon } from 'lucide-react';

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
  title?: string;
}

export const ConfirmModal = ({
  children,
  onConfirm,
  title,
}: ConfirmModalProps) => {
  const handleConfirm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onConfirm();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 mb-2 text-base font-medium">
            <AlertCircleIcon className="h-5 w-5" />
            {`Delete "${title}"`}
          </AlertDialogTitle>
          <AlertDialogDescription className="">
            <span className="">
              Are you absolutely sure? This action cannot be undone!
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className={cn(buttonVariants({ variant: 'destructive' }))}
            onClick={handleConfirm}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
