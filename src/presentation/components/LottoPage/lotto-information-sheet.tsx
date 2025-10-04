import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Button } from "../common/button";
import CloseIcon from "../icons/CloseIcon";
import LottoImg from "../../static/images/event.png";
import CalendarIcon from "../../static/icons/calendar.png";
import SlotMachineIcon from "../../static/icons/slot-machine.png";
import CupIcon from "../../static/icons/cup.png";

const LottoInformationSheet: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative">
                <img
                  src={LottoImg}
                  alt=""
                  className="h-[190px] w-full rounded-t-[12px] object-cover"
                />
                <div className="absolute bottom-[15px] left-1/2 flex h-[29px] w-fit -translate-x-1/2 items-center justify-center gap-[8px] rounded-[24px] bg-white px-[12px]">
                  <div className="text-xs font-medium text-green4">
                    Số đã chọn
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
                  </div>
                </div>
                <div
                  className="absolute -top-[40px] right-[8px] flex size-[24px] items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseIcon className="size-[32px] text-white" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"85vh"}
          style={{
            background: "#FFFFFF",
            overflow: "visible",
          }}
        >
          <div className="flex flex-1 flex-col gap-[14px] overflow-auto px-[16px] py-[21px] font-Manrope">
            <div className="flex flex-col gap-[14px]">
              <div className="text-center text-lg font-bold">
                Quay số may mắn vụ Đông Xuân Khu vực Miền Trung
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="flex h-[26px] w-[290px] items-center gap-[8px] rounded-[12px] bg-green1 px-[12px]">
                  <img src={CalendarIcon} alt="" className="size-[18px]" />
                  <div className="text-xs font-medium text-green4">
                    Thời gian diễn ra: 12/04/25 - 14/05/25
                  </div>
                </div>
                <div className="flex h-[26px] w-[290px] items-center gap-[8px] rounded-[12px] bg-secondary1 px-[12px]">
                  <img src={SlotMachineIcon} alt="" className="size-[18px]" />
                  <div className="text-xs font-medium text-infor3">
                    Thời gian quay số: 12:00 - 16:00, 12/06/25
                  </div>
                </div>
                <div className="flex h-[26px] w-[290px] items-center gap-[8px] rounded-[12px] bg-alert1 px-[12px]">
                  <img src={CupIcon} alt="" className="size-[18px]" />
                  <div className="text-xs font-medium text-alert4">
                    Thời gian nhận quà: 12:00 - 16:00, 12/06/25
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { LottoInformationSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
