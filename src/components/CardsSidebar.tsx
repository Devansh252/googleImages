import Image from "next/image";
import React from "react";

function CardsSidebar({ image, onClick }: any) {
  return (
    <div className="m-2" onClick={() => onClick(image)}>
      <div className="bg-white rounded-lg cursor-pointer">
        <Image
          alt={`Photo by ${image.author}`}
          width={200}
          height={200}
          src={image.download_url}
          className="object-cover w-full h-48 rounded-lg hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
        />
      </div>
      <p className="mt-2 text-sm ">By: {image.author}</p>
    </div>
  );
}

export default CardsSidebar;
