"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

import twitterIconDark from "@/assets/twitterIconDark.svg";
import discordIconDark from "@/assets/discordIconDark.svg";
import instagramIconDark from "@/assets/instagramIconDark.svg";
import instagramIconLight from "@/assets/instagramIconLight.svg";
import twitterIconLight from "@/assets/twitterIconLight.svg";
import discordIconLight from "@/assets/discordIconLight.svg";
import { PhoneContact } from "@/components/PhoneContact";
import { EmailContact } from "@/components/EmailContact";
import AddressContact from "@/components/AddressContact/AddressContact";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "400"] });

const ContactFormLeftSide = (): JSX.Element => {
  const [twitterMode, setTwitterMode] = useState("dark");
  const [discordMode, setDiscordMode] = useState("dark");
  const [instagramMode, setInstagramMode] = useState("dark");

  return (
    <div className="w-[491px] h-full bg-black rounded-[10px] text-white p-10 flex flex-col relative overflow-hidden mob:rounded-[5px] mob:w-full mob:p-[15px] mob:items-center mob:h-[647px]">
      <div
        className={`text-[28px] leading-[normal] font-semibold ${poppins.className} mob:text-xl`}
      >
        Contact Information
      </div>
      <div
        className={`text-fourthColor ${poppins.className} text-lg leading-[normal] font-normal mt-[6px] mob:text-[11px]`}
      >
        Say something to start a live chat!
      </div>
      <div className="flex flex-col gap-[50px] mt-[110px] mob:gap-[15px] mob:mt-[12px]">
        <PhoneContact />
        <EmailContact />
        <AddressContact />
      </div>
      <div className="flex gap-6 flex-1 items-end mob:items-center mob:mt-[58px]">
        <Image
          alt="twitter"
          src={twitterMode === "light" ? twitterIconLight : twitterIconDark}
          width={30}
          height={30}
          className="cursor-pointer"
          onMouseEnter={() => setTwitterMode("light")}
          onMouseLeave={() => setTwitterMode("dark")}
        />
        <Image
          alt="instagram"
          src={
            instagramMode === "light" ? instagramIconLight : instagramIconDark
          }
          width={30}
          height={30}
          className="cursor-pointer"
          onMouseEnter={() => setInstagramMode("light")}
          onMouseLeave={() => setInstagramMode("dark")}
        />
        <Image
          alt="discord"
          width={30}
          height={30}
          className="cursor-pointer"
          src={discordMode === "light" ? discordIconLight : discordIconDark}
          onMouseEnter={() => setDiscordMode("light")}
          onMouseLeave={() => setDiscordMode("dark")}
        />
      </div>
      <div className="rounded-full bg-secondBG w-[270px] h-[270px] absolute bottom-[-90px] right-[-90px] mob:w-[192px] mob:h-[192px] mob:bottom-[-86px] mob:right-[-112px]" />
      <div className="rounded-full w-[138px] h-[138px] absolute bg-thirdBG opacity-50 bottom-[70px] right-[70px] mob:w-[54px] mob:h-[54px] mob:bottom-[52px] mob:right-[26px]" />
    </div>
  );
};

export default ContactFormLeftSide;
