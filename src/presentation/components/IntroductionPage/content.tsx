import React from "react";
import { Logo } from "./logo";
import { Title } from "./title";
import { JoinButton } from "./join-button";

const Content = () => {
  return (
    <div className="relative z-[10] flex size-full flex-col items-center justify-center gap-[32px] px-[57px]">
      <Logo />
      <Title />
      <JoinButton />
    </div>
  );
};

export default Content;
