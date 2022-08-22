import React, { useEffect, useState } from 'react';
import LayoutDivider from '~/components/LayoutDivider';
import SvgICon from '~/components/SvgIcon';
import Employment, { Props } from '../../../components/Employment';

const Profile = () => {
  const list = [
    {
      skill: 'CI/CD, javascript,React,SSR,SPA,Ubuntu,SPA,AWS,RWD',
      endYear: 'Still',
      startYeat: '2022.02',
      responsible: [
        {
          content: `maintenance landing page "standardlife"`,
          link: `https://member.mediconcen.com/en`,
        },
        { content: `maintenance official`, link: `https://mediconcen.com/` },
        {
          content: `build up smart wallet from scratch (apple ,google) `,
          link: ``,
        },
        {
          content: `write tech document for coworker and share tech`,
          link: ``,
        },
        { content: `maintenance CMS system`, link: `` },
      ],
      company_name: `MEDICONCEN`,
      title: `Full Stack`,
    },
    {
      skill: 'CI/CD, Typescript,Vue,SSR,SPA,nginx,Ubuntu,AWD,Click UP,AWS,RWD',
      endYear: '2022.02',
      startYeat: '2021.07',
      responsible: [
        {
          content: `official landing page from scratch`,
          link: `https://paradromix.com/`,
        },
        { content: `CMS system from scratch`, link: `` },
        {
          content: `write tech document for colleague and share tech from scratch`,
          link: ``,
        },
        {
          content: `write tech document for colleague and share tech`,
          link: ``,
        },
        {
          content: `Eco2 landing page from scratch`,
          link: `https://eco2.eco/`,
        },
      ],
      company_name: `PARADROMIX`,
      title: `Frontend Engineer`,
    },
    {
      skill: 'C++,MFC,Typescript ,Angular,opencv,SPA,JIRA,Opencv',
      endYear: '2021.07',
      startYeat: '2018.01',
      responsible: [
        {
          content: `survey task requirments and estimate effort on the manage platform(Jira)`,
          link: ``,
        },
        {
          content: `corwok with PM and UI/UX and recommand easy way to hit the goal`,
          link: ``,
        },
        {
          content: `apply fronted tech to desktop application`,
          link: ``,
        },
      ],
      company_name: `ULICKTEK`,
      title: `Soft Ware Engineer`,
    },
  ];
  const name = `CHANG YAO SIAN ( V i c t o r )`;
  const contentDescr = `Hi this is Victor, In my college I was majors medical chemistry
  ,but I found the programing is interesting stuff I never met ,so
  I start to learning computer science improve my programing skill
  and luckily I got the software engineer on my currently job, I
  wish I could be a Influential person on the IT`;

  const content = {
    desktop: () => {
      return (
        <div className="flex animate-fade_in flex-col space-y-4">
          <div className="  flex items-center justify-around space-x-6 lg:max-w-[70vw]">
            <img
              className="w-[15vw] rounded-full"
              src={require('~/assets/img/me.jpg')}
            />
            <div className="flex h-full flex-col space-y-3 text-white">
              <h1 className="text-3xl font-bold">{name}</h1>
              <div className=" font-light leading-[1.5rem] tracking-wide text-gray-400">
                {contentDescr}
              </div>
              <div className="flex">
                <a href="https://micro-react.herokuapp.com/">
                  <SvgICon name="story" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex max-h-[50vh] min-h-[50vh] max-w-[75vw] flex-col space-y-6 overflow-auto">
            <h1 className="text-2xl font-bold text-white"> EMPLOYMENT</h1>
            <div className="m-10 grid grid-cols-2 gap-6">
              {list.map((item) => (
                <Employment {...item} />
              ))}
            </div>
          </div>
        </div>
      );
    },
    mobile: () => {
      return (
        <div className="animate-fade_in overflow-auto opacity-100">
          <div className="flex flex-col space-y-4 sm:mr-2 ">
            <div className=" flex flex-col items-center justify-around space-x-6 lg:max-w-[70vw]">
              <img
                className="w-[15vw] rounded-full"
                src={require('~/assets/img/me.jpg')}
              />
              <div className="flex h-full flex-col space-y-3 text-white">
                <h1 className="text-center text-xl font-bold">{name}</h1>
                <div className="font-light leading-[1.5rem] tracking-wide text-gray-400">
                  {contentDescr}
                </div>
                <div className="flex">
                  <a href="https://micro-react.herokuapp.com/">
                    <SvgICon name="story" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex min-h-[50vh] flex-col space-y-6 ">
              <h1 className="text-2xl font-bold text-white"> EMPLOYMENT</h1>
              <div className="flex flex-col gap-6 ">
                {list.map((item, index) => (
                  <Employment key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    },
  };

  return <LayoutDivider {...content} />;
};
export default Profile;
