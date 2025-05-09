import React from "react";

function ImageGrid({ images }) {
  if (!images.length) return <p>No images found</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt="Random"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      ))}
    </div>
  );
}

export default ImageGrid;
