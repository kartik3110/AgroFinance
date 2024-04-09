const CallToAction = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[150px] box-border max-w-full text-center text-71xl text-white font-montserrat mq750:pb-[63px] mq750:box-border mq1050:pb-[97px] mq1050:box-border">
      <div className="flex-1 bg-gray-200 flex flex-col items-center justify-start pt-[173px] pb-[162px] pr-[21px] pl-5 box-border gap-[80px] max-w-full z-[1] mq450:pt-[73px] mq450:pb-[68px] mq450:box-border mq750:gap-[20px_80px] mq1050:pt-28 mq1050:pb-[105px] mq1050:box-border mq1225:gap-[40px_80px]">
        <div className="w-[1440px] h-[817px] relative bg-gray-200 hidden max-w-full" />
        <div className="w-[1113px] flex flex-col items-end justify-start gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[104%] font-bold font-inherit z-[2] mq450:text-8xl mq450:leading-[37px] mq750:text-26xl mq750:leading-[56px]">
            <p className="m-0">DECENTRALISED financing for</p>
            <p className="m-0"> farmers</p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-base font-raleway">
            <div className="w-[540px] relative leading-[24px] inline-block shrink-0 max-w-full z-[2]">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.
            </div>
          </div>
        </div>
        <div className="w-[1113px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full text-xl font-raleway">
          <div className="w-[403px] flex flex-row flex-wrap items-start justify-start gap-[51px] max-w-full mq450:gap-[25px]">
            <div className="flex-1 rounded-lg bg-darkslategray flex flex-row items-start justify-start py-3 px-[30px] box-border min-w-[114px] whitespace-nowrap z-[2]">
              <div className="h-12 w-44 relative rounded-lg bg-darkslategray hidden" />
              <div className="flex-1 relative font-semibold inline-block min-w-[116px] z-[1]">
                Get Started
              </div>
            </div>
            <button className="cursor-pointer pt-[13px] px-[29px] pb-3 bg-[transparent] flex-1 rounded-lg box-border flex flex-row items-start justify-start min-w-[114px] whitespace-nowrap z-[2] border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="h-12 w-44 relative rounded-lg box-border hidden border-[1px] border-solid border-white" />
              <div className="flex-1 relative text-xl font-semibold font-raleway text-white text-center z-[1]">
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
