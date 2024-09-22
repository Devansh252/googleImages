"use client";
import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";

interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

function SearchResults() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=50")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}

export default SearchResults;
