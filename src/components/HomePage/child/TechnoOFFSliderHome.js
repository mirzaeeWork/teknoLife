"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { RiPercentLine } from "react-icons/ri";
import { CountdownTime } from "./CountdownTime";

export default function TechnoOFFSliderHome({
  items,
  title,
  customBorder,
  textHead,
  id
}) {
  return (
    <section
      className={`relative w-full  ${customBorder}  lg:rounded-[20px]  pb-3 lg:p-3  mt-14`}
    >
      <div
        className={`${
          title === "تکنوآف" ? "lg:rounded-lg bg-[#a2191f]" : ""
        } relative w-full h-9 lg:h-12 mb-6 lg:mb-4 flex  
                       items-center justify-between p-2 lg:px-6 `}
      >
        <h4
          className={`${textHead} pr-2  text-sm lg:text-xl font-medium text-right`}
        >
          {title}
        </h4>
        <a target="_blank" className="" href="#">
          <div className="flex items-center cursor-pointer gap-1.5">
            <p
              className={`${
                title === "تکنوآف" ? textHead : "text-[#223c78]"
              } font-medium text-primary-shade text-xs  lg:text-base`}
            >
              نمایش همه
            </p>
            <IoIosArrowBack
              className={`${
                title === "تکنوآف" ? textHead : "text-[#223c78]"
              } text-[18px] `}
            />
          </div>
        </a>
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
            370: { slidesPerView: 2.2, spaceBetween: 0 },
            480: { slidesPerView: 2.6, spaceBetween: 0 },
            640: { slidesPerView: 3.2, spaceBetween: 0 },
            768: { slidesPerView: 3.5, spaceBetween: 0 },
            1024: { slidesPerView: 3.98, spaceBetween: 0 },
            1200: { slidesPerView: 4.98, spaceBetween: 0 },
            1536: { slidesPerView: 5.98, spaceBetween: 0 },
          }}
          className="w-full mx-auto "
        >
          {items?.map((item, idx) => (
            <SwiperSlide key={`${item.href}-${idx}`}>
              <section
                id={item.id}
                className="relative flex  justify-center items-center"
              >
                <div className=" flex flex-col items-center  w-full ">
                  <div
                    className={`w-full pt-3 px-3 sm:px-6 lg:px-9  ${
                      !item.timer ? "h-14 lg:h-[62px]" : ""
                    }`}
                  >
                    {item.timer && (
                      <div className="flex flex-col items-center justify-between pt-0.5 text-[#da1e28] mb-4">
                        <div className="w-full flex items-center justify-between">
                          <p className="font-medium leading-4 text-xs lg:text-[15px] lg:!leading-5 line-clamp-1 max-w-[60%]">
                            تکنوآف
                          </p>
                          <CountdownTime
                            hms={item.timer}
                            className="whitespace-nowrap text-base font-medium !leading-4 lg:text-lg lg:!leading-5"
                          />
                        </div>
                        <div className="overflow-hidden h-0.5 rounded-lg lg:h-1 bg-[#da1e28] w-full mt-2" />
                      </div>
                    )}
                  </div>
                  <div
                    className={`w-full pb-3 px-3 sm:px-6 lg:px-9 ${
                      idx === items.length - 1
                        ? " "
                        : "border-l border-[#d3d8e4]"
                    }`}
                  >
                    <a
                      target="_blank"
                      className=" w-full mx-auto "
                      href={item.href}
                    >
                      <div className="w-full relative aspect-[1/1] mx-auto ">
                        <Image
                          loading={item.loading}
                          fetchPriority={item.fetchPriority}
                          src={item.imgSrc}
                          alt={item.imgAlt || item.title}
                          className="w-full h-full"
                          width={186}
                          height={186}
                        />
                      </div>
                    </a>

                    <div className="w-full">
                      <div className=" flex w-full items-center justify-center pt-3 lg:pt-4">
                        <a
                          target="_blank"
                          className="line-clamp-2 h-[48px] w-full text-xs font-medium leading-[24px] -tracking-0.5  lg:h-[50px] lg:text-sm lg:leading-[27px]  !text-[#000002] "
                          href={item.href}
                        >
                          {item.title}
                        </a>
                      </div>

                      <div className=" flex w-full  flex-col items-end justify-end pt-3.5 lg:pt-6">
                        <div className="h-[46px] w-full">
                          <div className=" flex w-full items-center justify-between">
                            {item.discount ? (
                              <div className="min-w-6 lg:min-w-7 flex h-[17px] !items-center justify-center gap-1 rounded-[3px] px-1 lg:h-[19px] bg-[#da1e28]">
                                <RiPercentLine className=" text-white w-[9px] h-[9px] lg:w-[11px] lg:h-[11px]" />
                                <span className="flex !items-center justify-center pt-[1px] text-center  font-semiBold leading-4 text-white lg:pt-[3px] !text-xs lg:!text-sm">
                                  {item.discount}
                                </span>
                              </div>
                            ) : (
                              <div />
                            )}

                            <div className="flex items-center">
                              <p className="text-base font-medium  lg:text-lg  !text-[#000002]">
                                {item.price}
                              </p>
                              <span className=" !text-[#000002]  mr-1  !text-xs font-medium  ">
                                تومان
                              </span>
                            </div>
                          </div>

                          {item.oldPrice && (
                            <div className=" flex w-full items-center justify-end gap-2">
                              <div className="flex items-center">
                                <p className="pt-0.5 text-sm font-medium line-through lg:pt-0 lg:text-base text-[#919ebc]">
                                  {item.oldPrice}
                                </p>
                                <span className="mr-1 !text-xs font-medium   opacity-0  lg:opacity-100 !text-[#919ebc]">
                                  تومان
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
    </section>
  );
}
