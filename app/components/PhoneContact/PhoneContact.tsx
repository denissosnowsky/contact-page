import Image from "next/image";
import { Poppins } from "next/font/google";

import phoneIcon from "@/assets/phoneIcon.svg";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type PhoneContactProps = {
  className?: string;
};

const PhoneContact = ({ className }: PhoneContactProps): JSX.Element => {
  return (
    <div
      className={`flex gap-[25px] items-center text-white mob:flex-col mob:gap-[10px] ${className}`}
    >
      <Image alt="phone" src={phoneIcon} width={24} height={24} />
      <div
        className={`${poppins.className} font-normal text-base leading-[normal] mob:text-xs`}
      >
        +1012 3456 789
      </div>
    </div>
  );
};

export default PhoneContact;
