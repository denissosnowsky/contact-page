import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "400"] });

type QuickLinksProps = {
  className?: string;
};

const QuickLinks = ({ className }: QuickLinksProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col gap-5 w-[148px] pt-[10px] mob:pt-0 mob:w-fit ${className}`}
    >
      <div className={`contactHeader ${poppins.className} mob:text-base`}>
        Quick Links
      </div>
      <div className="flex flex-col gap-6">
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Techlabz Keybox
        </div>
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Downloads
        </div>
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Forum
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
