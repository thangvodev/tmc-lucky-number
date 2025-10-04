import React, { useEffect, useState } from "react";
import { Profile } from "./profile";
import { EventList } from "./event-list";
import { InstructionSheet } from "./instruction-sheet";

const Content = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative z-[10]">
      <div
        className="fixed inset-x-0 z-[-1] h-[20px]"
        style={{
          background:
            "linear-gradient(90deg, #0C4C24 0%, #187336 37.21%, #229345 100%)",
        }}
      />
      <div className="flex size-full flex-col items-center gap-[20px] px-[16px] pb-[50px]">
        <Profile />
        <EventList />
      </div>
      <InstructionSheet visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Content;
