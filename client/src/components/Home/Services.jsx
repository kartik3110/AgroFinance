import Option1 from "./Option1";

const Services = () => {
  return (
    <section className="w-[1426px] flex flex-row items-start justify-center pt-0 px-5 pb-[150px] box-border max-w-full text-center text-53xl text-darkslategray font-montserrat mq750:pb-[97px] mq750:box-border">
      <div className="w-[1244px] flex flex-col items-end justify-start gap-[80px] max-w-full mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
        <div className="w-[1221px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[781px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[75px] font-bold font-inherit mq450:text-24xl mq450:leading-[45px] mq750:text-39xl mq750:leading-[60px]">
              Our service
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full text-5xl text-gray-100 font-raleway mq1050:pl-[39px] mq1050:pr-[39px] mq1050:box-border">
              <div className="flex-1 relative leading-[24px] inline-block max-w-full mq450:text-lgi mq450:leading-[19px]">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth Por scientie, musica.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[40px] text-5xl mq750:gap-[40px_20px] mq1050:flex-wrap">
          <Option1
            icon="/icon.svg"
            eliminateCollateralDepend="Eliminate Collateral Dependence"
          />
          <Option1
            icon="/group.svg"
            eliminateCollateralDepend="Incentivize Stakeholders"
            propFlex="0.8955"
          />
          <Option1
            icon="/group-1.svg"
            eliminateCollateralDepend="Enhance Financial Inclusion"
            propFlex="1"
          />
          <Option1
            icon="/icon-1.svg"
            eliminateCollateralDepend="Empowering Farmers"
            propFlex="0.8909"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
