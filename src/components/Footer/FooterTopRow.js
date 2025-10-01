"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function FooterTopRow({
  logoSrc = "https://www.technolife.com/image/static_white_logo_techno.svg",
  logoAlt = "Technolife",
  logoWidth = 1000,
  logoHeight = 500,
  label = "بازگشت به بالا",
  className = "",
}) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full justify-between items-center mt-12 lg:mt-16">
      <Image
        fetchPriority="auto"
        loading="lazy"
        className="w-20 lg:w-42"
        alt={logoAlt}
        src={logoSrc}
        width={logoWidth}
        height={logoHeight}
      />

      <div
        className="w-34 lg:w-44 aspect-[4/1] bg-white cursor-pointer flex  items-center justify-center gap-2 rounded-lg !text-[#223c78]"
        onClick={scrollToTop}
      >
        <IoIosArrowBack
          className={`rotate-90 text-[16px] lg:text-[18px] `}
        />

        <span className="text-sm text-primary lg:font-medium">{label}</span>
      </div>
    </div>
  );
}
