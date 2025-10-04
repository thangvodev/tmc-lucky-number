import { Divider } from "antd";
import React, { FC } from "react";
import CupIcon from "../../static/icons/cup-win.png";
import clsx from "clsx";

export const LottoResults = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {/* Special */}
      <div className="flex items-center justify-between">
        <div className="flex gap-[8px]">
          <div className="flex size-[40px] items-center justify-center rounded-full bg-[#FFF1C7]">
            <img src={CupIcon} alt="" className="size-[32px]" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="text-sm font-medium">Giải đặc biệt</div>
            <div className="text-xs font-normal text-neutral6">1 giải</div>
          </div>
        </div>
        <div className="flex items-center gap-[4px] rounded-[8px] bg-[#FFE6BA] p-[8px]">
          <div
            className="rounded-[6px] bg-error3 px-[4px] text-sm font-semibold text-white"
            style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
          >
            2
          </div>
          <div
            className="rounded-[6px] bg-error3 px-[4px] text-sm font-semibold text-white"
            style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
          >
            4
          </div>
          <div
            className="rounded-[6px] bg-error3 px-[4px] text-sm font-semibold text-white"
            style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
          >
            6
          </div>
          <div
            className="rounded-[6px] bg-error3 px-[4px] text-sm font-semibold text-white"
            style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
          >
            8
          </div>
        </div>
      </div>
      <Divider dashed className="m-0" />
      {/* Other */}
      <div className="flex flex-col gap-[12px]">
        <div className="text-base font-semibold">Các giải khác</div>
        <div className="flex flex-col gap-[20px]">
          {/* First place */}
          <div className="flex flex-col gap-[8px]">
            <div className="text-sm font-medium">Giải nhất</div>
            <div className="flex flex-wrap items-center gap-[12px]">
              <NumberRender numbers={[2, 4, 6]} highlight />
              <NumberRender numbers={[4, 12, 6, 8]} highlight />
            </div>
          </div>
          {/* Second place */}
          <div className="flex flex-col gap-[8px]">
            <div className="text-sm font-medium">Giải nhì</div>
            <div className="flex flex-wrap items-center gap-[12px]">
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
            </div>
          </div>
          {/* Third place */}
          <div className="flex flex-col gap-[8px]">
            <div className="text-sm font-medium">Giải nhì</div>
            <div className="flex flex-wrap items-center gap-[12px]">
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
              <NumberRender numbers={[2, 4, 6]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NumberRender: FC<{ numbers: number[]; highlight?: boolean }> = ({
  numbers,
  highlight,
}) => {
  return (
    <div className="flex w-fit items-center gap-[4px] rounded-[6px] bg-[#EFEFEF] p-[4px]">
      {numbers.map((number, key) => (
        <div
          key={key}
          className={clsx(
            "h-fit rounded-[4px] border border-stroke1 bg-white px-[4px] text-sm font-medium text-neutral8",
            { "!text-error3": highlight },
          )}
        >
          {number}
        </div>
      ))}
    </div>
  );
};
