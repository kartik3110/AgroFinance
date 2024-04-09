const Section2 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full text-left text-53xl text-darkslategray font-montserrat mq450:pb-[63px] mq450:box-border mq1050:pb-[97px] mq1050:box-border">
      <div className="w-[1270px] flex flex-row items-start justify-start gap-[100px] max-w-full mq450:gap-[100px_25px] mq750:gap-[100px_50px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[403px] max-w-full mq750:gap-[20px_40px] mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[104%] font-bold font-inherit mq450:text-24xl mq450:leading-[45px] mq750:text-39xl mq750:leading-[60px]">
              Developing a decentralized platform offering zero-collateral loans
              to farmers
            </h1>
            <div className="self-stretch relative text-base leading-[30px] font-raleway text-gray-100">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-4 px-[30px] pb-[15px] bg-darkslategray rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-teal">
            <div className="h-[54px] w-44 relative rounded-lg bg-darkslategray hidden" />
            <div className="relative text-xl font-semibold font-raleway text-white text-left inline-block min-w-[116px] z-[1]">
              Get Started
            </div>
          </button>
        </div>
        <div className="h-[575px] w-[550px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border min-w-[550px] max-w-full text-17xl mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[544px] flex-1 relative rounded-6xl flex items-center justify-center z-[0]">
              <img
                className="h-full flex-1 max-w-full overflow-hidden object-contain absolute left-[20px] top-[19px] w-full [transform:scale(1.243)]"
                loading="lazy"
                alt=""
                src="/rectangle-10@2x.png"
              />
            </div>
            <div className="w-[346px] !m-[0] absolute bottom-[-53px] left-[calc(50%_-_173px)] flex flex-row items-start justify-end py-[35px] px-[58px] box-border">
              <div className="h-[calc(100%_+_239px)] w-[calc(100%_-_239px)] absolute !m-[0] top-[0px] right-[-107px] bottom-[-239px] left-[346px] rounded-11xl bg-white shadow-[0px_46px_60px_-33px_rgba(0,_0,_0,_0.1)] [transform:_rotate(90deg)] [transform-origin:0_0] z-[1]" />
              <b className="w-[212px] relative leading-[104%] inline-block shrink-0 z-[2] mq450:text-3xl mq450:leading-[22px] mq750:text-10xl mq750:leading-[30px]">
                Since 1976
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
