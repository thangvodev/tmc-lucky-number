import React, { FC, useEffect, useState } from "react";
import { Button } from "../common/button";
import LottoHiddenIcon from "../../static/icons/lotto-hidden.png";
import LottoItemBg from "../../static/images/lotto-item-bg.png";

const LottoPicker: FC<Props> = ({
  numbers,
  currentOpened,
  setcurrentOpened,
}) => {
  function addCurrentOpen(index) {
    const newCurrentOpen = [...currentOpened, index];
    setcurrentOpened(newCurrentOpen);
  }

  function openAll() {
    setcurrentOpened(numbers.map((item) => item.key));
  }

  return (
    <div
      className="flex flex-1 flex-col gap-[12px] rounded-[12px] px-[12px] py-[19px]"
      style={{
        boxShadow: "0px 4px 8px 0px #9D8B7D40",
        background:
          "radial-gradient(50% 50% at 50% 50%, #FFE5D6 0%, #FFE2BF 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-[8px]">
        <div className="flex w-full items-center justify-between">
          <div
            className="flex h-[33px] items-center rounded-[8px] bg-[#C05B28] px-[8px]"
            style={{
              boxShadow:
                "0px 2px 4px 0px #62373740 inset, 0px 4px 4px 0px #FFECC740 inset",
              border: "2px solid #EE8F57",
            }}
          >
            <span className="text-sm font-bold text-[#FFFCE3]">
              Danh sách số
            </span>
          </div>
          <Button
            text={
              <div className="text-sm font-semibold text-white">Mở tất cả</div>
            }
            style={{ boxShadow: "3px -3px 18px 0px #C6FFDE9C inset" }}
            className="flex h-[33px] flex-none items-center justify-center rounded-[36px] border-[1.5px] border-white bg-[#14B668] px-[12px]"
            onClick={openAll}
          />
        </div>
        {currentOpened.length ? (
          <div className="text-sm font-normal text-error3">
            Đã mở {currentOpened.length} số
          </div>
        ) : (
          <div className="text-sm font-normal text-error3">Nhấn để mở số</div>
        )}
        <div className="flex gap-[20px]">
          {numbers.map((number, index) => (
            <LottoPickerItem
              key={index}
              number={number.number}
              show={currentOpened.includes(number.key)}
              onChange={() => addCurrentOpen(number.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const LottoPickerItem: FC<{
  number: number;
  onChange: () => void;
  show: boolean;
}> = ({ number, onChange, show }) => {
  return (
    <>
      {!show ? (
        <div
          className="flex size-[48px] items-center justify-center rounded-[8px] bg-[#EABE8A]"
          style={{
            boxShadow:
              "0px 1px 1px 0px #A6855C7A inset,1px -1px 4px 0px #FAD68D40 inset,0px 1px 0px 0px #FFEDB7EB,0px 4px 4px 0px #F9FFE21F inset",
          }}
          onClick={onChange}
        >
          <img src={LottoHiddenIcon} alt="" className="size-[24px]" />
        </div>
      ) : (
        <div
          className="relative flex size-[48px] items-center justify-center overflow-hidden rounded-[8px]"
          style={{
            boxShadow:
              "0px 1px 1px 0px #A6855C7A inset,1px -1px 4px 0px #FAD68D40 inset,0px 1px 0px 0px #FFEDB7EB,0px 4px 4px 0px #F9FFE21F inset",
          }}
        >
          <img
            src={LottoItemBg}
            className="absolute inset-x-0 bottom-0 top-0 z-[0]"
          />
          <div className="z-10 text-[15px] font-bold text-white">{number}</div>
        </div>
      )}
    </>
  );
};

export { LottoPicker };

type Props = {
  numbers: { number: number; key: any }[];
  currentOpened: number[];
  setcurrentOpened: any;
};
