import Image from "next/image";
import { Poppins } from "next/font/google";

import letterIcon from "@/assets/letterIcon.svg";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type EmailContactProps = {
  className?: string;
};

const EmailContact = ({ className }: EmailContactProps): JSX.Element => {
  return (
    <div
      className={`flex gap-[25px] text-white mob:flex-col mob:gap-[10px] items-center ${className}`}
    >
      <Image alt="letter" src={letterIcon} width={24} height={24} />
      <div
        className={`${poppins.className} font-normal text-base leading-[normal] mob:text-xs`}
      >
        demo@gmail.com
      </div>
    </div>
  );
};

export default EmailContact;
