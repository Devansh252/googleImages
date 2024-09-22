import Image from "next/image";
import React from "react";
import Google from "@/assets/google.png";
import GoogleMic from "@/assets/google_mic_icon.svg";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center p-4 sm:p-6 sm:px-16 w-full">
      <Image
        alt="google-logo"
        width={100}
        height={100}
        src={Google}
        className="w-20 sm:w-auto"
      />
      <div className="w-full sm:w-[700px] shadow-md rounded-full border border-gray-200 px-6 sm:px-5 hover:shadow-lg flex justify-between items-center p-2">
        <input
          className="outline-none w-full"
          type="text"
          placeholder="Search Google Images"
        />
        <div className="flex items-center gap-2 sm:gap-4">
          <Image
            alt="google-mic"
            width={30}
            height={30}
            src={GoogleMic}
            className="cursor-pointer w-7 sm:w-6"
          />
          <Image
            alt="google-lens"
            width={25}
            height={25}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Google_Lens_Icon.svg"
            className="cursor-pointer w-5 sm:w-6"
          />
          <Image
            alt="google-camera"
            width={25}
            height={25}
            src="https://cdn-icons-png.freepik.com/512/9135/9135995.png"
            className="cursor-pointer w-5 sm:w-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
