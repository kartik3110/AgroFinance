const Testimonials = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full text-center text-53xl text-darkslategray font-montserrat mq450:pb-[63px] mq450:box-border mq1050:pb-[97px] mq1050:box-border">
      <div className="w-[1270px] flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
        <div className="w-[1244px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[690px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[524px] relative text-inherit leading-[114%] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-24xl mq450:leading-[49px] mq750:text-39xl mq750:leading-[66px]">{`Testimonials `}</h1>
            </div>
            <div className="self-stretch relative text-xl leading-[24px] font-raleway text-gray-100 mq450:text-base mq450:leading-[19px]">{`Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[72px] max-w-full text-left text-13xl text-white mq450:gap-[18px] mq750:gap-[36px]">
          <div className="flex-1 flex flex-row items-end justify-center gap-[48px] min-w-[733px] max-w-full mq750:gap-[48px_24px] mq1050:flex-wrap mq1050:min-w-full">
            <div className="h-[253px] flex flex-col items-start justify-start">
              <div className="w-[70px] h-[70px] rounded-31xl bg-white shadow-[0px_27px_24px_-12px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start p-[23px] box-border">
                <div className="h-[70px] w-[70px] relative rounded-31xl bg-white shadow-[0px_27px_24px_-12px_rgba(0,_0,_0,_0.15)] hidden" />
                <img
                  className="h-6 w-6 relative z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-darkslategray flex flex-row items-end justify-start pt-[103px] px-[116px] pb-[102px] box-border gap-[40px] min-w-[656px] max-w-full mq450:pt-[67px] mq450:pb-[66px] mq450:box-border mq750:gap-[40px_20px] mq750:pl-[29px] mq750:pr-[29px] mq750:box-border mq750:min-w-full mq1050:flex-wrap mq1050:pl-[58px] mq1050:pr-[58px] mq1050:box-border">
              <div className="h-[437px] w-[1010px] relative rounded-xl bg-darkslategray hidden max-w-full" />
              <img
                className="h-[231px] w-[231px] relative rounded-xl object-cover min-h-[231px] z-[1] mq1050:flex-1"
                loading="lazy"
                alt=""
                src="/rectangle-31@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[330px] max-w-full">
                <img
                  className="w-[212px] h-10 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-45.svg"
                />
                <div className="w-[416px] relative leading-[24px] font-semibold inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[14px] mq750:text-7xl mq750:leading-[19px]">
                  Madeline Williamson
                </div>
                <div className="w-[225px] relative text-base leading-[24px] font-light inline-block z-[1]">
                  Forward Creative Manager
                </div>
                <div className="self-stretch relative text-xl leading-[24px] font-raleway z-[1] mq450:text-base mq450:leading-[19px]">{`Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. `}</div>
              </div>
            </div>
          </div>
          <div className="h-[253px] w-[70px] flex flex-col items-start justify-start">
            <div className="self-stretch h-[70px] relative shadow-[0px_15px_91px_rgba(0,_0,_0,_0.1)]">
              <div className="absolute top-[0px] left-[0px] rounded-31xl bg-gray-500 shadow-[0px_27px_24px_-12px_rgba(0,_0,_0,_0.15)] w-full h-full" />
              <img
                className="absolute top-[23px] left-[23px] w-6 h-6 z-[1]"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
