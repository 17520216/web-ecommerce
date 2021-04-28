import Brand from "./components/Brand";
import Review from "./components/Review";
import CountDown from "./components/CountDown";
import TopSeller from "./components/TopSeller";
import BestPick from "./components/BestPick";
import Feature from "./components/Feature";
import Slider from "./components/Slider";
export default function Home() {
  return (
    <>
      <Slider />
      {/* FEATURES */}
      <Feature />
      {/* BEST PICKS */}
      <BestPick />
      {/* TOP SELLERS */}
      <TopSeller />
      {/* COUNTDOWN */}
      <CountDown />
      {/* REVIEWS */}
      <Review />
      {/* BRANDS */}
      <Brand />
    </>
  );
}
