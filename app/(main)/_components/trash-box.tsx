'use client';
import { Id } from '@/convex/_generated/dataModel';
import { remove } from '@/convex/documents';
import React from 'react';

function TrashBox() {
  const onRemove = (documentId: Id<'documents'>) => {
    // const promise = remove({ id: documentId });
  };

  return <div></div>;
}

export default TrashBox;
