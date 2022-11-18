import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SvgICon from '~/components/SvgIcon';

type Props = {
  iconName: string;
  path: string;
  text: string;
  isFocus: boolean;
  isShow: boolean;
  onClick?: () => void;
  children?: any[];
  slug?: React.ReactNode;
};

const NavBarItem: React.FC<Props> = ({ children, iconName, path, isShow, isFocus, text, onClick }) => {
  if (!isShow) {
    return <></>;
  }

  //  mobile
  //   <Link onClick={onClick} to={path} className="relative flex flex-col items-center justify-center">
  //   <SvgICon name={iconName} className={`relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}`}>
  //     {isFocus && (
  //       <div className="absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" />
  //     )}
  //   </SvgICon>
  //   <span className="min-h-[18px] text-center text-xs leading-[150%] tracking-[0.4px] text-white">{text}</span>
  // </Link>
  const [isOpen, setIsOpen] = useState(false);
  const renderRootItem = () => {
    if (children) {
      return (
        <div onClick={() => setIsOpen(!isOpen)} className="relative flex flex-row items-center justify-around">
          <SvgICon name={iconName} className={`relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}`}>
            {isFocus && (
              <div className="absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" />
            )}
          </SvgICon>
          <span className="min-h-[18px] text-center text-lg leading-[150%] tracking-[0.4px] text-white">{text}</span>
          <SvgICon name="arrow" className=" rotate-[270deg] "></SvgICon>
        </div>
      );
    } else {
      return (
        <Link onClick={onClick} to={path} className="relative flex flex-col items-center justify-center">
          <SvgICon name={iconName} className={`relative justify-center ${isFocus ? 'text-white' : 'text-[#6A6A6A]'}`}>
            {isFocus && (
              <div className="absolute right-[-16.6%] top-[-20.83%] h-[22%] w-[22%] rounded-full bg-navBarUnFocusBlue" />
            )}
          </SvgICon>
          <span className="min-h-[18px] text-center text-xs leading-[150%] tracking-[0.4px] text-white">{text}</span>
        </Link>
      );
    }
  };

  return (
    <div className="relative flex w-full flex-col">
      {renderRootItem()}
      {children && isOpen && (
        <li className="flex flex-col space-y-2">
          {children.map((subItem, index) => (
            <NavBarItem key={index} {...subItem} />
          ))}
        </li>
      )}
    </div>
  );
};
export default NavBarItem;
