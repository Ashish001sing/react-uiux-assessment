import React, { type JSX } from 'react';

export type BasicTextProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export default function BasicText({
  children,
  as: Component = 'span',
  className = '',
}: BasicTextProps) {
  return <Component className={className}>{children}</Component>;
}
