import React from "react";
import image from "../../assets/image 1.png";
import google from "../../assets/Google-logo.png";
import apple from "../../assets/Apple-logo.png";
import SigInButton from "../../components/Login/SignInButton";

function Login() {
  return (
    <div className="flex flex-col h-full">
      {/* hero section */}
      <div className="flex flex-col justify-center items-center space-y-5 pt-5">
        <img src={image} alt="logo" width="113px" height="113px" />
        <h2 className="font-bold text-4xl">My Study Life</h2>
        <p className="text-gray-500">
          Create a unique emotional story that describes better than words
        </p>
      </div>

      <div className="flex-grow pt-2 flex flex-col justify-around rounded-[24px] border-gray-200 border-[1px]">
        <h2 className="font-bold self-start px-7">SignIn with</h2>
        <div className="flex justify-around px-4 pt-3">
          <SigInButton>
            <img src={google} alt="google logo" />
            <h4>Google</h4>
          </SigInButton>
          <SigInButton>
            <img src={apple} alt="apple logo" />
            <h4>Apple</h4>
          </SigInButton>
        </div>
        <div className="flex w-full justify-center items-center space-x-2">
          <div className="w-[40%] h-[0.5px] bg-[#C4D7FF]"></div>
          <h3 className="pb-[2px]">Or</h3>
          <div className="w-[40%] h-[0.5px] bg-[#C4D7FF]"></div>
        </div>

        <div className="flex flex-col w-full justify-center items-center space-y-2">
          <input type="email" name="email" id="" className="w-[90%] border-[1px] border-[#C4D7FF] rounded-[8px] text-[#585A66] p-3" placeholder="d.che.nevsky@gmail.com" />
          <button className="w-[90%] py-[11px] px-[28px] bg-[#2FD1C5] rounded-[8px] gap-[3.26px] text-white text-[18px] font-sans">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
