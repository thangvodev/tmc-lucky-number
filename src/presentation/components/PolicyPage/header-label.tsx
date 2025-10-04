import React from "react";

export const HeaderLabel = () => {
  return (
    <div
      className="absolute left-1/2 top-0 flex h-[33px] w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] px-[18.67px]"
      style={{
        boxShadow:
          "2.33px -2.33px 14px 0px #C6FFE0 inset, 0px 2.33px 14px 0px #2C7B6824",
        background: "linear-gradient(270deg, #48E364 0%, #20AE00 100%)",
      }}
    >
      <span className="text-sm font-semibold text-white">
        Điều khoản & Bảo mật
      </span>
    </div>
  );
};
