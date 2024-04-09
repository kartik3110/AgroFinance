import DropdownMenus from "./DropdownMenus";

const Blog = () => {
  return (
    <section className="w-[1416px] flex flex-row items-start justify-start pt-0 px-[73px] pb-[150px] box-border max-w-full text-center text-53xl text-darkslategray font-montserrat mq750:pb-[63px] mq750:box-border mq1225:pl-9 mq1225:pr-9 mq1225:pb-[97px] mq1225:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
        <div className="w-[1248px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[690px] flex flex-col items-end justify-start gap-[24px] max-w-full">
            <div className="w-[656px] flex flex-row items-start justify-end py-0 px-[66px] box-border max-w-full mq750:pl-[33px] mq750:pr-[33px] mq750:box-border">
              <h1 className="m-0 flex-1 relative text-inherit leading-[114%] font-bold font-inherit inline-block max-w-full mq450:text-24xl mq450:leading-[49px] mq750:text-39xl mq750:leading-[66px]">
                Our Blog
              </h1>
            </div>
            <div className="self-stretch relative text-xl leading-[24px] font-raleway text-paragraph mq450:text-base mq450:leading-[19px]">{`Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. `}</div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[40px] max-w-full grid-cols-[repeat(3,_minmax(300px,_1fr))] text-left text-xl font-raleway mq750:gap-[40px_20px] mq750:grid-cols-[minmax(300px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(300px,_520px))]">
          <DropdownMenus
            progressBars="/rectangle-10-2@2x.png"
            innovationsForAGreenerFut="Innovations for a Greener Future"
          />
          <div className="flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
            <img
              className="w-[380px] h-[470px] relative rounded-xl object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/rectangle-11@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <h2 className="m-0 self-stretch relative text-13xl leading-[114%] font-bold font-montserrat mq450:text-lgi mq450:leading-[22px] mq750:text-7xl mq750:leading-[29px]">
                <p className="m-0">{`The Power of `}</p>
                <p className="m-0">Agricultural Analytics</p>
              </h2>
              <div className="self-stretch relative leading-[24px] font-light text-gray-100 mq450:text-base mq450:leading-[19px]">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica.
              </div>
              <div className="w-[199px] relative [text-decoration:underline] leading-[24px] inline-block mq450:text-base mq450:leading-[19px]">
                Read More
              </div>
            </div>
          </div>
          <DropdownMenus
            progressBars="/rectangle-12-2@2x.png"
            innovationsForAGreenerFut="Cultivating Sustainable and Resilient Farms"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
