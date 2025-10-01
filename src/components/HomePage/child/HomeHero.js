"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { BsFillTriangleFill } from "react-icons/bs";
import { TbTriangleFilled } from "react-icons/tb";

const slides = [
  { href: "#", src: "/images/home/homeHero/3.gif",  srcMobile: "/images/home/homeHero/mobile/3.gif",  title: "گوشی‌های اپل" },
  { href: "#", src: "/images/home/homeHero/1.webp", srcMobile: "/images/home/homeHero/mobile/1.png",  title: "به وقت خرید!" },
  { href: "#", src: "/images/home/homeHero/2.webp", srcMobile: "/images/home/homeHero/mobile/2.png",  title: "لپتاپ دانشجویی و دانش‌آموزی" },
  { href: "#", src: "/images/home/homeHero/4.webp", srcMobile: "/images/home/homeHero/mobile/4.png",  title: "انواع لوازم پخت و پز" },
  { href: "#", src: "/images/home/homeHero/5.webp", srcMobile: "/images/home/homeHero/mobile/5.png",  title: "انواع طلا٬ سکه و زیورآلات" },
  { href: "#", src: "/images/home/homeHero/6.webp", srcMobile: "/images/home/homeHero/mobile/6.png",  title: "ساعت هوشمند" },
  { href: "#", src: "/images/home/homeHero/7.webp", srcMobile: "/images/home/homeHero/mobile/7.png",  title: "انواع محصولات زیبایی و سلامت" },
  { href: "#", src: "/images/home/homeHero/8.webp", srcMobile: "/images/home/homeHero/mobile/8.png",  title: "ابزار" },
  { href: "#", src: "/images/home/homeHero/9.webp", srcMobile: "/images/home/homeHero/mobile/9.png",  title: "گوشی‌های سامسونگ" },
  { href: "#", src: "/images/home/homeHero/10.webp",srcMobile: "/images/home/homeHero/mobile/10.png", title: "گوشی‌های سامسونگ" },
];
export default function HomeHero() {
  return (
    <section className="relative w-full group overflow-hidden ">
      <Swiper
        modules={[
          Navigation,
          Pagination,
         Autoplay,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        dir="rtl"
        className="w-full"
        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
          renderBullet: (i, cls) => `<span class="hero-bullet ${cls}"></span>`,
        }}
      >
        {slides.map((s, i) => (
          <SwiperSlide
            key={i}
            className="relative aspect-[3/2] lg:aspect-[8/2]"
          >
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 block"
            >
              {/* دسکتاپ */}
              <Image
                src={s.src}
                alt={s.title}
                fill
                sizes="100vw"
                className="hidden lg:block object-cover"
                priority={i === 0}
              />
              {/* موبایل/تبلت تا <lg */}
              <Image
                src={s.srcMobile}
                alt={s.title}
                fill
                sizes="100vw"
                className="lg:hidden object-cover"
                priority={i === 0}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>


      <div
        className="
            hero-pagination
            absolute bottom-2 lg:!bottom-[28px] inset-x-0 z-20
            flex items-center justify-center
            lg:justify-start lg:pr-10 
          "
      ></div>
      <button
        className="
                  hero-prev
                  absolute bottom-16 right-14
                  z-30 bg-transparent
                  hidden lg:block                     
                  transition-opacity duration-200
                  lg:opacity-0 lg:group-hover:opacity-100 
                  pointer-events-auto           
                "
        aria-label="قبلی"
      >
        <p className="relative w-10 h-10 ">
          <TbTriangleFilled className="absolute top-1/2 -translate-y-1/2  rotate-90 left-1/2 -translate-x-1/2 text-[#fff] text-[40px] z-31" />
          <IoIosArrowBack className="absolute top-1/2 -translate-y-1/2 rotate-180 left-[45%] -translate-x-1/2 text-[18px] z-32" />
        </p>
      </button>
      <button className="hero-next absolute bottom-16 right-[136px] z-30 hidden lg:block  bg-transparent lg:opacity-0 lg:group-hover:opacity-100 pointer-events-auto ">
        <p className="relative w-10 h-10 ">
          <TbTriangleFilled className="absolute top-1/2 -translate-y-1/2  -rotate-90 left-1/2 -translate-x-1/2 text-[#fff] text-[40px] z-31" />
          <IoIosArrowBack className="absolute top-1/2 -translate-y-1/2 left-[55%] -translate-x-1/2 text-[18px] z-32" />
        </p>
      </button>
    </section>
  );
}
