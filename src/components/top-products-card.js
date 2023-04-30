const TopProductsCard = () => {
  return (
    <div className="absolute top-[675.2px] left-[420.13px] w-[489.54px] h-[265.75px] text-left text-sm text-black font-montserrat">
      <div className="absolute top-[0px] left-[0px] w-[489.54px] h-[265.75px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
      </div>
      <div className="absolute top-[74.74px] left-[248.85px] w-[99.95px] h-[37.37px]">
        <input
          className="cursor-pointer absolute top-[3.11px] left-[0px] bg-darkseagreen w-[11.22px] h-[11.42px]"
          type="radio"
        />
        <b className="absolute top-[0px] left-[21.42px] inline-block w-[78.53px] h-[17.65px]">
          Basic Tees
        </b>
        <div className="absolute top-[22.84px] left-[21.42px] text-xs font-lato text-secondary-text inline-block w-[24.48px] h-[14.53px]">
          55%
        </div>
      </div>
      <div className="absolute top-[32.18px] left-[333.5px] w-[98.93px] h-[15.57px] text-xs text-secondary-text">
        <div className="absolute top-[0px] left-[0px] inline-block w-[98.93px] h-[15.57px]">
          May - June 2021
        </div>
      </div>
      <input
        className="[border:none] bg-secondary-text absolute h-[1.95%] w-[1.67%] top-[14.45%] right-[8.96%] bottom-[83.59%] left-[89.38%]"
        type="text"
      />
      <div className="absolute top-[133.91px] left-[248.85px] w-[171.34px] h-[37.37px]">
        <input
          className="cursor-pointer absolute top-[3.11px] left-[0px] bg-khaki w-[11.22px] h-[11.42px]"
          type="radio"
        />
        <b className="absolute top-[0px] left-[21.42px] inline-block w-[149.92px] h-[17.65px]">
          Custom Short Pants
        </b>
        <div className="absolute top-[22.84px] left-[21.42px] text-xs font-lato text-secondary-text inline-block w-[24.48px] h-[14.53px]">
          31%
        </div>
      </div>
      <div className="absolute top-[193.08px] left-[248.85px] w-[130.54px] h-[37.37px]">
        <input
          className="cursor-pointer absolute top-[3.11px] left-[0px] bg-lightcoral w-[11.22px] h-[11.42px]"
          type="radio"
        />
        <b className="absolute top-[0px] left-[21.42px] inline-block w-[109.13px] h-[17.65px]">
          Super Hoodies
        </b>
        <div className="absolute top-[22.84px] left-[21.42px] text-xs font-lato text-secondary-text inline-block w-[24.48px] h-[14.53px]">
          14%
        </div>
      </div>
      <b className="absolute top-[31.14px] left-[40.79px] text-lg inline-block w-[127.48px] h-[22.84px]">
        Top products
      </b>
      <img
        className="absolute top-[85.12px] left-[61.19px] w-[136.66px] h-[139.1px]"
        alt=""
        src="/pie-chart1.svg"
      />
    </div>
  );
};

export default TopProductsCard;
