import React from 'react';
import { Link } from 'react-router-dom';
import SvgICon from '~/components/SvgIcon';

type Props = {
  iconName: string;
  path: string;
  text: string;
  isFocus: boolean;
  isShow: boolean;
  onClick?: () => void;
};

const NavBarItem: React.FC<Props> = ({
  iconName,
  path,
  isShow,
  isFocus,
  text,
  onClick,
}) => {
  if (!isShow) {
    return <></>;
  }
  return (
    <Link
      onClick={onClick}
      to={path}
      className="relative flex flex-col items-center
    justify-center"
    >
      <SvgICon
        name={iconName}
        className={`relative justify-center ${
          isFocus ? 'text-white' : 'text-[#6A6A6A]'
        }`}
      >
        {isFocus && (
          <div
            className="absolute  -right-[16.6%] -top-[20.83%] h-[22%] w-[22%]
        rounded-full bg-navBarUnFocusBlue"
          />
        )}
      </SvgICon>

      <span
        className="min-h-[18px] text-center text-xs leading-[150%]
        tracking-[0.4px] text-white"
      >
        {text}
      </span>
    </Link>
  );
};
export default NavBarItem;
