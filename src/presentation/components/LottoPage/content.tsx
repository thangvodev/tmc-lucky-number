import React, { FC, useState } from "react";
import { Title } from "./title";
import { Divider } from "./divider";
import { LottoPicker } from "./lotto-picker";
import { SubmitButton } from "./submit-button";
import { LottoResults } from "./lotto-results";

const Content: FC<Props> = ({ finished }) => {
  const [currentOpened, setcurrentOpened] = useState<number[]>([]);

  return (
    <div className="relative z-10 flex h-full w-full flex-col gap-[10px] overflow-x-hidden rounded-t-[20px] bg-white pb-[24px] pt-[20px]">
      <Title />
      <Divider />
      <div className="flex flex-1 flex-col gap-[10px] px-[16px]">
        {!finished ? (
          <>
            <LottoPicker
              numbers={data}
              currentOpened={currentOpened}
              setcurrentOpened={setcurrentOpened}
            />
            <SubmitButton disabled={currentOpened.length !== data.length} />
          </>
        ) : (
          <LottoResults />
        )}
      </div>
    </div>
  );
};

export default Content;

type Props = {
  finished?: boolean;
};

const data = [12, 12, 12].map((item, index) => ({
  number: item,
  key: index,
}));
