import type { StyleProps } from "./types";

export interface BasicButtonProps extends StyleProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  id?: string;
  title?: string;
}