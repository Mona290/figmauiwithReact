const ScheduleCard = () => {
  return (
    <div className="absolute top-[675.2px] left-[950.46px] w-[489.54px] h-[265.75px] text-left text-xs text-icon font-montserrat">
      <div className="absolute top-[0px] left-[0px] w-[489.54px] h-[265.75px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
      </div>
      <b className="absolute top-[31.14px] left-[40.79px] text-lg inline-block text-black w-[165.22px] h-[22.84px]">
        Today’s schedule
      </b>
      <div className="absolute top-[79.93px] left-[40.79px] w-[255.99px] h-[68.51px] font-lato">
        <b className="absolute top-[3.11px] left-[15.3px] text-sm inline-block text-dimgray w-[240.69px] h-[17.65px]">
          Meeting with suppliers from Kuta Bali
        </b>
        <div className="absolute top-[25.95px] left-[15.3px] inline-block w-[67.31px] h-[14.53px]">
          14.00-15.00
        </div>
        <div className="absolute top-[45.68px] left-[15.3px] inline-block w-[137.68px] h-[14.53px]">{`at Sunset Road, Kuta, Bali `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[73.51px] border-r-[5px] border-solid border-lightgreen" />
      </div>
      <div className="absolute top-[35.29px] left-[405.91px] text-secondary-text inline-block w-[41.81px] h-[15.57px]">
        See All
      </div>
      <input
        className="[border:none] bg-secondary-text absolute h-[1.92%] w-[1.7%] top-[17.97%] right-[5.6%] bottom-[80.11%] left-[92.71%] [transform:_rotate(-90deg)] [transform-origin:0_0]"
        type="text"
      />
      <div className="absolute top-[161.94px] left-[40.79px] w-[231.51px] h-[68.51px] font-lato">
        <b className="absolute top-[3.11px] left-[15.3px] text-sm inline-block text-dimgray w-[216.21px] h-[17.65px]">
          Check operation at Giga Factory 1
        </b>
        <div className="absolute top-[25.95px] left-[15.3px] inline-block w-[67.31px] h-[14.53px]">
          18.00-20.00
        </div>
        <div className="absolute top-[45.68px] left-[15.3px] inline-block w-[93.83px] h-[14.53px]">{`at Central Jakarta `}</div>
        <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[73.51px] border-r-[5px] border-solid border-cornflowerblue" />
      </div>
    </div>
  );
};

export default ScheduleCard;
