import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LayoutDivider from '~/components/LayoutDivider';
import SvgICon from '~/components/SvgIcon';
import { HomeRoute, routes } from '~/router';
import NavBarItem from '../../../layouts/NavBarItem';

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
        ? 'h-[50vh] animate-menu_collpase_on '
        : 'opacity-0 pointer-events-none animate-menu_collpase_off '
    );
  }, [toggelMenu]);
  useEffect(() => {
    setMobildContentClass('hidden');
  }, []);

  const layouts = {
    desktop: () => (
      <div
        className="relative hidden min-h-screen
        w-full max-w-navbar_desktop_w bg-navbar lg:block "
      >
        <div className="absolute -right-[1px] w-[1px] bg-black bg-opacity-20" />
        {/* desktop */}
        <div className="px-[1.66vw] py-[37px]">
          <div className="mb-[5vh]">
            <SvgICon name="logo" />
          </div>

          <div
            className="hidden flex-col items-center
        space-y-6 lg:flex"
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
        <div className=" fixed h-m-navbar-desktop-h w-full bg-navbar">
          <SvgICon
            onClick={onMobileMenuClick}
            className="justify-end text-white"
            name="menu"
          />
          <div className={`w-full space-y-3 bg-navbar ${mobildContentClass}`}>
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
