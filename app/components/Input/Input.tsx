"use client";

import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  classNameLabel?: string;
  classNameInput?: string;
};

const Input = (props: InputProps): JSX.Element => {
  const { classNameLabel, classNameInput, label, ...inputProps } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div
      className={`${poppins.className} ${
        isFocused ? "text-black" : "text-fifthColor"
      } font-medium flex flex-col gap-1`}
    >
      <label
        className={`text-xs leading-5 w-full ${classNameLabel ?? ""} ${
          value.length && "text-black"
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        {...inputProps}
        value={props.value ?? value}
        onFocus={(e) => {
          onFocus();
          props.onFocus && props.onFocus(e);
        }}
        onBlur={(e) => {
          onBlur();
          props.onBlur && props.onBlur(e);
        }}
        onChange={props.onChange ?? onChange}
        className={`text-sm leading-5 w-full border-b-[1px] border-fifthColor focus:border-black pb-[10px] ${
          classNameInput ?? ""
        }`}
      />
    </div>
  );
};

export default Input;
