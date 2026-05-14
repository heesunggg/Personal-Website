import formatText from "../utils/formatText";

const getImageSizeClass = (size) => {
  const sizes = {
    small: "w-48",
    medium: "max-w-md",
    large: "max-w-2xl",
    full: "w-full",
  };
  return sizes[size] || sizes["full"];
};

const TextBlock = ({ text, bullets }) => (
  <div className="mb-6 last:mb-0">
    {text && (
      <p className="text-lg text-gray-700 leading-relaxed mb-4">{formatText(text)}</p>
    )}
    {bullets && bullets.length > 0 && (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="text-base leading-relaxed">{formatText(bullet)}</li>
        ))}
      </ul>
    )}
  </div>
);

const ContentSection = ({ content }) => {
  if (!content) return null;

  const {
    text,
    bullets,
    image,
    layout = "text-left",
    imagePosition = "right",
    imageSize = "full",
    textBlocks,
  } = content;

  const renderBlocks = () =>
    textBlocks && textBlocks.length > 0
      ? textBlocks.map((block, idx) => (
          <TextBlock key={idx} text={block.text} bullets={block.bullets} />
        ))
      : <TextBlock text={text} bullets={bullets} />;

  if (layout === "side-by-side" && image) {
    return (
      <div
        className={`flex flex-col ${
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-start`}
      >
        <div className="flex-1">{renderBlocks()}</div>
        <div className="flex-1">
          <img
            src={image}
            alt="Section content"
            className={`${getImageSizeClass(imageSize)} rounded-lg border border-gray-200`}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {renderBlocks()}
      {image && layout === "text-left" && (
        <div className="mt-6">
          <img
            src={image}
            alt="Section content"
            className={`${getImageSizeClass(imageSize)} rounded-lg border border-gray-200 mx-auto`}
          />
        </div>
      )}
    </>
  );
};

export default ContentSection;
