import { create } from 'zustand';

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
};

export const useCoverImage = create<CoverImageStore>((store) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => store({ isOpen: true, url: undefined }),
  onClose: () => store({ isOpen: false, url: undefined }),
  onReplace: (url: string) => store({ isOpen: true, url }),
}));
