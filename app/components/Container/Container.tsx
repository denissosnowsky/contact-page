import { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container = ({ children, className }: ContainerProps): JSX.Element => {
  return (
    <div className={`${className ?? ""} pl-20 pr-20 mob:pl-5 mob:pr-5`}>
      {children}
    </div>
  );
};

export default Container;
