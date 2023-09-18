import { ReactNode } from 'react';

type IconButtonType = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  testid?: string;
};

const IconButton = ({
  children,
  className = '',
  onClick,
  testid,
}: IconButtonType) => {
  return (
    <button
      data-testid={testid}
      className={`relative active:bg-transparent focus:bg-transparent ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
