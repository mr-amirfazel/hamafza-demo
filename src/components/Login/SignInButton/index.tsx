import React, {PropsWithChildren, FC} from 'react'

interface SignInButtonProps extends PropsWithChildren{

}

const SigInButton:FC<SignInButtonProps> = ({children}) => {
  return (
    <button className="flex pt-[14px] pr-[34px] pb-[14px] pl-[34px] gap-2 border-[1.5px] border-[#2FD1C5] rounded-[12px] text-[.9em] font-semibold">
        {children}
    </button>
  )
}

export default SigInButton