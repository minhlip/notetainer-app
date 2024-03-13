'use client';
import { ConfirmModal } from '@/components/modals/confirm-modal';
import { Spinner } from '@/components/spinner';
import { Input } from '@/components/ui/input';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { remove } from '@/convex/documents';
import { useMutation, useQuery } from 'convex/react';
import {
  BookDashed,
  Search,
  Trash,
  Trash2,
  Trash2Icon,
  Undo,
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

function TrashBox() {
  const router = useRouter();
  const params = useParams();

  const document = useQuery(api.documents.getTrashItem);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const [search, setSearch] = useState('');

  const filteredDocuments = document?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = (documentId: Id<'documents'>) => {
    router.push(`/documents/${documentId}`);
  };

  const onRestore = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<'documents'>
  ) => {
    event.stopPropagation();

    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: 'Restoring note...',
      success: 'Note restored!',
      error: 'Failed to restore note.',
    });
  };

  const onRemove = (documentId: Id<'documents'>) => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: 'Deleting note...',
      success: 'Note deleted!',
      error: 'Failed to delete note.',
    });

    if (params.documentId === documentId) {
      router.push('/documents');
    }
  };

  if (document === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size={'lg'} />
      </div>
    );
  }

  return (
    <div className="text-sm p-1 ">
      <div className="flex items-center gap-x-2 p-2">
        <Search className="h-4 w-4" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
          placeholder="Filter by page title..."
        />
      </div>
      <div className="mt-2 p-3 ">
        <div className="hidden last:block">
          <div className="flex p-2 gap-2 items-center justify-center">
            <Trash2Icon className="h-[20px] w-[20px] text-muted-foreground " />

            <p className=" text-base p-1 font-medium text-center text-muted-foreground">
              No documents found{' '}
            </p>
          </div>
        </div>
        {filteredDocuments?.map((document) => {
          return (
            <div
              key={document._id}
              role="button"
              onClick={(event) => onRestore(event, document._id)}
              className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between"
            >
              <span className="truncate pl-2">{document.title}</span>
              <div className="flex items-center">
                <div
                  role="button"
                  className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                >
                  <Undo className="h-4 w-4 text-muted-foreground" />
                </div>
                <ConfirmModal
                  onConfirm={() => onRemove(document._id)}
                  title={document.title}
                >
                  <div
                    role="button"
                    className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  >
                    <Trash className="w-4 h-4 text-muted-foreground" />
                  </div>
                </ConfirmModal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrashBox;
