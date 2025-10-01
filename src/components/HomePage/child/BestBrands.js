// components/BestBrands.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PiSealCheck } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";

export default function BestBrands({
  heading = "برندهای منتخب",
  brands,
  className = "",
}) {
  return (
    <section
      className={`border-b lg:border-2 border-[#d3d8e4] flex flex-col lg:flex-row lg:rounded-[20px]  mt-14 overflow-hidden`}
      dir="rtl"
    >
      {/* ستون عنوان */}
      <div className="bg-[linear-gradient(90deg,#0079b1,#1b3570)] px-10 flex py-3 lg:flex-col items-center justify-center gap-[6px]   ">
        <PiSealCheck className="text-white text-[22px] lg:text-[38px]" />
        <p className="text-sm lg:text-[20px] font-bold text-white whitespace-nowrap">
          {heading}
        </p>
      </div>

      {/* اسلایدر برندها */}
      <div className="relative w-full overflow-hidden ">
        <Swiper
          id="best_brands"
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-custom-swiper-1",
            prevEl: ".prev-custom-swiper-1",
          }}
          dir="rtl"
          slidesPerView="auto"
          spaceBetween={0}
          className="w-full"
          breakpoints={{
            230: { slidesPerView: 2.2, spaceBetween: 0 },
            480: { slidesPerView: 2.5, spaceBetween: 0 },
            640: { slidesPerView: 3.4, spaceBetween: 0 },
            768: { slidesPerView: 3.8, spaceBetween: 0 },
            1024: { slidesPerView: 4.8, spaceBetween: 0 },
            1200: { slidesPerView: 5.3, spaceBetween: 0 },
            1536: { slidesPerView: 6.3, spaceBetween: 0 },
          }}
        >
          {brands.map((b) => (
            <SwiperSlide
              key={b.title}
              className="border-l border-[#d3d8e4] last:!border-l-0 my-3 lg:my-6"
            >
              <div className="w-[45%] lg:w-[60%]  mx-auto ">
                <a
                  title={b.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={b.href}
                >
                  <div className="w-full relative aspect-[3/2] ">
                    <Image
                      src={b.imgSrc}
                      alt={b.imgAlt ?? b.title}
                      title={b.title}
                      fill
                      className="w-full h-full bg-transparent"
                      priority={false}
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type=""
          className="prev-custom-swiper-1 absolute top-1/2 -translate-y-1/2 right-2.5 "
        >
          <IoIosArrowBack className="text-[16px]  rotate-180 text-[#1b3570]" />
        </button>
        <button
          type=""
          className="next-custom-swiper-1 absolute top-1/2 -translate-y-1/2 left-2.5  !z-35"
        >
          <IoIosArrowBack className="text-[16px]  text-[#1b3570]" />
        </button>
      </div>
    </section>
  );
}
