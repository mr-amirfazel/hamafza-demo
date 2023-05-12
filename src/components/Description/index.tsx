import React, { FC, PropsWithChildren } from "react";
interface DescriptionProps extends PropsWithChildren {}
const Description: FC<DescriptionProps> = ({ children }) => {
  return <p className="text-[#585A66] text-sm">{children}</p>;
};

export default Description;
