import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";

function App()   
  const [images, setImages] = useState([]);

  const handleSearch = (query) => {
    // Simulate image search by generating random image URLs
    const newImages = Array.from({ length: 9 }, (_, index) => ({
      id: index,
      url: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
    }));
    setImages(newImages);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Image Search (Mock)</h1>
      <SearchBar onSearch={handleSearch} />
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
