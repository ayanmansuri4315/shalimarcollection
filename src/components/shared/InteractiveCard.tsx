import React from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  onClick,
  id,
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.99] ${className}`}
    >
      {children}
    </div>
  );
};

