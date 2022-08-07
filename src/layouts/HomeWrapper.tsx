import React from 'react';

type Props = {
  children?: React.ReactNode;
};
const HomeWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full bg-greyscale min-h-screen flex sm:flex-col lg:flex-row">
      {children}
    </div>
  );
};
export default HomeWrapper;
