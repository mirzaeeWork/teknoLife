"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const items = [
  { title: "طلا دیجیتال", href: "#", imgSrc: "/images/home/stories/1.webp", loading: "eager", fetchPriority: "high" },
  { title: "آیفون 17", href: "#", imgSrc: "/images/home/stories/2.webp", loading: "eager", fetchPriority: "high" },
  { title: "سکه طلا", href: "#", imgSrc: "/images/home/stories/3.webp", loading: "eager", fetchPriority: "high" },
  { title: "بخاری برقی", href: "#", imgSrc: "/images/home/stories/4.webp", loading: "eager", fetchPriority: "high" },
  { title: "بخور سرد", href: "#", imgSrc: "/images/home/stories/5.webp", loading: "eager", fetchPriority: "high" },
  { title: "گوشی دکمه ای", href: "#", imgSrc: "/images/home/stories/6.webp", loading: "eager", fetchPriority: "high" },
  { title: "اسپیکر", href: "#", imgSrc: "/images/home/stories/7.webp", loading: "eager", fetchPriority: "high" },
  { title: "سشوار", href: "#", imgSrc: "/images/home/stories/8.webp", loading: "eager", fetchPriority: "high" },
  { title: "مسواک برقی", href: "#", imgSrc: "/images/home/stories/9.webp", loading: "lazy", fetchPriority: "auto" },
  { title: "تبلت و آیپد", href: "#", imgSrc: "/images/home/stories/10.webp", loading: "lazy", fetchPriority: "auto" },
  { title: "کتاب چاپی", href: "#", imgSrc: "/images/home/stories/11.webp", loading: "lazy", fetchPriority: "auto" },
  { title: "ماشین لباسشویی", href: "#", imgSrc: "/images/home/stories/12.webp", loading: "lazy", fetchPriority: "auto" },
];

export default function StoriesSection() {
  
  return (
    <section className="relative   mt-14 w-full ">
      <Swiper
        modules={[Navigation, Autoplay]}
        dir="rtl"
        slidesPerView="auto"
        spaceBetween={0}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".prev-custom-swiper-2",
          nextEl: ".next-custom-swiper-2",
        }}
        breakpoints={{
          230: { slidesPerView: 2.5, spaceBetween: 0 },
          480: { slidesPerView: 3.5, spaceBetween: 0 },
          640: { slidesPerView: 4.5, spaceBetween: 0 },
          768: { slidesPerView: 5.5, spaceBetween: 0 },
          1024: { slidesPerView: 6.5, spaceBetween: 0 },
          1200: { slidesPerView: 7, spaceBetween: 0 },
          1536: { slidesPerView: 8, spaceBetween: 0 },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex flex-col items-center gap-3 md:gap-5"
              title={item.title}
            >
              <a className="" href={item.href}>
                <div
                  className="border-2 border-[#14a0de] md:hover:border-4
                    rounded-full  w-[86px] h-[86px] p-[2px] md:w-[128px] md:h-[128px] 
                    flex items-center justify-center cursor-pointer "
                >
                  <div className="rounded-full border border-[#bdc5d7] mx-auto w-[76px] h-[76px] md:w-[114px] md:h-[114px] z-100">
                    <div
                      className="w-full relative"
                      style={{ paddingTop: "100%" }}
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          loading={item.loading}
                          fetchPriority={item.fetchPriority}
                          alt="image"
                          src={item.imgSrc}
                          className="responsive-image"
                          width="114"
                          height="114"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="text-xs font-medium md:text-base md:font-medium  text-[#1b3570] "
                href={item.href}
              >
                {item.title}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="prev-custom-swiper-2 absolute top-1/2 -translate-y-1/2 -right-2.5 3xl:-right-6 "
      >
        <IoIosArrowBack className="text-[16px]  rotate-180 text-[#1b3570]" />
      </button>
      <button
        type="button"
        className="next-custom-swiper-2 absolute top-1/2 -translate-y-1/2 -left-2.5 3xl:-left-6 "
      >
        <IoIosArrowBack className="text-[16px]  text-[#1b3570]" />
      </button>
    </section>
  );
}
