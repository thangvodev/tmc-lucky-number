import React from "react";

export const Ribbon = () => {
  return (
    <div className="absolute -top-[5px] left-4">
      <div
        className="relative z-10 -skew-x-12 rounded-[4px] px-[6px] py-[4px] text-[11px] font-medium text-white"
        style={{
          boxShadow: "0px 4px 24px 0px #FFFFFF40",
          background:
            "radial-gradient(50% 50% at 50% 50%, #FF1919 0%, #E55C5C 100%)",
        }}
      >
        <div className="skew-x-12">Bốc 2 số may mắn</div>
        <div className="absolute left-[98%] top-0 z-0 border-b-[3px] border-l-[0px] border-r-[5px] border-t-[0px] border-transparent border-b-[#BB3D3D]"></div>
      </div>
    </div>
  );
};
