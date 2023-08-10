import React from 'react';

interface ProfileHeaderProps {
  name: string;
  contentDescr: string;
  imageSrc: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, contentDescr, imageSrc }) => {
  return (
    <div className="inline-flex items-center justify-center">
      <div className=" inline-flex space-x-10 text-white md:text-xl lg:text-4xl">
        <span className="animate-fade-in-left opacity-0 animation-delay-500">This</span>
        <span className="animate-fade-in-left opacity-0  animation-delay-1000">is</span>
        <span className=" animate-fade-in-left opacity-0 animation-delay-1500">Victor</span>
      </div>
      <img
        className="ml-[10vw] w-[10vw] animate-fade-in-left rounded-full opacity-0 animation-delay-2000"
        src={imageSrc}
        alt="Profile picture"
      />
    </div>
  );
};

export default ProfileHeader;
