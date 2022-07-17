import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LayoutDivider from '~/components/LayoutDivider';
import SvgICon from '~/components/SvgIcon';
import { HomeRoute, routes } from '~/router';
import NavBarItem from './NavBarItem';

const NavBar = () => {
    console.log('NavBar Render');
  const [toggelMenu, setToggelMenu] = useState(false);
  const [mobildContentClass, setMobildContentClass] = useState('hidden');

  const onMobileMenuClick = () => {
    setToggelMenu(!toggelMenu);
  };
  useEffect(() => {
    setMobildContentClass(
      toggelMenu
        ? 'animate-menu_collpase_on h-[50vh]'
        : ' animate-menu_collpase_off opacity-0 pointer-events-none'
    );
  }, [toggelMenu]);
  useEffect(() => {
    setMobildContentClass(
     'hidden'
    );
  }, []);


  const layouts = {
    desktop: () => (
      <div
        className="w-full min-h-screen bg-navbar
        max-w-navbar_desktop_w hidden lg:block relative "
      >
        <div className="w-[1px] absolute -right-[1px] bg-black bg-opacity-20" />
        {/* desktop */}
        <div className="px-[1.66vw] py-[37px]">
          <div className="mb-[5vh]">
            <SvgICon name="logo" />
          </div>

          <div
            className="hidden lg:flex flex-col
        space-y-6 items-center"
          >
            {HomeRoute.children.map((item) => (
              <NavBarItem
                key={item.path}
                isShow={item.isShow}
                iconName={item.icon}
                path={item.path}
                text={item.text}
                isFocus={useLocation().pathname === `${item.path}`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    mobile: () => (
      <div>
        <div className=" bg-navbar fixed h-m_navbar_desktop_h w-full">
          <SvgICon
            onClick={onMobileMenuClick}
            className="text-white justify-end"
            name="menu"
          />
          {mobildContentClass}
          <div className={`w-full bg-navbar   ${mobildContentClass}`}>
            {HomeRoute.children.map((item) => (
              <NavBarItem
                onClick={onMobileMenuClick}
                key={item.path}
                isShow={item.isShow}
                iconName={item.icon}
                path={item.path}
                text={item.text}
                isFocus={useLocation().pathname === `${item.path}`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  };
  return <LayoutDivider {...layouts}></LayoutDivider>;
};
export default NavBar;
