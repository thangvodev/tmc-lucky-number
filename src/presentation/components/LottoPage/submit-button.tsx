import React, { FC } from "react";
import { Button } from "../common/button";
import clsx from "clsx";
import { SubmitPopup } from "./submit-popup";

export const SubmitButton: FC<{ disabled: boolean }> = ({ disabled }) => {
  return (
    <div className="flex w-full justify-center bg-white pt-[10px]">
      <SubmitPopup>
        {({ open }) => (
          <Button
            text={
              <div
                className={clsx("font-Manrope text-sm font-medium text-white", {
                  "!text-white": disabled,
                })}
              >
                Xác nhận
              </div>
            }
            className={clsx(
              "flex h-[45px] w-[165px] flex-none items-center justify-center rounded-[24px] bg-green6 px-[14px]",
              {},
            )}
            style={{
              background: disabled
                ? "#EBE8E7"
                : "linear-gradient(270deg, #FFB62E 0%, #FC8007 100%)",
            }}
            disabled={disabled}
            onClick={open}
          />
        )}
      </SubmitPopup>
    </div>
  );
};
