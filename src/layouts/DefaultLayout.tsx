import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default DefaultLayout;
