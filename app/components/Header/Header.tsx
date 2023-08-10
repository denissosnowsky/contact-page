"use client";

import Image from "next/image";
import { Roboto } from "next/font/google";

import cartIcon from "@/assets/cart.svg";
import arrowIcon from "@/assets/arrow.svg";
import userIcon from "@/assets/userIcon.svg";
import burgerIcon from "@/assets/burger.svg";
import { useState } from "react";
import { OpenedBurger } from "../OpenedBurger";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const Header = (): JSX.Element => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onBurgerClick = () => setIsBurgerOpen(true);

  return (
    <div className="pl-5 pr-5 pt-10 flex justify-between mob:pt-[30px] mob:pl-0 mob:pr-0">
      <div className="text-2xl mob:text-lg font-extrabold leading-[normal] h-full mob:leading-5">
        Logo Here
      </div>
      <div className="flex gap-[60px] h-full items-center mob:hidden">
        <div className="h-full flex gap-12">
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
        <div className="h-full flex gap-9">
          <div className="w-8 h-8 border-[1px] border-black rounded-full opacity-75 flex items-center justify-center">
            <Image
              alt="userIcon"
              width={18}
              height={18}
              src={userIcon}
              className="cursor-pointer"
            />
          </div>
          <div className="w-8 h-8 border-[1px] border-black rounded-full opacity-75 flex items-center justify-center">
            <Image
              alt="cartIcon"
              width={18}
              height={18}
              src={cartIcon}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="hidden mob:block">
        <Image
          alt="burger"
          height={24}
          width={24}
          src={burgerIcon}
          onClick={onBurgerClick}
        />
      </div>
      <OpenedBurger
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
    </div>
  );
};

export default Header;
