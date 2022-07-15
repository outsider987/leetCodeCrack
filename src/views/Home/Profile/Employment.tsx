import React, { useEffect, useState } from 'react';

export interface Props {
  skill: string;
  endYear: string;
  startYeat: string;
  responsible: Responsible[];
  company_name: string;
  title: string;
}
interface Responsible {
  content: string;
  link: string;
}

const Employment: React.FC<Props> = (props) => {
  return (
    <div className="text-white space-y-3">
      <div className="flex w-full lg:max-w-[20vw] justify-between">
        <div className="text-gray-400">
          {props.startYeat}-{props.endYear}
        </div>
        <div className="w-1 block bg-white bg-opacity-60"></div>
        <div>{props.company_name}</div>
      </div>
      <div> {props.title}</div>
      <ul className="list-disc list-inside space-y-1  ">
        <li>
          Skill:
          <span className="leading-6 text-blue-400 break-words">{props.skill}</span>
        </li>
        <li>
          Responsible:
          <ul className=" leading-6 list-disc list-inside mt-1 space-y-1 hover:scale-110  transition ease-in-out delay-150 duration-300">
            {props.responsible.map((item) => (
              <li className="text-gray-400 font-light">
                {item.content}{' '}
                <a target='blank' className=" text-blue-800 font-semibold" href={item.link}>{item.link!==`` && '(Link)'}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Employment;
