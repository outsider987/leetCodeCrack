import React from 'react';

interface ProfileHeaderProps {
  name: string;
  contentDescr: string;
  imageSrc: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, contentDescr, imageSrc }) => {
  const Step1 = () => {
    return (
      <div className="flex animate-fadeIn items-center justify-around space-x-6 lg:max-w-[70vw]">
        Victor
        <span className=" animate__fadeInLeft animate__delay-0.5s">Hi</span>
        <span className="animate__animated animate__fadeInLeft animate__delay-1s">this</span>
        <span className="animate__animated animate__fadeInLeft animate__delay-1.5s">is</span>
        <span className="animate__animated animate__fadeInLeft animate__delay-2s">Victor</span>
      </div>
    );
  };
  return (
    <div className="flex animate-fadeIn items-center justify-around space-x-6 lg:max-w-[70vw]">
      <img
        className=" w-[15vw] rounded-full transition-opacity duration-1000 ease-in"
        src={imageSrc}
        alt="Profile picture"
      />
      <div className="flex h-full flex-col space-y-3 text-white">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="font-light leading-[1.5rem] tracking-wide text-gray-400">{contentDescr}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
