"use client";

import { Poppins } from "next/font/google";
import { ChangeEvent, useState } from "react";

import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";
import { Button } from "@/components/Button";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

const ContactFormRightSide = (): JSX.Element => {
  const [radio, setRadio] = useState<string>("1");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  return (
    <div className="w-[686px] h-full p-[50px] pr-[40px] flex flex-col gap-11 mob:p-[15px] mob:pt-[30px] mob:gap-5 mob:w-full">
      <div className="flex gap-10 mob:flex-col mob:gap-5">
        <Input label="First name" />
        <Input label="Last name" />
      </div>
      <div className="flex gap-10 mob:flex-col mob:gap-5">
        <Input label="Email" />
        <Input label="Phone Number" />
      </div>
      <div className="flex flex-col gap-[14px] mob:gap-[10px] mob:mt-[5px]">
        <div
          className={`${poppins.className} text-sm leading-5 text-black font-semibold`}
        >
          Select Subject?
        </div>
        <div className="flex gap-5 mob:flex-wrap mob:gap-x-5 mob:gap-y-[14px]">
          <Radio
            label="General Inquiry"
            value="1"
            selectedValue={radio}
            onChange={onChange}
          />
          <Radio
            label="General Inquiry"
            value="2"
            selectedValue={radio}
            onChange={onChange}
          />
          <Radio
            label="General Inquiry"
            value="3"
            selectedValue={radio}
            onChange={onChange}
          />
          <Radio
            label="General Inquiry"
            value="4"
            selectedValue={radio}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="mob:mt-[5px]">
        <Input label="Message" placeholder="Write your message.." />
      </div>
      <div className="w-full flex justify-end">
        <Button size="big" className="mob:w-full">Send Message</Button>
      </div>
    </div>
  );
};

export default ContactFormRightSide;
