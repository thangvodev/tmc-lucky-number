import React, { FC } from "react";
import { Tag } from "../common/tag";
import CalendarIcon from "../icons/CalendarIcon";
import CupHoldIcon from "../../static/icons/cup-hold.png";
import { Divider } from "antd";

const History = () => {
  return (
    <div className="relative flex flex-col gap-[16px] rounded-[20px] bg-white">
      <div
        className="ml-[16px] flex h-[33px] w-fit flex-none -translate-y-1/2 items-center justify-center rounded-[28px] px-[18.67px]"
        style={{
          boxShadow:
            "2.33px -2.33px 14px 0px #C6FFE0 inset, 0px 2.33px 14px 0px #2C7B6824",
          background: "linear-gradient(270deg, #48E364 0%, #20AE00 100%)",
        }}
      >
        <span className="text-sm font-semibold text-white">
          Lịch sử chương trình
        </span>
      </div>
      <div className="flex w-full flex-col gap-[16px]">
        <HistoryItem finished={true} />
        <Divider className="m-0 border-[2px] border-stroke3" />
        {Array.from({ length: 3 }).map((_, index) => (
          <React.Fragment key={index}>
            <HistoryItem />
            <Divider className="m-0 border-[2px] border-stroke3" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const HistoryItem: FC<{ finished?: boolean }> = ({ finished }) => {
  return (
    <div className="flex flex-col gap-[8px] px-[16px]">
      <div className="text-sm font-medium">
        Quay số may mắn vụ Đông Xuân Khu vực Miền Trung
      </div>
      <div className="flex gap-[12px]">
        {!finished ? (
          <Tag
            className="m-0 w-fit rounded-[24px] border-none py-[4px]"
            color="#FFB62E"
          >
            <span className="text-xs font-medium text-[#FFB62E]">
              Sắp diễn ra
            </span>
          </Tag>
        ) : (
          <Tag
            className="m-0 w-fit rounded-[24px] border-none py-[4px]"
            color="#ECFEF5"
          >
            <span className="text-xs font-medium text-green4">Đã diễn ra</span>
          </Tag>
        )}
        <Tag className="m-0 w-fit rounded-[24px] border-none !bg-[#FBF9F8] py-[4px]">
          <div className="flex h-full items-center gap-[4px]">
            <CalendarIcon className="size-[16px] text-neutral6" />
            <span className="text-xs font-medium text-neutral6">
              15/10/2025
            </span>
          </div>
        </Tag>
      </div>
      <Divider dashed className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-neutral6">
          Bạn đã rút{" "}
          <span className="text-sm font-semibold text-error3">2</span> số dự
          thưởng
        </div>
        <div className="flex items-center gap-[7.38px]">
          <div className="h-fit rounded-[4px] border border-stroke1 bg-neutral2 px-[2.46px] text-[11px] font-bold leading-4 text-neutral6">
            2
          </div>
          <div className="h-fit rounded-[4px] border border-stroke1 bg-neutral2 px-[2.46px] text-[11px] font-bold leading-4 text-neutral6">
            9
          </div>
        </div>
      </div>
      {finished ? (
        <div
          className="flex items-center justify-between gap-[8px] rounded-[12px] border border-[#FFD6B0] px-[12px] py-[8px]"
          style={{
            background:
              "linear-gradient(90.44deg, #FFF6E1 1.86%, #FFFAE6 92.58%)",
          }}
        >
          <div className="flex items-center gap-[8px]">
            <img src={CupHoldIcon} alt="" className="size-[24px]" />
            <div className="text-xs font-normal text-neutral6">
              <span className="font-medium text-error3">Chúc mừng!</span> Bạn đã
              trúng thưởng số
            </div>
          </div>
          <div className="h-fit rounded-[6px] bg-error3 px-[4px] text-sm font-semibold text-white">
            2
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { History };
