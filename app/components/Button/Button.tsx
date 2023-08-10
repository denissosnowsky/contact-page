import { DetailedHTMLProps } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { size: "big" | "small" };

const Button = (props: ButtonProps): JSX.Element => {
  const { className, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={`${className} ${
        props.size === "big" ? "buttonLarge" : "buttonSmall"
      } ${poppins.className} w-fit justify-end items-end mob:text-xs`}
    />
  );
};

export default Button;
