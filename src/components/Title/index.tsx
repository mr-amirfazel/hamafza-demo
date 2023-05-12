import React, { FC, PropsWithChildren } from "react";
interface TitleProps extends PropsWithChildren {

}
const Title:FC<TitleProps> = ({children}) => {
  return <h3 className="font-bold text-4xl text-[#00394C]">
    {children}
  </h3>;
};

export default Title;
