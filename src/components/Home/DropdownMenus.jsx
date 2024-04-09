const DropdownMenus = ({ progressBars, innovationsForAGreenerFut }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-xl text-darkslategray font-raleway mq450:gap-[20px_40px]">
      <img
        className="w-[380px] h-[470px] relative rounded-xl object-cover max-w-full"
        alt=""
        src={progressBars}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h2 className="m-0 self-stretch relative text-13xl leading-[114%] font-bold font-montserrat mq450:text-lgi mq450:leading-[22px] mq750:text-7xl mq750:leading-[29px]">
          {innovationsForAGreenerFut}
        </h2>
        <div className="w-[390px] relative leading-[24px] font-light text-gray-100 inline-block max-w-full mq450:text-base mq450:leading-[19px]">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica.
        </div>
        <div className="w-[184px] relative [text-decoration:underline] leading-[24px] inline-block mq450:text-base mq450:leading-[19px]">
          Read More
        </div>
      </div>
    </div>
  );
};

export default DropdownMenus;
