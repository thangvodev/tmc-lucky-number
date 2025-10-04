import React from "react";
import CustomerLogo from "../../static/images/customer-logo.png";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../../static/icons/phone-icon.png";
import { Divider } from "antd";

export const ProfileCard = () => {
  return (
    <div className="relative rounded-[20px] border border-stroke1 bg-white px-[15px] pb-[24px] pt-[40px]">
      <img
        src={CustomerLogo}
        alt=""
        className="absolute left-1/2 top-0 size-[56px] -translate-x-1/2 -translate-y-[20px] rounded-[87.5px] border-[2px] border-white"
      />
      <div className="flex flex-col items-center gap-[8px]">
        <div className="text-center text-base font-semibold">
          Công ty TNHH Vật Tư Nông Nghiệp Một Thành Viên Hoàng Đạt{" "}
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <LocationIcon className="size-[18px] text-error3" />
            <div className="text-sm font-medium text-neutral8">
              Tỉnh Long An
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <img src={PhoneIcon} className="neutral5 size-[18px]" />
            <div className="text-sm font-medium text-neutral8">023496876</div>
          </div>
        </div>
      </div>
      <div
        className="mt-[20px] flex flex-col gap-[8px] rounded-[14px] px-[16px] pb-[14px] pt-[20px]"
        style={{
          border: "2px solid #48DD8E",
          background: "linear-gradient(270deg, #FCFFFC 0%, #ECFEF5 100%)",
        }}
      >
        <div className="text-sm font-medium">
          Quay số may mắn vụ Đông Xuân Khu vực Miền Trung
        </div>
        <Divider dashed className="m-0" />
        <div className="flex items-center justify-between">
          <div className="text-sm font-normal text-neutral6">
            Bạn đã rút <span className="font-semibold text-green4">2</span> số
            dự thưởng
          </div>
          <div className="flex items-center gap-[7.38px]">
            <div
              className="h-fit rounded-[4px] bg-[#009345] px-[2.46px] text-[11px] font-bold leading-4 text-white"
              style={{
                boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset",
              }}
            >
              2
            </div>
            <div
              className="h-fit rounded-[4px] bg-[#009345] px-[2.46px] text-[11px] font-bold leading-4 text-white"
              style={{
                boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset",
              }}
            >
              9
            </div>
            <div
              className="h-fit rounded-[4px] bg-[#009345] px-[2.46px] text-[11px] font-bold leading-4 text-white"
              style={{
                boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset",
              }}
            >
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
