import React, { FC } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Button } from "../common/button";
import CloseIcon from "../icons/CloseIcon";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import InstructionImg1 from "../../static/images/introduction-1.png";
import InstructionImg2 from "../../static/images/introduction-2.png";
import InstructionImg3 from "../../static/images/introduction-3.png";
import { Swiper } from "swiper/react";

const InstructionSheet: FC<Props> = ({ visible, setVisible }) => {
  const onFinish = (value: any) => {
    setVisible(false);
  };

  const initialValues = {
    option: undefined,
    notes: undefined,
    quantity: 1,
  };

  return (
    <>
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative px-[16px] pt-[12px]">
                <div className="text-center font-Manrope text-lg font-semibold">
                  Hướng dẫn sử dụng app
                </div>
                <div
                  className="absolute -top-[50px] right-[8px] flex size-[24px] items-center justify-end"
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
          handler={true}
          unmountOnClose
          height={"67vh"}
          style={{
            background: "#FFFFFF",
            padding: "8px 0 0",
            overflow: "visible",
          }}
        >
          <div className="flex flex-1 flex-col gap-[16px] pt-[16px]">
            <Swiper
              spaceBetween={10}
              slidesPerView={"auto"}
              className="h-full px-[16px] pb-[40px]"
              pagination={true}
              modules={[Pagination]}
            >
              <SwiperSlide className="!flex !w-[calc(100%-0px)] items-center">
                <Slide1 />
              </SwiperSlide>
              <SwiperSlide className="!flex !w-[calc(100%-0px)] items-center">
                <Slide2 />
              </SwiperSlide>
              <SwiperSlide className="!flex !w-[calc(100%-0px)] items-center">
                <Slide3 />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Footer */}
          <div className="z-20 mt-auto flex w-full justify-center bg-white px-[16px] pb-[20px]">
            <Button
              text={
                <div className="font-Manrope text-sm font-medium text-white">
                  Tiếp tục
                </div>
              }
              className="flex h-[45px] w-[165px] flex-none items-center justify-center rounded-[24px] bg-green6 px-[14px]"
              style={{
                background: "linear-gradient(270deg, #FFB62E 0%, #FC8007 100%)",
              }}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const Slide1 = () => {
  return (
    <div className="flex w-full flex-col items-center gap-[16px] font-Manrope">
      <img src={InstructionImg1} className="h-[222px] object-cover" />
      <div className="flex flex-col items-center gap-[12px]">
        <div className="text-base font-semibold">Bước 1</div>
        <div className="text-xs font-medium text-gray6">
          Nhấn nút “Tạo bài đăng" để tạo một bài đăng mới.
        </div>
      </div>
    </div>
  );
};
const Slide2 = () => {
  return (
    <div className="flex w-full flex-col items-center gap-[16px] font-Manrope">
      <img src={InstructionImg2} className="h-[222px] object-cover" />
      <div className="flex flex-col items-center gap-[12px]">
        <div className="text-base font-semibold">Bước 2</div>
        <div className="flex flex-col items-center gap-[4px] text-xs font-medium text-gray6">
          <div>Bốc số may mắn:</div>
          <div>+ Bốc 01 số</div>
          <div>+ Bốc tất cả</div>
        </div>
        <div className="text-[11px] font-light text-error3">
          *Lưu ý: Bốc đủ các số trước khi tham dự quay số
        </div>
      </div>
    </div>
  );
};
const Slide3 = () => {
  return (
    <div className="flex w-full flex-col items-center gap-[16px] font-Manrope">
      <img src={InstructionImg3} className="h-[222px] object-cover" />
      <div className="flex flex-col items-center gap-[12px] text-center">
        <div className="text-base font-semibold">Bước 3</div>
        <div className="text-xs font-medium text-gray6">
          Nhận tin nhắn xác nhận các số đã chọn
        </div>
        <div className="px-[30px] text-[11px] font-medium text-neutral8">
          Gặp khó khăn liên hệ nhân viên vùng hoặc Hotline hỗ trợ để được:
          19004352
        </div>
      </div>
    </div>
  );
};

export { InstructionSheet };

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};
