import React from "react";
import { Divider as OriginalDivider } from "antd";

export const Divider = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 size-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray1" />
      <div className="absolute right-0 top-0 size-[14px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gray1" />
      <OriginalDivider dashed className="m-0 border-[1.5px]" />
    </div>
  );
};
