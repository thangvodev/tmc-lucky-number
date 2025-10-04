import React, { FC } from "react";
import EventImg from "../../static/images/event.png";
import { Ribbon } from "./ribbon";
import { Divider } from "antd";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <EventItem chosenNumber={[]} />
      {Array.from({ length: 5 }).map((_, index) => (
        <EventItem key={index} chosenNumber={[2, 9]} finished />
      ))}
    </div>
  );
};

const EventItem: FC<{ chosenNumber: number[]; finished?: boolean }> = ({
  chosenNumber,
  finished,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-[172px] rounded-[12px] border-2 border-white"
      style={{ boxShadow: "0px 4px 12px 0px #D1DDD540" }}
      onClick={() => navigate("/lotto", { state: { finished } })}
    >
      {/* Background */}
      <img
        src={EventImg}
        alt=""
        className="size-full rounded-[12px] object-cover"
      />

      {/* Ribbon */}
      <Ribbon />

      {/* Footer */}
      <div className="absolute inset-x-0 top-[127px] flex items-center justify-center gap-[12px]">
        <div className="flex h-[29px] items-center justify-center gap-[8px] rounded-[24px] bg-white px-[12px]">
          <div className="text-xs font-medium text-[#FFB62E]">Sắp diễn ra</div>
          <Divider type="vertical" className="m-0" />
          <div className="text-xs font-medium text-neutral6">
            12 - 10 - 2025
          </div>
        </div>
        {!chosenNumber.length ? (
          <Button
            text={
              <div className="text-xs font-medium text-white">Chơi ngay</div>
            }
            className="h-[29px] w-[112px] flex-none rounded-[24px]"
            style={{
              background: "linear-gradient(270deg, #FFB62E 0%, #FC8007 100%)",
              boxShadow:
                "2px -2px 12px 0px #FFEEC6 inset, 0px 4px 2px 0px #F7EC2B40",
            }}
          />
        ) : (
          <div className="flex h-[29px] w-[125px] items-center justify-center gap-[8px] rounded-[24px] bg-white">
            <div className="text-xs font-medium text-green4">Số đã chọn</div>
            <div className="flex gap-[7.38px]">
              <div
                className="rounded-[4px] bg-[#009345] px-[2.46px] text-[11px] font-bold text-white"
                style={{ boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset" }}
              >
                {chosenNumber[0]}
              </div>
              <div
                className="rounded-[4px] bg-[#009345] px-[2.46px] text-[11px] font-bold text-white"
                style={{ boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset" }}
              >
                {chosenNumber[1]}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { EventList };
