import React, { useEffect, useState } from 'react';
import Button from '~/components/Button';
import SortBox from '~/components/SortBox';

export interface BoxState {
  sort_index: number;
  value: number;
}

const Profile = () => {
  return (
    <div className="flex flex-col space-y-4 overflow-auto">
      <div className=" justify-around flex items-center space-x-6 lg:max-w-[60vw]">
        <img
          className="w-[15vw] rounded-full"
          src={require('~/assets/img/me.jpg')}
        />
        <div className="text-white h-full flex flex-col space-y-3">
          <h1 className="text-3xl font-bold">CHANG YAO SIAN ( V i c t o r )</h1>
          <div className=" leading-[1.5rem] tracking-wide font-light text-gray-400">
            Hi this is Victor, In my college I was majors medical chemistry ,but
            I found the programing is interesting stuff I never met ,so I start
            to learning computer science improve my programing skill and luckily
            I got the software engineer on my currently job, I wish I could be a
            Influential person on the IT
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <h1 className="text-white text-2xl font-bold"> EMPLOYMENT</h1>
        <div className="text-white space-y-3">
          <div className="flex w-full lg:max-w-[20vw] justify-between">
            <div className="text-gray-400">2022.02-Still</div>
            <div className="w-1 block bg-white bg-opacity-60"></div>
            <div>MEDICONCEN</div>
          </div>
          <div> Full Stack</div>
          <ul className="list-disc list-inside space-y-1  ">
            <li>
              Skill:
              <span className=" text-blue-400">
                CI/CD, javascript,React,SSR,SPA,Ubuntu,SPA,AWS,RWD
              </span>
            </li>
            <li>
              Responsible:
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li className="text-gray-400 font-light">
                  maintenance landing page "standardlife"{' '}
                </li>
                <li>maintance official </li>
                <li>build up smart wallet from scratch (apple ,google) </li>
                <li>write tech document for coworker and share tech</li>
                <li>maintenance CMS system</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Profile;
