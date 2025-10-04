import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import { Modal } from "zmp-ui";
import FooterBg from "../../static/images/submit-popup-footer-bg.svg";
import PopupBg from "../../static/images/submit-popup-bg.svg";
import LogoImg from "../../static/images/logo.png";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";

const SubmitPopup: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleAccept() {
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          title={
            (
              <div className="relative">
                <div className="absolute -top-[35px] left-1/2 -translate-x-1/2">
                  <img
                    src={LogoImg}
                    alt=""
                    className="h-[12px] object-contain"
                  />
                </div>
                <div
                  className="absolute -top-[40px] right-0 flex size-[24px] items-center justify-end"
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
          verticalActions
          zIndex={9999}
          maskClassName="!z-[9999]"
          modalStyle={{
            borderRadius: "24px",
            overflow: "visible",
          }}
        >
          {/* Popup Background */}
          <img
            src={PopupBg}
            className="pointer-events-none absolute bottom-0 z-0 -translate-x-[10px] -translate-y-[63px] scale-[1.2]"
          />
          <div
            className="relative flex flex-col items-center gap-[23px] rounded-[14px] px-[26px] pb-[45px] pt-[30px] font-Manrope"
            style={{
              background: "linear-gradient(180deg, #48DD8E 0%, #009345 100%)",
            }}
          >
            {/* Background */}
            <div className="absolute inset-[10px] z-0 rounded-[14px] bg-white" />
            {/* Footer Background */}
            <img
              src={FooterBg}
              className="absolute bottom-0 z-0 w-full rounded-b-[14px]"
            />
            {/* Content */}
            <div className="z-10 flex flex-col items-center justify-center gap-[10px]">
              <div className="flex flex-col items-center gap-[4px]">
                <div className="text-sm font-semibold">
                  Chúc mừng{" "}
                  <span className="text-base text-[#FFB62E]">Mỹ Linh</span>
                </div>
                <div className="text-xs font-normal text-neutral6">
                  Đã bốc{" "}
                  <span className="text-sm font-semibold text-error3">2</span>{" "}
                  số may mắn thành công
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <div
                  className="rounded-[6px] bg-[#009345] px-[4px] text-lg font-bold text-white"
                  style={{ boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset" }}
                >
                  2
                </div>
                <div
                  className="rounded-[6px] bg-[#009345] px-[4px] text-lg font-bold text-white"
                  style={{ boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset" }}
                >
                  9
                </div>
                <div
                  className="rounded-[6px] bg-[#009345] px-[4px] text-lg font-bold text-white"
                  style={{ boxShadow: "0px 2.46px 2.46px 0px #9BFFA540 inset" }}
                >
                  9
                </div>
              </div>
              <Button
                text={
                  <div className="text-sm font-medium text-white">
                    Danh sách đã bốc
                  </div>
                }
                className="h-[38.67px] flex-none rounded-[28px] px-[18.67px]"
                style={{
                  boxShadow:
                    "2.33px -2.33px 14px 0px #C6FFE0 inset,0px 2.33px 14px 0px #2C7B6824",
                  background:
                    "linear-gradient(270deg, #FFB62E 0%, #FC8007 100%)",
                }}
                onClick={() => navigate("/profile")}
              />
            </div>
            {/* Card Footer  */}
            <div className="absolute inset-x-0 -bottom-[100px] flex flex-col items-center gap-[20px]">
              <div className="text-xs font-light text-white">
                Kiểm tra tin nhắn để xác nhận
              </div>
              <Button
                text={
                  <div className="text-sm font-semibold text-white">
                    Về trang chủ
                  </div>
                }
                className="h-[41px] flex-none rounded-[40px] border-[1.5px] border-white px-[24px]"
                style={{
                  boxShadow:
                    "0px 4px 12px 0px #FFFFFF40 inset,0px 4px 12px 0px #BCBCBC40",
                }}
                onClick={handleAccept}
              />
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

export { SubmitPopup };
