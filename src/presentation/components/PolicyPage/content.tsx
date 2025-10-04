import React from "react";
import { HeaderLabel } from "./header-label";
import { Policy } from "./policy";
import { AcceptPolicy } from "./accept-policy";

const Content = () => {
  return (
    <div className="relative flex-1 rounded-t-[20px] bg-[#F2FFF5]">
      <HeaderLabel />
      <Policy />
      <AcceptPolicy />
    </div>
  );
};

export default Content;
