import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Roboto } from "next/font/google";

import crossIcon from "@/assets/cross.svg";
import arrowIcon from "@/assets/arrowLight.svg";
import cartIcon from "@/assets/cartDark.svg";
import userIcon from "@/assets/userIconDark..svg";
import { Container } from "@/components/Container";

type OpenedBurgerProps = {
  isBurgerOpen: boolean;
  setIsBurgerOpen: Dispatch<SetStateAction<boolean>>;
};

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const OpenedBurger = ({
  isBurgerOpen,
  setIsBurgerOpen,
}: OpenedBurgerProps): JSX.Element => {
  const onCrossClick = () => {
    setIsBurgerOpen(false);
  };

  return (
    <div
      className={`hidden ${
        isBurgerOpen ? "mob:block" : "mob:hidden"
      } h-[476px] w-full bg-black absolute top-0 left-0 pb-[30px] z-10`}
    >
      <Container>
        <div className="pt-[30px] flex justify-between mb-[58px]">
          <div className="text-2xl mob:text-lg font-extrabold h-full text-white mob:leading-5">
            Logo Here
          </div>
          <div className="hidden mob:block">
            <Image
              alt="cross"
              height={24}
              width={24}
              src={crossIcon}
              onClick={onCrossClick}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] mb-[60px]">
          <div className={`navLink ${roboto.className}`}>Home</div>
          <div className={`navLink ${roboto.className} flex gap-[6px]`}>
            <span>Features</span>
            <Image alt="down" src={arrowIcon} />
          </div>
          <div className={`navLink ${roboto.className}`}>Blog</div>
          <div className={`navLink ${roboto.className}`}>Shop</div>
          <div className={`navLink ${roboto.className}`}>About</div>
          <div className={`activeNavLink ${roboto.className}`}>Contact</div>
        </div>
        <div className="flex gap-9 justify-center">
          <div className="w-8 h-8 border-[1px] border-white rounded-full opacity-75 flex items-center justify-center">
            <Image
              alt="userIcon"
              width={18}
              height={18}
              src={userIcon}
              className="cursor-pointer"
            />
          </div>
          <div className="w-8 h-8 border-[1px] border-white rounded-full opacity-75 flex items-center justify-center">
            <Image
              alt="cartIcon"
              width={18}
              height={18}
              src={cartIcon}
              className="cursor-pointer"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OpenedBurger;
