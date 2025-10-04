import React from "react";
import { Header, Page } from "zmp-ui";
import { PolicyPageContent } from "../components/PolicyPage";
import Logo from "../static/images/logo.png";

const PolicyPage = () => {
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
                <img src={Logo} className="h-[12px] object-cover" />
              </div>
            </>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !pb-[60px] !pt-[20px]"
        style={{
          background:
            "linear-gradient(90deg, #0C4C24 0%, #187336 37.21%, #229345 100%)",
        }}
        showBackIcon={false}
      />
      <div className="flex flex-1 overflow-visible">
        <PolicyPageContent />
      </div>
    </Page>
  );
};

export default PolicyPage;
