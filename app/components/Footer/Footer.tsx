import { Inter } from "next/font/google";

import { Container } from "@/components/Container";

import { Legal } from "./components/Legal";
import { ReachUs } from "./components/ReachUs";
import { Company } from "./components/Company";
import { QuickLinks } from "./components/QuickLinks";
import { JoinOurNewsletter } from "./components/JoinOurNewsletter";

const inter = Inter({ subsets: ["latin"], weight: ["800", "600"] });

const Footer = (): JSX.Element => {
  return (
    <div className="bg-black w-full pb-[66px] mob:pb-[35px]">
      <Container>
        <div className="min-h-fit border-b-[1px] border-white">
          <div
            className={`w-full text-center text-white text-4xl leading-[normal] font-extrabold ${inter.className} pt-20 pb-[45px] mob:pt-5 mob:pb-5`}
          >
            Logo Here
          </div>
        </div>
        <div className="w-full pl-5 flex pt-5 gap-[48px] mob:pt-[30px] mob:pl-0 mob:grid mob:grid-cols-2 mob:grid-rows-[261px_178px_175px] mob:gap-y-[30px]">
          <ReachUs />
          <Company className="mob:justify-self-end" />
          <Legal />
          <QuickLinks className="mob:justify-self-end"/>
           <JoinOurNewsletter className="ml-auto mob:mt-[10px] mob:col-start-1 mob:col-end-3 mob:w-full"/>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
