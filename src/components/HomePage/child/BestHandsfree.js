// components/BestHandsfree.jsx
import Image from "next/image";
import React from "react";

const brands = [
  {
    title: "کیوسی وای",
    href: "#",
    src: "/images/home/handsfree/1.webp",
    alt: "کیوسی وای",
    titleAttr: "کیوسی وای",
  },
  {
    title: "هایلو",
    href: "#",
    src: "/images/home/handsfree/2.webp",
    alt: "هایلو",
    titleAttr: "هایلو",
  },
  {
    title: "شیائومی",
    href: "#",
    src: "/images/home/handsfree/3.webp",
    alt: "شیائومی",
    titleAttr: "شیائومی",
  },
  {
    title: "اپل",
    href: "#",
    src: "/images/home/handsfree/4.webp",
    alt: "اپل",
    titleAttr: "اپل",
  },
  {
    title: "سامسونگ",
    href: "#",
    src: "/images/home/handsfree/5.webp",
    alt: "سامسونگ",
    titleAttr: "سامسونگ",
  },
  {
    title: "هوآوی",
    href: "#",
    src: "/images/home/handsfree/6.webp",
    alt: "هوآوی",
    titleAttr: "هوآوی",
  },
  {
    title: "انکر",
    href: "#",
    src: "/images/home/handsfree/7.webp",
    alt: "انکر",
    titleAttr: "انکر",
  },
];

export default function BestHandsfree({ulClass,img}) {
  return (
    <section className="mt-14 flex w-full flex-col">
      <h2 className="text-[#000002] text-center text-sm font-bold leading-6  lg:text-[24px]">
        برترین‌های هندزفری
      </h2>
      <ul className={`${ulClass} pt-4 xl:pt-6`}>
        {brands.map((b, i) => (
          <li
            key={i}
            className="col-span-1 flex flex-col items-center  gap-0.5 lg:gap-0"
          >
            <div className={`${img} mx-auto`}>
              <Image
                fetchPriority="auto"
                loading="lazy"
                src={b.src}
                alt={b.alt}
                title={b.titleAttr}
                className="cursor-pointer w-full  "
                width={1200}
                height={1200}
              />
            </div>

            <a
              className="text-xs font-medium leading-4 text-[#000002] lg:text-lg"
              href={b.href}
            >
              {b.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
