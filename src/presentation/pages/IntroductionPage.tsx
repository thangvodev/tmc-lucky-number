import React, { FC } from "react";
import { Page } from "zmp-ui";
import IntroBg from "../static/images/bg-intro.png";
import { IntroductionPageContent } from "../components/IntroductionPage";

const IntroductionPage: FC = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col">
      <img
        src={IntroBg}
        alt=""
        className="fixed left-0 top-0 z-0 w-full object-cover"
      />
      <div className="flex-1 overflow-auto">
        <IntroductionPageContent />
      </div>
    </Page>
  );
};

export default IntroductionPage;
