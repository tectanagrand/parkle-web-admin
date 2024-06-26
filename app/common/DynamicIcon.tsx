import { FC } from "react";
import * as HIcons from "@heroicons/react/24/outline";

const DynamicHeroIcon: FC<{ icon: string }> = (props) => {
  const { ...icons } = HIcons;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className="h-5 w-5" aria-hidden="true" />
    </>
  );
};

export default DynamicHeroIcon;
