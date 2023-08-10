import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "400"] });

type CompanyProps = {
  className?: string;
};

const Company = ({ className }: CompanyProps): JSX.Element => {
  return (
    <div className={`flex flex-col gap-5 w-[104px] pt-[10px] mob:pt-0 mob:w-fit ${className ?? ''}`}>
      <div className={`contactHeader ${poppins.className} mob:text-base`}>
        Company
      </div>
      <div className="flex flex-col gap-6 mob:gap-5">
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          About
        </div>
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Contact
        </div>
        <div className={`${poppins.className} contactElement mob:text-xs`}>
          Blogs
        </div>
      </div>
    </div>
  );
};

export default Company;
