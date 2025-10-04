import React from "react";
import CustomerImg from "../../static/images/customer.png";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-full items-center justify-between rounded-[14px] border border-stroke3 bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 8px 0px #DEDEDE1A" }}
      onClick={() => navigate("/profile")}
    >
      <div className="flex items-center gap-[10px]">
        <img
          src={CustomerImg}
          alt=""
          className="size-[48px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="text-xs font-medium text-green4">Xin chào,</div>
          <div className="text-base font-semibold">Mỹ Linh</div>
        </div>
      </div>
      <Button
        text={
          <div className="text-xs font-medium text-neutral6">Xem lịch sử</div>
        }
        className="h-[29px] flex-none rounded-[24px] px-[12px]"
        style={{
          boxShadow: "2px 2px 12px 0px #FFFFFF inset",
          background: "linear-gradient(270deg, #CEFFDD 0%, #ADFFA9 100%)",
        }}
      />
    </div>
  );
};
