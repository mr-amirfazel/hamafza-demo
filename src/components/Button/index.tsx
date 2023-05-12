import React, { FC, PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren{

}

const Button:FC<ButtonProps> = ({children}) => {
  return (
    <button className="w-full py-[11px] px-[28px] bg-[#2FD1C5] rounded-[8px] gap-[3.26px] text-white text-[18px] font-sans">
            {children}
    </button>
  )
}

export default Button