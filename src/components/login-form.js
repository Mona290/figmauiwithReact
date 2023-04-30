const LoginForm = () => {
  return (
    <form className="absolute top-[385.58px] left-[848.53px] w-[392.65px] h-[369.56px]">
      <div className="absolute top-[0px] left-[0px] w-[392.65px] h-[329.07px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
      </div>
      <div className="absolute top-[61.25px] left-[30.6px] w-[331.46px] h-[41.52px]">
        <input
          className="[border:none] bg-background absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs"
          type="text"
        />
      </div>
      <input
        className="[border:none] bg-field-color-darker absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs"
        type="text"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[5.34%] w-[19.48%] top-[44.38%] left-[11.69%] text-base font-lato text-black text-left inline-block">
        ••••••••
      </button>
      <div className="absolute h-[5.33%] w-[0.25%] top-[44.53%] right-[68.7%] bottom-[50.15%] left-[31.04%] box-border border-r-[1px] border-solid border-icon" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[256.41px] left-[30.6px] w-[331.46px] h-[41.52px]">
        <div className="absolute top-[0px] left-[0px] w-[331.46px] h-[41.52px]">
          <button className="cursor-pointer [border:none] p-0 bg-black absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        </div>
        <b className="absolute top-[9.34px] left-[114.82px] text-base inline-block font-montserrat text-white text-center w-[103.99px] h-[22.54px]">
          Sign In
        </b>
      </button>
      <div className="absolute top-[31.14px] left-[30.6px] text-base font-lato text-black text-left inline-block w-[97.91px] h-[19.72px]">
        Email address
      </div>
      <div className="absolute top-[71.63px] left-[45.89px] text-base font-lato text-black text-left inline-block w-[144.82px] h-[19.72px]">
        johndoe@gmail.com
      </div>
      <div className="absolute top-[123.53px] left-[30.6px] text-base font-lato text-black text-left inline-block w-[69.35px] h-[19.72px]">
        Password
      </div>
      <div className="absolute top-[215.92px] left-[31.62px] text-base font-lato text-link text-left inline-block w-[126.46px] h-[19.72px]">
        Forgot password?
      </div>
      <div className="absolute top-[349.83px] left-[63.23px] text-base font-lato text-center inline-block w-[266.19px] h-[19.72px]">
        <span className="text-secondary-text">{`Don’t have an account? `}</span>
        <span className="text-link">Register here</span>
      </div>
    </form>
  );
};

export default LoginForm;
