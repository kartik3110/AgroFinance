import { useMemo } from "react";

const Rice = ({
  rectangle10,
  rice,
  propAlignSelf,
  propWidth,
  propWidth1,
  propFlex,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const riceStyle = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  return (
    <div className="self-stretch w-[281px] rounded-6xl bg-white shadow-[0px_19px_33px_-16px_rgba(0,_0,_0,_0.25)] shrink-0 flex flex-col items-start justify-start pt-[54px] px-[45px] pb-[52px] box-border gap-[40px] text-center text-5xl text-darkslategray font-montserrat mq750:pt-[35px] mq750:pb-[34px] mq750:box-border">
      <div className="w-[281px] h-[508px] relative rounded-6xl bg-white shadow-[0px_19px_33px_-16px_rgba(0,_0,_0,_0.25)] hidden" />
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-px">
        <img
          className="h-[190px] w-[189px] relative rounded-6xl object-cover z-[1]"
          alt=""
          src={rectangle10}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 px-[42px]"
          style={frameDivStyle}
        >
          <div
            className="w-[98px] relative leading-[24px] inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[19px]"
            style={riceStyle}
          >
            {rice}
          </div>
        </div>
        <div className="self-stretch h-[124px] relative text-base leading-[30px] font-raleway text-gray-100 inline-block shrink-0 z-[1]">{`Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. `}</div>
      </div>
    </div>
  );
};

export default Rice;
