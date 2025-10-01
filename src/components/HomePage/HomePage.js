import React from "react";
import HomeHero from "./child/HomeHero";
import StoriesSection from "./child/StoriesSection";
import TechnoOFFSliderHome from "./child/TechnoOFFSliderHome";
import FirstTripleBannersHomepage from "./child/FirstTripleBannersHomepage";
import BestHandsfree from "./child/BestHandsfree";
import {
  bannersOne,
  bannersTwo,
  BLOG_ITEMS,
  BRANDS,
  COMPUTER_ITEMS,
  TechnoOFF,
} from "@/data/data";
import BestBrands from "./child/BestBrands";
import LavazemKhanegi from "./child/LavazemKhanegi";
import BlogCarousel from "./child/BlogCarousel";
import TechnolifeAbout from "./child/TechnolifeAbout";

function HomePage() {
  return (
    <div className="mt-[170px] sm:mt-[194px] lg:mt-[184px] min-[1400px]:mt-[192px]">
      <HomeHero />
      <div className="lg:px-4 mx-auto w-full xl:px-8 3xl:px-6  max-w-screen-3xl ">
        <StoriesSection />
      </div>
      <div className="lg:px-4 mx-auto w-full xl:px-8 3xl:px-6  max-w-screen-3xl ">
        <TechnoOFFSliderHome
          id="3"
          title="تکنوآف"
          items={TechnoOFF}
          customBorder="border-b-2 lg:border border-[#ffd7d9]"
          textHead="!text-white"
        />
      </div>
      <div className="px-4 mx-auto w-full xl:px-8 3xl:px-6  max-w-screen-3xl ">
        <FirstTripleBannersHomepage
          asideClass="grid  min-[780px]:grid-cols-3"
          img="aspect-[4/2] sm:!aspect-[5/2] min-[780px]:!aspect-[4/2]"
          bannersOne={bannersOne}
        />
        <BestHandsfree
          ulClass="grid gap-y-5 grid-cols-2 min-[480px]:grid-cols-3 min-[780px]:grid-cols-7"
          img="w-[70%] min-[480px]:w-[75%] min-[780px]:w-[85%] min-[1400px]:w-[80%] relative aspect-square"
        />
        <FirstTripleBannersHomepage
          asideClass="grid  min-[780px]:grid-cols-2"
          bannersOne={bannersTwo}
          img="aspect-[4/2] sm:aspect-[6/2] min-[780px]:!aspect-[5/2] lg:!aspect-[6/2]"
        />
      </div>
      <div className="lg:px-4 mx-auto w-full xl:px-8 3xl:px-6  max-w-screen-3xl ">
        <BestBrands brands={BRANDS} />
        <TechnoOFFSliderHome
          id="4"
          items={COMPUTER_ITEMS}
          title="کامپیوتر و تجهیزات"
          customBorder="border-y-1 border-[#d3d8e4] lg:border lg:border-[#919ebc]"
          textHead="!text-[#000002]"
        />
        <LavazemKhanegi />
        <BlogCarousel id="5" items={BLOG_ITEMS} />
      </div>
      <div className="px-4 mx-auto w-full xl:px-8 3xl:px-6  max-w-screen-3xl ">
        <TechnolifeAbout />
      </div>
    </div>
  );
}

export default HomePage;
