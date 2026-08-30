import { useState } from "react";

const ImageCard = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Optional per-item zoom for thumbnails whose subject floats in whitespace.
  const baseScale = item.thumbnailScale || 1;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-lg cursor-pointer aspect-square"
    >
      <img
        src={item.thumbnailImage || item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        style={{
          transform: `scale(${isHovered ? baseScale * 1.05 : baseScale})`,
          transformOrigin: item.thumbnailPosition || 'center',
          transition: 'transform 0.3s ease',
        }}
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center"
        style={{
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s ease',
        }}
      >
        <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
        {item.company && <p className="text-white text-sm mb-3">{item.company}</p>}
        <p className="text-white text-sm leading-relaxed">{item.shortDesc}</p>
      </div>
    </div>
  );
};

export default ImageCard;
