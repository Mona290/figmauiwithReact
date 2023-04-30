import NavigationContainer from "../components/navigation-container";
import ActivitiesForm from "../components/activities-form";
import TopProductsCard from "../components/top-products-card";
import ScheduleCard from "../components/schedule-card";

const Dashboard = () => {
  return (
    <div className="relative bg-background w-full h-[1024px] overflow-hidden text-left text-sm text-black font-lato">
      <NavigationContainer />
      <div className="absolute top-[94.91px] left-[683.15px] w-[225.44px] h-[124.57px]">
        <div className="absolute top-[0px] left-[0px] w-[225.44px] h-[124.57px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-oldlace" />
        </div>
        <div className="absolute top-[46.71px] left-[25.6px] inline-block w-[128.5px] h-[17.65px]">
          Total Transactions
        </div>
        <b className="absolute top-[69.55px] left-[25.6px] text-5xl inline-block font-open-sans w-[66.56px] h-[34.26px]">
          1,520
        </b>
      </div>
      <div className="absolute top-[94.91px] left-[420.13px] w-[225.44px] h-[124.57px]">
        <div className="absolute top-[0px] left-[0px] w-[225.44px] h-[124.57px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <div className="absolute top-[46.71px] left-[25.5px] inline-block w-[126.46px] h-[17.65px]">
          Total Revenues
        </div>
        <b className="absolute top-[69.55px] left-[25.5px] text-5xl inline-block font-open-sans w-[126.46px] h-[34.26px]">
          $2,129,430
        </b>
        <img
          className="absolute h-1/5 w-[11.94%] top-[16.67%] right-[11.6%] bottom-[63.33%] left-[76.45%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector6.svg"
        />
      </div>
      <div className="absolute top-[94.91px] left-[946.17px] w-[225.44px] h-[124.57px]">
        <div className="absolute top-[0px] left-[0px] w-[225.44px] h-[124.57px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-mistyrose" />
        </div>
        <div className="absolute top-[46.71px] left-[25.71px] inline-block w-[82.61px] h-[17.65px]">
          Total Likes
        </div>
        <b className="absolute top-[69.55px] left-[26.09px] text-5xl inline-block font-open-sans w-[66.56px] h-[34.26px]">
          9,721
        </b>
        <img
          className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector7.svg"
        />
      </div>
      <div className="absolute top-[94.91px] left-[1214.56px] w-[225.44px] h-[124.57px]">
        <div className="absolute top-[0px] left-[0px] w-[225.44px] h-[124.57px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lavender" />
        </div>
        <img
          className="absolute h-1/5 w-[16.65%] top-[16.67%] right-[11.39%] bottom-[63.33%] left-[71.95%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector8.svg"
        />
        <div className="absolute top-[46.71px] left-[26.09px] inline-block w-[86.96px] h-[17.65px]">
          Total Users
        </div>
        <b className="absolute top-[69.55px] left-[26.09px] text-5xl inline-block font-open-sans w-[45.09px] h-[34.26px]">
          892
        </b>
      </div>
      <ActivitiesForm />
      <TopProductsCard />
      <ScheduleCard />
      <div className="absolute top-[588px] left-[602.69px] w-[660.87px] h-[19.72px] text-secondary-text font-open-sans">
        <div className="absolute top-[0px] left-[0px] font-lato inline-block w-[48.95px] h-[17.65px]">
          Week 1
        </div>
        <div className="absolute top-[0px] left-[203.97px] inline-block w-[48.95px] h-[19.72px]">
          Week 2
        </div>
        <div className="absolute top-[0px] left-[407.95px] inline-block w-[48.95px] h-[19.72px]">
          Week 3
        </div>
        <div className="absolute top-[0px] left-[611.92px] inline-block w-[48.95px] h-[19.72px]">
          Week 4
        </div>
      </div>
      <img
        className="absolute top-[401.5px] left-[500.5px] w-[898px] h-[101px]"
        alt=""
        src="/line-chart-21.svg"
      />
      <img
        className="absolute top-[400.5px] left-[500.5px] w-[897px] h-[140px]"
        alt=""
        src="/line-chart-11.svg"
      />
      <img
        className="absolute h-[2.43%] w-[1.47%] top-[11.3%] right-[38.68%] bottom-[86.27%] left-[59.84%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/total-transactions-icon1.svg"
      />
      <div className="absolute top-[23.29px] left-[420.13px] w-[1019.87px] h-[31.14px] text-5xl font-montserrat">
        <b className="absolute top-[0px] left-[0px] inline-block w-[140.74px] h-[30.1px]">
          Dashboard
        </b>
        <select className="absolute top-[0px] left-[727.17px] w-[183.58px] h-[31.14px]" />
        <img
          className="absolute top-[0px] left-[989.27px] w-[30.6px] h-[31.14px] object-cover"
          alt=""
          src="/mask-group1@2x.png"
        />
        <img
          className="absolute h-[66.67%] w-[1.8%] top-[16.67%] right-[5.9%] bottom-[16.67%] left-[92.3%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector9.svg"
        />
      </div>
    </div>
  );
};

export default Dashboard;
