import React from "react";
import CardsSidebar from "./CardsSidebar";
interface SidebarProps {
  setSelectedImage: any;
  images: any;
  image: any;
  onClose: () => void;
}

const Sidebar = ({
  setSelectedImage,
  images,
  image,
  onClose,
}: SidebarProps) => {
  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  if (!image) return null;
  return (
    <div className="sidebar transition-all duration-300">
      <div className=" flex justify-between items-center  ">
        <div>
          <p>By: {image.author} </p>
        </div>
        <div className="flex gap-4">
          <button className="text-3xl " onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
      <div>
        <img src={image.download_url} alt={image.alt_description} />
      </div>
      <div className=" grid grid-cols-3 transition-all duration-300">
        {images.map((image: any) => (
          <CardsSidebar
            key={image.id}
            image={image}
            onClick={handleImageClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
