import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import { Modal } from "zmp-ui";
import PopupImg from "../../static/images/join-popup.png";
import { useNavigate } from "react-router-dom";

const JoinPopup: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleAccept() {
    setVisible(false);
    navigate("/policy");
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          verticalActions
          zIndex={9999}
          maskClassName="!z-[9999]"
          modalStyle={{
            borderRadius: "24px",
          }}
        >
          <div className="font-Manrope flex flex-col items-center gap-[23px] px-[26px] py-[36px]">
            <div className="flex flex-col items-center gap-[12px]">
              <img src={PopupImg} alt="" className="h-[160px] object-cover" />
              <div className="text-lg font-bold">Chào mừng</div>
              <div className="text-sm font-normal text-neutral8">
                Xin được chào mừng quý khách hàng{" "}
                <span className="font-medium text-black">Mỹ Linh</span> đến với
                ứng dụng bốc số may mắn của Map Pacific Singapore.
              </div>
              <div className="text-sm font-normal text-neutral8">
                Ứng dụng nhằm mục đích nâng cao trải nghiệm của khách hàng khi
                tham gia sự kiện quay số may mắn của Map Pacific Singapore.
              </div>
            </div>
            <Button
              text={
                <div className="text-base font-semibold text-white">
                  Tiếp tục
                </div>
              }
              className="h-[43px] w-[110px] flex-none rounded-[36px] px-[24px]"
              style={{
                background: "linear-gradient(270deg, #FFB62E 0%, #FC8007 100%)",
                boxShadow: "3px -3px 18px 0px #FFEEC6 inset",
              }}
              onClick={handleAccept}
            />
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

export { JoinPopup };
