import Image from "next/image";

import planeImage from "@/assets/plane.png";

import { ContactFormLeftSide } from "./components/ContactFormLeftSide";
import { ContactFormRightSide } from "./components/ContactFormRightSide";

const ContactForm = (): JSX.Element => {
  return (
    <div className="h-[667px] p-[10px] bg-white flex rounded-[10px] shadow relative mob:p-[5px] mob:flex-col mob:rounded-[5px] mob:w-full mob:h-[1030px]">
      <ContactFormLeftSide />
      <ContactFormRightSide />
      <div className="w-[240px] h-[113px] absolute bottom-[15px] right-[145px] rotate-[-30deg] mob:w-[105px] mob:h-[53px] mob:bottom-[5px] mob:right-[148px]">
        <Image
          alt="plane"
          src={planeImage}
          fill
          className="object-cover object-right"
        />
      </div>
    </div>
  );
};

export default ContactForm;
