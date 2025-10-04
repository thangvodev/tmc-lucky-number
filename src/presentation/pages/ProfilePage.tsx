import React from "react";
import { Header, Page } from "zmp-ui";
import Logo from "../static/images/logo.png";
import { ProfilePageContent } from "../components/ProfilePage";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";

const ProfilePage = () => {
  return (
    <Page
      className="page-content relative flex flex-1 flex-col"
      style={{
        background:
          "linear-gradient(90deg, #0C4C24 0%, #187336 37.21%, #229345 100%)",
      }}
    >
      <Header
        title={
          (
            <>
              <div className="flex w-[calc(100%-100px)] items-center justify-between">
                <div className="pl-[12px] text-white">Cá nhân</div>
              </div>
            </>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !pb-[10px] !pt-[20px]"
        style={{
          background:
            "linear-gradient(90deg, #0C4C24 0%, #187336 37.21%, #229345 100%)",
        }}
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[28px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
            <ArrowLeftIcon className="size-[12px] object-cover text-black" />
          </div>
        }
      />
      <div className="flex-1 overflow-auto bg-[#F6F6F6]">
        <ProfilePageContent />
      </div>
    </Page>
  );
};

export default ProfilePage;
