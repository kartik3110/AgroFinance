import Rice from "./Rice";

const FrameComponent3 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[150px] pr-5 pl-[34px] box-border max-w-full text-center text-53xl text-darkslategray font-montserrat mq750:pb-[63px] mq750:box-border mq1050:pb-[97px] mq1050:box-border">
      <div className="w-[1244px] flex flex-col items-end justify-start gap-[80px] max-w-full mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
        <div className="w-[1185px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[841px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[75px] font-bold font-inherit mq450:text-24xl mq450:leading-[45px] mq750:text-39xl mq750:leading-[60px]">
              Our Featured Product
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-xl text-gray-100 font-raleway">
              <div className="w-[540px] relative leading-[24px] inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[19px]">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth Por scientie, musica.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1244px] h-[508px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[40px] max-w-full text-5xl mq750:gap-[40px_20px]">
          <Rice rectangle10="/rectangle-10-1@2x.png" rice="Rice" />
          <div className="self-stretch w-[281px] rounded-6xl bg-white shadow-[0px_19px_33px_-16px_rgba(0,_0,_0,_0.25)] shrink-0 flex flex-col items-start justify-start pt-[54px] px-[42px] pb-[52px] box-border gap-[40px] mq750:pt-[35px] mq750:pb-[34px] mq750:box-border">
            <div className="w-[281px] h-[508px] relative rounded-6xl bg-white shadow-[0px_19px_33px_-16px_rgba(0,_0,_0,_0.25)] hidden" />
            <img
              className="w-[189px] h-[190px] relative rounded-6xl object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[42px]">
                  <div className="w-[98px] relative leading-[24px] inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[19px]">
                    Wheat
                  </div>
                </div>
                <div className="self-stretch h-[124px] relative text-base leading-[30px] font-raleway text-gray-100 inline-block shrink-0 z-[1]">{`Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. `}</div>
              </div>
            </div>
          </div>
          <Rice
            rectangle10="/rectangle-12-1@2x.png"
            rice="Pumpkin"
            propAlignSelf="stretch"
            propWidth="unset"
            propWidth1="unset"
            propFlex="1"
          />
          <Rice
            rectangle10="/rectangle-13@2x.png"
            rice="Cabbage"
            propAlignSelf="unset"
            propWidth="175px"
            propWidth1="unset"
            propFlex="1"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-xl">
          <b className="w-56 relative [text-decoration:underline] leading-[21px] inline-block shrink-0 mq450:text-base mq450:leading-[17px]">
            See all product
          </b>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
