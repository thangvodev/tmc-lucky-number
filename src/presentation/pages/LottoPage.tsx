import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { LottoContent } from "../components/LottoPage";
import EventImg from "../static/images/event.png";
import { useLocation } from "react-router-dom";

const LottoPage = () => {
  const location = useLocation();
  const { finished } = location.state || {};

  return (
    <Page className="page-content relative flex flex-1 flex-col">
      <Header
        className="topbar no-border !z-10 h-auto flex-none !bg-transparent !pb-[90px]"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[28px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
            <ArrowLeftIcon className="size-[12px] object-cover text-black" />
          </div>
        }
      />
      <img
        src={EventImg}
        alt=""
        className="fixed left-0 top-0 z-0 w-full object-cover"
      />
      <div className="flex-1 overflow-auto">
        <LottoContent finished={finished} />
      </div>
    </Page>
  );
};

export default LottoPage;
