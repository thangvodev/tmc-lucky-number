import React from "react";
import { ProfileCard } from "./profile-card";
import { History } from "./history";

const Content = () => {
  return (
    <div className="relative z-[10] px-[16px]">
      <div
        className="fixed inset-x-0 z-[-1] h-[60px]"
        style={{
          background:
            "linear-gradient(90deg, #0C4C24 0%, #187336 37.21%, #229345 100%)",
        }}
      />
      <div className="flex flex-col gap-[30px] py-[20px]">
        <ProfileCard />
        <History />
      </div>
    </div>
  );
};

export default Content;
