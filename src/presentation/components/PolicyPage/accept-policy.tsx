import React from "react";
import { Checkbox } from "../common/checkbox";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

export const AcceptPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-x-0 bottom-[114px] z-[10] flex flex-col">
        <div
          className="h-[20px] w-full bg-[#FFA438]"
          style={{
            borderTopLeftRadius: "200% 40px",
            borderTopRightRadius: "200% 40px",
          }}
        />
      </div>
      <div className="fixed inset-x-0 bottom-0 z-[10] flex flex-col">
        <div
          className="h-[20px] w-full bg-green4"
          style={{
            borderTopLeftRadius: "200% 40px",
            borderTopRightRadius: "200% 40px",
          }}
        />
        <div className="flex flex-col items-center gap-[12px] bg-green4 px-[26px] pb-[16px]">
          <Checkbox color="#40A06F" className="custom-checkbox">
            <div className="text-xs font-normal text-white">
              Tôi đồng ý cung cấp thông tin cá nhận theo quy định về quyền riêng
              tư (Nghị định số 13/2023/NĐ - CP)
            </div>
          </Checkbox>
          <Button
            text={
              <div className="text-base font-semibold text-white">Đồng ý</div>
            }
            className="flex h-[43px] flex-none items-center justify-center rounded-[36px] px-[24px]"
            style={{
              boxShadow: "3px -3px 18px 0px #FFEEC6 inset",
              background: "linear-gradient(270deg, #FFB62E 0%, #FC8007 100%)",
            }}
            onClick={() => navigate("/home")}
          />
        </div>
      </div>
    </>
  );
};
