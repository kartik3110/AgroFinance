const Footer = () => {
  return (
    <footer className="self-stretch w-full flex flex-row items-start justify-start pt-[170px] px-[84px] pb-[182px] box-border relative gap-[377px] max-w-full text-left text-17xl text-white font-montserrat mq450:gap-[377px_47px] mq750:gap-[377px_94px] mq750:pt-[110px] mq750:px-[21px] mq750:pb-[118px] mq750:box-border mq1225:flex-wrap mq1225:gap-[377px_188px] mq1225:pl-[42px] mq1225:pr-[42px] mq1225:box-border">
      <div className=" flex flex-col items-start justify-start gap-[24px] w-full">
        <b className="relative z-[1] mq450:text-3xl mq750:text-10xl">
          Agro Finance
        </b>
        <div className="self-stretch relative text-xl leading-[24px] font-light font-raleway z-[1] mq450:text-base mq450:leading-[19px]">{`Li Europan lingues es membres del sam familie. Lor separat existentie `}</div>
      </div>
      <div className="w-[360px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full text-xl font-raleway">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px text-9xl font-montserrat">
              <b className="relative inline-block min-w-[86px] whitespace-nowrap z-[1] mq450:text-3xl">
                Pages
              </b>
            </div>
            <div className="relative inline-block min-w-[57px] z-[1] mq450:text-base">
              Home
            </div>
            <div className="relative inline-block min-w-[57px] z-[1] mq450:text-base">
              About
            </div>
            <div className="relative inline-block min-w-[74px] z-[1] mq450:text-base">
              Product
            </div>
            <div className="relative inline-block min-w-[44px] z-[1] mq450:text-base">
              Blog
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <b className="relative text-9xl inline-block font-montserrat min-w-[91px] z-[1] mq450:text-3xl">
              About
            </b>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <div className="relative inline-block min-w-[115px] z-[1] mq450:text-base">
                Testimonials
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-px">
              <div className="relative inline-block min-w-[108px] z-[1] mq450:text-base">
                Our Service
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="relative inline-block min-w-[103px] z-[1] mq450:text-base">
                Contact Us
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="relative inline-block min-w-[66px] z-[1] mq450:text-base">
                Benefit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[-19px]">
        <div className="absolute top-[0px] left-[0px] bg-darkslategray w-full h-full" />
        <div className="absolute top-[346px] left-[104px] rounded-8xs bg-snow w-10 h-10 z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-snow w-full h-full hidden" />
          <img
            className="absolute top-[6.7px] left-[6.7px] w-[26.7px] h-[26.7px] z-[1]"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="absolute top-[346px] left-[164px] rounded-8xs bg-snow w-10 h-10 z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-snow w-full h-full hidden" />
          <img
            className="absolute top-[6.7px] left-[6.7px] w-[26.7px] h-[26.7px] z-[1]"
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <div className="absolute top-[346px] left-[224px] rounded-8xs bg-snow w-10 h-10 z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-snow w-full h-full hidden" />
          <img
            className="absolute top-[6.7px] left-[6.7px] w-[26.7px] h-[26.7px] z-[1]"
            alt=""
            src="/vector-5.svg"
          />
        </div>
        <div className="absolute top-[346px] left-[284px] rounded-8xs bg-snow w-10 h-10 z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-snow w-full h-full hidden" />
          <img
            className="absolute top-[12px] left-[6.7px] w-[26.7px] h-[17.3px] z-[1]"
            alt=""
            src="/vector-6.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
