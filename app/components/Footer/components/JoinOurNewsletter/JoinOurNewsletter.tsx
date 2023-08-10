import { Button } from "@/components/Button";
import { Poppins, Manrope } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "500", "400"] });
const manrope = Manrope({ subsets: ["latin"], weight: "500" });

type JoinOurNewsletterProps = {
  className?: string;
};

const JoinOurNewsletter = ({
  className,
}: JoinOurNewsletterProps): JSX.Element => {
  return (
    <div
      className={`bg-fourthBG w-[304px] h-[184px] rounded-[10px] ${
        className ?? ""
      } p-[14px] mob:rounded-[5px]`}
    >
      <div
        className={`${poppins.className} text-lg leading-[26px] font-semibold text-white mb-[30px] mob:text-base mob:leading-[26px] mob:mb-[23px]`}
      >
        Join Our Newsletter
      </div>
      <div className="w-full h-[40px] flex rounded bg-fifthBG overflow-hidden mb-5 mob:w-[277px]">
        <input
          className={`w-full bg-fifthBG text-sixColor ${poppins.className} text-[11px] leading-[normal] font-normal pl-[10px] pr-[10px] secondInput`}
          placeholder="Your email address"
        />
        <Button size="small">Subscribe</Button>
      </div>
      <div
        className={`text-white text-[13px] font-medium leading-[normal ${manrope.className}] opacity-50`}
      >
        * Will send you weekly updates for your better tool management.
      </div>
    </div>
  );
};

export default JoinOurNewsletter;
