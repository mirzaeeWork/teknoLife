"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function BlogCarousel({ items, id }) {
  return (
    <div className="relative w-full  border-y-1 border-[#d3d8e4] lg:border lg:border-[#919ebc] lg:rounded-[20px]  pb-3 lg:p-3  mt-14">
      {/* Header */}
      <div
        className={`relative w-full h-9 lg:h-12 mb-6 lg:mb-4 flex items-center justify-between p-2 lg:px-6 `}
      >
        <h4
          className={`!text-[#000002] pr-2  text-sm lg:text-xl font-medium text-right`}
        >
          از وبلاگ تکنولایف
        </h4>
      </div>

      <div className=" w-full">
        <Swiper
          modules={[Navigation]}
          dir="rtl"
          slidesPerView="auto"
          spaceBetween={15}
          navigation={{
            prevEl: `.prev-custom-swiper-${id}`,
            nextEl: `.next-custom-swiper-${id}`,
          }}
          breakpoints={{
            230: { slidesPerView: 1.5, spaceBetween: 0 },
            640: { slidesPerView: 2.5, spaceBetween: 0 },
            768: { slidesPerView: 2.8, spaceBetween: 0 },
            1024: { slidesPerView: 3.5, spaceBetween: 0 },
            1200: { slidesPerView: 4, spaceBetween: 0 },
            1536: { slidesPerView: 5, spaceBetween: 0 },
          }}
          className="w-full mx-auto px-8 "
        >
          {items?.map((item, idx) => (
            <SwiperSlide key={`${item.href}-${idx}`}>
              <section
                id={item.id}
                className="relative flex  justify-center items-center w-full px-3 sm:px-6 lg:px-9 "
              >
                <div className="w-full flex-col rounded-b-[10px] rounded-t bg-[#f0f0f0] lg:bg-[#333333] overflow-hidden ">
                  <a
                    target="_blank"
                    className="w-full"
                    href={item.href}
                    rel="noreferrer"
                  >
                      <div className="relative w-full aspect-[3/2]">
                        <Image
                          loading="lazy"
                          src={item.img}
                          alt={item.title}
                          title={item.title}
                          className="w-full h-full"
                          width={500}
                          height={500}
                        />
                      </div>
                  </a>

                  <div className="p-3 h-18">
                    <a
                      target="_blank"
                      className="text-xs  font-medium text-gray-800 lg:text-[13px] lg:text-white yekanbakh-en -tracking-0.5"
                      href={item.href}
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>

              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className={`prev-custom-swiper-${id} absolute top-1/2 -translate-y-1/2 right-5.5 `}
        >
          <IoIosArrowBack className="text-[16px]  rotate-180 text-[#1b3570]" />
        </button>
        <button
          type="button"
          className={`next-custom-swiper-${id} absolute top-1/2 -translate-y-1/2 left-5.5`}
        >
          <IoIosArrowBack className="text-[16px]  text-[#1b3570]" />
        </button>
      </div>
    </div>
  );
}
