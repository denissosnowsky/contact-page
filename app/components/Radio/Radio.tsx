import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

type RadioProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string; selectedValue?: string };

const Radio = (props: RadioProps): JSX.Element => {
  const { label, selectedValue, ...inputProps } = props;

  return (
    <div className="flex gap-[10px] items-center">
      <input
        type="radio"
        {...inputProps}
        id={String(props.value)}
        checked={props.value === selectedValue}
      />
      <label
        className={`text-black text-xs leading-5 font-normal ${poppins.className} cursor-pointer`}
        htmlFor={String(props.value)}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
