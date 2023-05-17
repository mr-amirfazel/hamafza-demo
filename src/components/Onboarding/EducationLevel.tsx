import React, { FC, PropsWithChildren } from "react";

interface EducationLevelProps extends PropsWithChildren {
  title: string;
  color: string;
  image?: string;
}

const EducationLevel: FC<EducationLevelProps> = ({ title, color, image }) => {
  return (
    <div
      className={`w-full border-[1px] rounded-[12px] flex items-center p-[8px] gap-[16px]`}
      style={{ borderColor: color }}
    >
      <div style={{ backgroundColor: color }} className="w-[64px] h-[64px] rounded-[8px] p-[8px]">
        <img src={image} alt={title} />
      </div>
      <p className="text-[#585A66] font-[20px] ">
      {title}
      </p>
    </div>
  );
};

export default EducationLevel;
