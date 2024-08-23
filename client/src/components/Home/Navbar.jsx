const Navbar = () => {
  return (
    <header className="self-stretch bg-white flex flex-row items-start justify-center pt-12 px-5 pb-[46px] box-border gap-[278px] top-[0] z-[99] sticky max-w-full text-left text-9xl text-gray-100 font-montserrat mq450:gap-[278px_35px] mq750:gap-[278px_69px] mq1225:gap-[278px_139px]">
      <div className="h-[142px] w-[1440px] relative bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <h3 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap z-[1]">
          AGRO FINANCE
        </h3>
      </div>
      <div className="w-[764px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-xl text-darkslategray font-raleway mq1050:w-[435px]">
        <nav className="m-0 w-[329px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full mq450:w-0 mq1050:hidden">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-xl text-gray-100 font-raleway mq450:hidden">
            <div className="relative text-darkslategray font-semibold inline-block min-w-[58px] z-[1]">
              Home
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
              <div className="relative font-semibold inline-block min-w-[88px] whitespace-nowrap z-[1]">
                About Us
              </div>
            </div>
            <div className="relative font-semibold inline-block min-w-[58px] z-[1]">
              Pages
            </div>
          </nav>
        </nav>
        <div className="flex flex-row items-start justify-start gap-[40px] mq450:gap-[40px_20px]">
          <button className="cursor-pointer [border:none] pt-3 pb-[13px] pr-[42px] pl-[43px] bg-darkslategray rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-teal">
            <div className="h-12 w-[138px] relative rounded-lg bg-darkslategray hidden" />
            <div className="w-[53px] relative text-xl font-semibold font-raleway text-white text-center inline-block min-w-[53px] z-[2]">
              Login
            </div>
          </button>
          <div className="rounded-lg flex flex-row items-start justify-start pt-3 px-[31px] pb-[13px] whitespace-nowrap z-[1] border-[1px] border-solid border-darkslategray">
            <div className="h-12 w-[138px] relative rounded-lg box-border hidden border-[1px] border-solid border-darkslategray" />
            <div className="w-[74px] relative font-semibold inline-block min-w-[74px] z-[2]">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
