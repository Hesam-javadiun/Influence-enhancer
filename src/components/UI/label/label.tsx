import { ReactNode } from "react";

type LabelProps = {
  children: ReactNode
};

const Label = function ({ children }: LabelProps) {
  return <li className="bg-red-400">{children}</li>;
};

export default Label;
