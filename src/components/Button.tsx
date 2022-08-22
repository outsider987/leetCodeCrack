import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  isRounded?: boolean;
  isWhite?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  isRounded = true,
  isWhite = true,
}) => {
  const whiteClass = `bg-white 
   text-[#121212] hover:bg-[#121212] hover:text-white`;
  const darkClass = `bg-[#121212]  
   text-white hover:bg-white hover:text-[#121212]`;
  return (
    <button
      className={`flex items-center justify-center border border-solid
       border-white py-[0.8125rem]
    px-[0.625rem] font-bold leading-[100%] ${
      isRounded ? 'rounded-full' : 'rounded'
    } ${isWhite ? whiteClass : darkClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.defaultProps = { isRounded: false, isWhite: true };
export default Button;
