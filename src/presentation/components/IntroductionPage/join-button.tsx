import React from "react";
import { Button } from "../common/button";
import { JoinPopup } from "./join-popup";

export const JoinButton = () => {
  return (
    <div className="flex flex-col items-center gap-[14px]">
      <JoinPopup>
        {({ open }) => (
          <Button
            text={
              <div className="text-lg font-bold text-white">Tham gia ngay</div>
            }
            className="flex h-[54px] flex-none items-center justify-center rounded-[36px] px-[24px]"
            style={{
              boxShadow: "3px -3px 18px 0px #FFEEC6 inset",
              background: "linear-gradient(270deg, #FFB62E 0%, #FC8007 100%)",
            }}
            onClick={open}
          />
        )}
      </JoinPopup>

      <div className="text-xs font-normal text-white underline">
        Xem điều khoản và bảo mật
      </div>
    </div>
  );
};
