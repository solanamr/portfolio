import { Link } from "react-router-dom";


import logoS from "../../../assets/imgs/logoS.png";
import logo from "../../../assets/imgs/weatherLogo.png";
import js from "../../../assets/imgs/js.svg";
import react from "../../../assets/imgs/react.svg";
import redux from "../../../assets/imgs/redux.svg";
import css from "../../../assets/imgs/css.svg";
import node from "../../../assets/imgs/nodejs.svg";
import github from "../../../assets/imgs/github.svg";
import git from "../../../assets/imgs/git.svg";
import landing from "../../../assets/imgs/weatherLanding.png";
import home from "../../../assets/imgs/weatherHome.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import { useTranslation } from "react-i18next";

const Weather = () => {

  const [t] = useTranslation("global");

    return (
        <div className="bg-lightGrey pb-10">
        <Link to="/">
          <img src={logoS} alt="" className="w-7 lg:w-14 pt-5 ml-5" />
        </Link>
  
        <div className="flex pt-10 items-center justify-center pb-5">
          <img src={logo} alt="" className="w-40" />
          <h1 className="text-2xl font-semibold pl-5">{t("weather.title")}</h1>
        </div>
        <h3 className="text-xl pl-10">{t("weather.subtitle")}</h3>
        <p className="text-lg pl-10 pt-3">
        <b>{t("weather.project")}</b>: {t("weather.goals")}
        </p>
        <h4 className="text-lg text-center font-bold pb-5 pt-5">
        {t("weather.techs")}
        </h4>
  
        <div className="flex justify-center flex-wrap">
          <div className="">
            <img src={js} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">Javascript</p>
          </div>
          <div className="">
            <img src={react} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">React</p>
          </div>
          <div className="">
            <img src={redux} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">Redux</p>
          </div>
          <div className="">
            <img src={css} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">CSS</p>
          </div>
          <div className="">
            <img src={node} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">Node.js</p>
          </div>
        
          <div className="">
            <img src={github} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">Github</p>
          </div>
  
          <div className="">
            <img src={git} alt="" className="w-20 px-3" />
            <p className="text-center text-sm">Git</p>
          </div>
        </div>
  
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation]}
          className="py-16">
        <SwiperSlide>
          <img src={landing} alt="" className="w-[680px] lg:ml-[29%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={home} alt="" className="w-[680px] lg:ml-[29%]" />
        </SwiperSlide>
        </Swiper>
  
        <p className="font-medium text-center lg:w-[800px] lg:ml-[22%]">
        {t("weather.desc1")}
        </p>
        <p className="font-medium text-center lg:w-[800px] lg:ml-[21%] mb-10">
        {t("weather.desc2")}
        </p>
        
          <a href="https://weather-app-ashy-psi.vercel.app/" target="_blank" className="bg-lightBlue py-2 px-2 text-white ml-28 lg:ml-[40%] mr-5 mb-10 rounded-sm">{t("weather.link1")}</a>      
          <a href="https://github.com/solanamr/WheatherApp" target="_blank" className="bg-lightBlue py-2 px-2 text-white mb-10 rounded-sm">{t("weather.link2")}</a>
        
      </div>
    );
}
 
export default Weather;