import Image from "next/image";
import { Poppins } from "next/font/google";

import navigationIcon from "@/assets/navigationIcon.svg";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type AddressContactProps = {
  className?: string;
  textClassName?: string;
};

const AddressContact = ({
  className,
  textClassName,
}: AddressContactProps): JSX.Element => {
  return (
    <div
      className={`flex gap-[25px] text-white mob:flex-col mob:gap-[10px] items-center ${className}`}
    >
      <Image alt="navigation" src={navigationIcon} width={24} height={24} />
      <div
        className={`${poppins.className} font-normal text-base leading-[normal] text-wrap-balance mob:text-xs mob:text-center ${textClassName}`}
      >
        {"132 Dartmouth Street Boston, Massachusetts 02156 United States"}
      </div>
    </div>
  );
};

export default AddressContact;
