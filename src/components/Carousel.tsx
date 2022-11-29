import React, { useRef, useState } from 'react';

// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  children?: React.ReactNode;
}
const Carousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ZindexRef = useRef('z-[3]');

  const onNext = () => {
    const nextIndex = currentIndex === props.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    ZindexRef.current = 'z-[3]';
  };
  const onPrev = () => {
    const nextIndex = currentIndex === 0 ? props.images.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    ZindexRef.current = 'z-[0]';
  };
  const onAimatedCondition = (index: number) => {
    if (index === currentIndex) return 'transform  translate-x-0 z-[2]';

    if (index === currentIndex + 1 || (props.images.length - 1 === currentIndex && index === 0))
      return 'transform  translate-x-full z-[1] ';

    return `transform  -translate-x-full ${ZindexRef.current}`;
  };

  return (
    <div className="relative min-h-[30vh] min-w-[30vw] text-white">
      <div className="relative h-56 overflow-hidden rounded-lg  md:h-96">
        {props.images.map((image, index) => (
          <div
            key={`${index + image}-img`}
            className={`${onAimatedCondition(index)} absolute  top-0 h-full w-full transform transition duration-700
            ease-in-out`}
          >
            <img
              className=" absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 transform "
              alt="..."
              src={image}
            />
          </div>
        ))}
      </div>
      {currentIndex}
      <button
        onClick={onPrev}
        type="button"
        className="group absolute top-0 left-0 z-20  flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-orange-500 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            aria-hidden="true"
            className="h-6 w-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={onNext}
        type="button"
        className="group absolute top-0 right-0 z-20  flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-orange-500  group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            aria-hidden="true"
            className="h-6 w-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
export default Carousel;
