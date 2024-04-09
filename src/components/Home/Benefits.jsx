import CheckIcon from "./CheckIcon";

const Benefits = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[150px] pr-[21px] pl-5 box-border max-w-full text-left text-53xl text-darkslategray font-montserrat mq750:pb-[63px] mq750:box-border mq1050:pb-[97px] mq1050:box-border">
      <div className="w-[1271px] flex flex-row items-end justify-start gap-[80px] max-w-full mq450:gap-[80px_20px] mq750:gap-[80px_40px] mq1050:flex-wrap">
        <div className="w-[521px] flex flex-col items-start justify-start min-w-[521px] min-h-[632px] max-w-full mq750:min-w-full mq1050:flex-1 mq1050:min-h-[auto]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full shrink-0">
              <h1 className="m-0 self-stretch relative text-inherit leading-[114%] font-bold font-inherit mq450:text-24xl mq450:leading-[49px] mq750:text-39xl mq750:leading-[66px]">
                The Benefits of Choosing Our Expertise
              </h1>
              <div className="w-[468.8px] relative text-xl leading-[24px] font-raleway text-gray-100 inline-block max-w-full mq450:text-base mq450:leading-[19px]">{`Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. `}</div>
            </div>
            <button className="cursor-pointer [border:none] pt-[15px] pb-[15.5px] pr-[34.8px] pl-[39px] bg-darkslategray rounded-lg flex flex-row items-start justify-start gap-[13.4px]">
              <div className="h-[53.1px] w-[213.5px] relative rounded-lg bg-darkslategray hidden" />
              <div className="relative text-xl font-semibold font-raleway text-white text-left inline-block min-w-[107.7px] whitespace-nowrap z-[1] mq450:text-base">
                Learn More
              </div>
              <div className="h-[18.7px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <img
                  className="w-[18.6px] h-[15.7px] relative z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-darkslategray flex flex-col items-start justify-start py-[82px] pr-[125px] pl-[126px] box-border gap-[40px] min-w-[435px] max-w-full text-29xl text-white mq450:py-[34px] mq450:px-5 mq450:box-border mq750:gap-[20px_40px] mq750:pl-[63px] mq750:pr-[62px] mq750:box-border mq750:min-w-full mq1050:pt-[53px] mq1050:pb-[53px] mq1050:box-border">
          <div className="w-[670px] h-[784px] relative rounded-xl bg-darkslategray hidden max-w-full" />
          <div className="w-[389px] flex flex-row items-start justify-start gap-[52px] max-w-full mq450:flex-wrap mq450:gap-[52px_26px]">
            <img
              className="h-[125px] w-[125px] relative z-[1] mq450:flex-1"
              loading="lazy"
              alt=""
              src="/rating.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[138px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <b className="relative leading-[40px] inline-block min-w-[79px] z-[1] mq450:text-10xl mq450:leading-[23px] mq750:text-19xl mq750:leading-[31px]">
                  Farmers
                </b>
                <div className="self-stretch h-[23px] relative text-xl leading-[27px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[22px]">
                  Get 0 collateral loans
                </div>
              </div>
            </div>
          </div>
          <div className="w-[389px] flex flex-row items-start justify-start gap-[52px] max-w-full mq450:flex-wrap mq450:gap-[52px_26px]">
            <img
              className="h-[125px] w-[125px] relative z-[1] mq450:flex-1"
              loading="lazy"
              alt=""
              src="/product.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[138px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <b className="w-28 relative leading-[40px] inline-block z-[1] mq450:text-10xl mq450:leading-[23px] mq750:text-19xl mq750:leading-[31px]">
                  Stakers
                </b>
                <div className="self-stretch h-[23px] relative text-xl leading-[27px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[22px]">
                  Get profitable investments
                </div>
              </div>
            </div>
          </div>
          <div className="w-[389px] flex flex-row items-start justify-start gap-[52px] max-w-full mq450:flex-wrap mq450:gap-[52px_26px]">
            <div className="h-[125px] w-[125px] relative min-w-[125px] mq450:flex-1">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-400 w-full h-full z-[1]" />
              <CheckIcon />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[138px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <b className="w-[189px] relative leading-[40px] inline-block z-[1] mq450:text-10xl mq450:leading-[23px] mq750:text-19xl mq750:leading-[31px]">
                  Lenders
                </b>
                <div className="self-stretch h-[23px] relative text-xl leading-[27px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[22px]">
                  Get sustainable returns
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[52px] mq450:gap-[52px_26px] mq750:flex-wrap">
            <img
              className="h-[125px] w-[125px] relative z-[1] mq750:flex-1"
              loading="lazy"
              alt=""
              src="/local-team.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[157px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <b className="w-[79px] relative leading-[40px] inline-block z-[1] mq450:text-10xl mq450:leading-[23px] mq750:text-19xl mq750:leading-[31px]">
                  Privacy
                </b>
                <div className="self-stretch h-[23px] relative text-xl leading-[27px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[22px]">
                  Completely decentralised systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
