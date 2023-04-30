import LoginForm from "../components/login-form";

const SignIn = () => {
  return (
    <div className="relative w-full h-[1024px] overflow-hidden text-left text-[72px] text-black font-montserrat">
      <div className="absolute top-[-39px] left-[600px] bg-background w-[869px] h-[1063px]" />
      <div className="absolute top-[-39px] left-[0px] bg-black w-[600px] h-[1063px]" />
      <b className="absolute top-[443px] left-[174px] inline-block text-white w-[251px] h-[91px]">
        Board.
      </b>
      <LoginForm />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[328.48px] left-[848.53px] w-[183.58px] h-[31.14px]">
        <div className="absolute top-[0px] left-[0px] w-[183.58px] h-[31.14px]">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        </div>
        <div className="absolute top-[8.3px] left-[43.85px] text-xs font-montserrat text-secondary-text text-center flex items-center justify-center w-[120.34px] h-[15.57px]">
          Sign in with Google
        </div>
        <img
          className="absolute top-[8.3px] left-[19.38px] w-[14.28px] h-[14.53px] overflow-hidden"
          alt=""
          src="/googleicon-1.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[328.48px] left-[1057.6px] w-[183.58px] h-[31.14px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[183.58px] h-[31.14px]">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        </button>
        <div className="absolute top-[8.3px] left-[46.91px] text-xs font-montserrat text-secondary-text text-center flex items-center justify-center w-[112.19px] h-[15.57px]">
          Sign in with Apple
        </div>
        <img
          className="absolute top-[7.27px] left-[24.48px] w-[11.73px] h-[14.53px] overflow-hidden"
          alt=""
          src="/apple-1.svg"
        />
      </button>
      <b className="absolute top-[231px] left-[849px] text-17xl inline-block w-[133px] h-[46px]">
        Sign In
      </b>
      <div className="absolute top-[282px] left-[849px] text-base font-lato inline-block w-[164px] h-[19px]">
        Sign in to your account
      </div>
    </div>
  );
};

export default SignIn;
