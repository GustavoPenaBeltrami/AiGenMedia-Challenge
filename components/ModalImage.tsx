"use client";

import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt?: string;
}

export const ModalImage: React.FC<ImageProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`${isOpen ? "" : "hidden"} w-[100vw] h-[100vh] fixed top-0 left-0 z-50 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3`}
      >
        <button onClick={handleClick} className="bg-white shadow p-3 rounded-md hover:bg-[#ccc] duration-300 transition-all">Close</button>
        <img src={src} alt={alt} onClick={handleClick} className={`shadow-lg md:min-w-[250px] md:min-h-[450px] max-h-[90vh] max-w-[90vw]`} />
      </div>
      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        className="cursor-pointer w-full max-w-[500px]"
      />
    </>
  );
};
