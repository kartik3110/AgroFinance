import { useMemo } from "react";

const Option1 = ({ icon, eliminateCollateralDepend, propFlex }) => {
  const option1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className="flex-[0.8955] rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[67px] px-[42px] pb-4 box-border gap-[28px] min-w-[211px] max-w-[281px] text-center text-5xl text-darkslategray font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1"
      style={option1Style}
    >
      <div className="w-[281px] h-[281px] relative rounded-6xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
      <div className="self-stretch h-20 flex flex-row items-start justify-start py-0 pr-[59px] pl-[58px] box-border">
        <img
          className="h-20 w-20 relative z-[1]"
          loading="lazy"
          alt=""
          src={icon}
        />
      </div>
      <div className="self-stretch relative leading-[30px] z-[1] mq450:text-lgi mq450:leading-[24px]">
        {eliminateCollateralDepend}
      </div>
    </div>
  );
};

export default Option1;
