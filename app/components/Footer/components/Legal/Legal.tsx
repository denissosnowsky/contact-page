import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "400"] });

const Legal = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-5 w-[148px] pt-[10px] mob:pt-0 mob:w-fit">
      <div className={`contactHeader ${poppins.className} mob:text-base`}>Legal</div>
      <div className="flex flex-col gap-6">
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Privacy Policy
        </div>
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Terms & Services
        </div>
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Terms of Use
        </div>
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Refund Policy
        </div>
      </div>
    </div>
  );
};

export default Legal;
