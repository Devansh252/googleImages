import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Cards from "./Cards";

const ImageGallery = ({ images }: any) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  return (
    <div className={` flex p-4  ${selectedImage && "w-2/3"}  `}>
      <div className="image-grid transition-all duration-300">
        {images.map((image: any) => (
          <Cards key={image.id} image={image} onClick={handleImageClick} />
        ))}
      </div>
      <Sidebar
        setSelectedImage={setSelectedImage}
        images={images}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default ImageGallery;
