import React from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { LottoInformationSheet } from "./lotto-information-sheet";

export const Title = () => {
  return (
    <div className="flex flex-col items-center gap-[8px] text-center">
      <div className="text-lg font-bold">
        Quay số may mắn vụ Đông Xuân Khu vực Miền Trung
      </div>
      <LottoInformationSheet>
        {({ open }) => (
          <div
            className="flex items-center gap-[4px] px-[10px] py-[4px]"
            onClick={open}
          >
            <div className="text-xs font-medium text-green4">
              Xem thông tin chương trình
            </div>
            <ArrowLeftIcon className="size-[11px] rotate-180 text-gray7" />
          </div>
        )}
      </LottoInformationSheet>
    </div>
  );
};
