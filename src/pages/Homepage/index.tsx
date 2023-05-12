import React from "react";
import mainScrren from "../../assets/main-screen.png";
import Button from "../../components/Button";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col  items-center">
      <img src={mainScrren} alt="homepage-logo" />
      <div className="flex flex-col justify-evenly flex-grow border-[#E4EDFF] border-[1px] rounded-[24px]">
        <div className="flex justify-center items-center space-x-1">
          <div className="bg-[#2FD1C5] h-[5px] w-[25px] rounded-[13px]"></div>
          <div className="bg-[#2FD1C5] h-[5px] w-[5px] rounded-[13px]"></div>
          <div className="bg-[#2FD1C5] h-[5px] w-[5px] rounded-[13px]"></div>
        </div>

        <div>
          <h2 className="font-bold text-4xl">My Study Life</h2>
          <p className="text-gray-500">
            Create a unique emotional story that describes better than words
          </p>
        </div>

        <div>
            <Button>
                Get Started
            </Button>
        </div>

      </div>
    </div>
  );
};

export default Homepage;
