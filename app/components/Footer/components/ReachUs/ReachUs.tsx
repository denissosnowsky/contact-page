import { Poppins } from "next/font/google";

import { PhoneContact } from "@/components/PhoneContact";
import { EmailContact } from "@/components/EmailContact";
import { AddressContact } from "@/components/AddressContact";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const ReachUs = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-5 w-[330px] pt-[10px] mob:pt-0 mob:gap-4 mob:w-fit">
      <div className={`contactHeader ${poppins.className} mob:text-base`}>Reach us</div>
      <div className="flex flex-col gap-4 mob:items-start">
        <PhoneContact className="mob:items-start" />
        <EmailContact className="mob:items-start" />
        <AddressContact className="mob:items-start" textClassName="mob:!text-left mob:w-[144px]"/>
      </div>
    </div>
  );
};

export default ReachUs;
