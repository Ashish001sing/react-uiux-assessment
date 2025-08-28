import React from 'react';

export type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

export default function BasicInput({
  fullWidth = false,
  className = '',
  ...props
}: BasicInputProps) {
  return (
    <input
      className={`border rounded-xl px-4 py-2 outline-none transition-colors focus:border-black ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    />
  );
}
