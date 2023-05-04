import React from "react";

type Props = { children: React.ReactElement; backgroundImage?: string };

const FullHeightContainer = ({ children, backgroundImage }: Props) => {
  return (
    <div
      style={
        backgroundImage
          ? {
              backgroundImage: `url(
        ${backgroundImage}
      )`,
            }
          : {}
      }
      className="h-[94vh] w-100 px-32 py-8 opacity-80 z-1 max-h-full bg-cover bg-cover"
    >
      <div className="z-10 opacity-100 relative">{children}</div>
    </div>
  );
};

export default FullHeightContainer;
