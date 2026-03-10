import { cloneElement, isValidElement } from 'react';

const baseStyles =
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variantStyles = {
  default: 'bg-white text-zinc-950 hover:bg-zinc-200',
  outline: 'border border-white/10 bg-transparent text-white hover:bg-white/10',
  secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
};

const sizeStyles = {
  default: 'h-10 px-4 py-2',
  icon: 'h-10 w-10'
};

export function Button({
  className = '',
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}) {
  const classNames = [
    baseStyles,
    variantStyles[variant] || variantStyles.default,
    sizeStyles[size] || sizeStyles.default,
    className
  ]
    .filter(Boolean)
    .join(' ');

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      className: [children.props.className, classNames].filter(Boolean).join(' ')
    });
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
