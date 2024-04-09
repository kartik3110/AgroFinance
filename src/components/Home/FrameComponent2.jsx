const FrameComponent2 = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-[142px] px-[85px] pb-[18px] box-border relative gap-[80px] min-h-[779px] max-w-full text-left text-53xl text-white font-montserrat mq750:gap-[20px_80px] mq750:pt-[92px] mq750:px-[21px] mq750:pb-5 mq750:box-border mq1225:gap-[40px_80px] mq1225:pl-[42px] mq1225:pr-[42px] mq1225:box-border">
      <div className="w-[1483px] h-[calc(100%_-_150px)] absolute !m-[0] top-[0px] right-[-29px] bottom-[150px] bg-gray-300 z-[1]" />
      <div className="w-[983px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[629px] w-[1483px] absolute !m-[0] right-[-401px] bottom-[-262px] object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-4@2x.png"
        />
        <b className="flex-1 relative leading-[104%] inline-block max-w-full z-[2] mq450:text-24xl mq450:leading-[45px] mq750:text-39xl mq750:leading-[60px]">
          Sustainable Farming Meets Technology: Building a Greener Future
        </b>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
        <div className="flex flex-row items-start justify-start gap-[40px] max-w-full mq450:flex-wrap mq450:gap-[40px_20px]">
          <button className="cursor-pointer [border:none] pt-3.5 pb-[13px] pr-9 pl-[37px] bg-darkslategray rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-teal">
            <div className="h-[50px] w-[181px] relative rounded-lg bg-darkslategray hidden" />
            <div className="w-[108px] relative text-xl font-semibold font-raleway text-white text-center inline-block min-w-[108px] z-[1]">
              Learn More
            </div>
          </button>
          <button className="cursor-pointer pt-3.5 px-[38px] pb-[13px] bg-[transparent] rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
            <div className="h-[50px] w-[181px] relative rounded-lg box-border hidden border-[1px] border-solid border-white" />
            <div className="w-[105px] relative text-xl font-semibold font-raleway text-white text-center inline-block min-w-[105px] z-[1]">
              Contact Us
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
