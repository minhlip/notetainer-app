'use client';

import { LucideIcon } from 'lucide-react';

interface ItemProps {
  onClick: () => void;
  label: string;
  icon: LucideIcon;
}

export const Item = (props: ItemProps) => {
  const { onClick, label, icon: Icon } = props;
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: '12px' }}
      className="group min-h-[27px] text-base py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium "
    >
      <Icon className="w-[18px] h-[18px] shrink-0 mr-2 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );
};
