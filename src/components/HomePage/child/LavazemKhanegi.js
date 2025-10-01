import Image from "next/image";
import React from "react";

const items = [
  {
    title: "بخاری برقی",
    href: "#",
    img: "/images/home/LavazemKhanegi/1.webp",
  },
  {
    title: "جاروبرقی",
    href: "#",
    img: "/images/home/LavazemKhanegi/2.webp",
  },
  {
    title: "آبمیوه گیری",
    href: "#",
    img: "/images/home/LavazemKhanegi/3.webp",
  },
  {
    title: "کولر گازی",
    href: "#",
    img: "/images/home/LavazemKhanegi/4.webp",
  },
  {
    title: "چای ساز",
    href: "#",
    img: "/images/home/LavazemKhanegi/5.webp",
  },
  {
    title: "اتو",
    href: "#",
    img: "/images/home/LavazemKhanegi/6.webp",
  },
  {
    title: "پلوپز",
    href: "#",
    img: "/images/home/LavazemKhanegi/7.webp",
  },
  {
    title: "مایکروویو",
    href: "#",
    img: "/images/home/LavazemKhanegi/8.webp",
  },
  {
    title: "یخچال",
    href: "#",
    img: "/images/home/LavazemKhanegi/9.webp",
  },
  {
    title: "قهوه ساز",
    href: "#",
    img: "/images/home/LavazemKhanegi/10.webp",
  },
  {
    title: "چرخ گوشت",
    href: "#",
    img: "/images/home/LavazemKhanegi/11.webp",
  },
  {
    title: "ماشین ظرفشویی",
    href: "#",
    img: "/images/home/LavazemKhanegi/12.webp",
  },
  {
    title: "سشوار",
    href: "#",
    img: "/images/home/LavazemKhanegi/13.webp",
  },
  {
    title: "ماشین لباسشویی",
    href: "#",
    img: "/images/home/LavazemKhanegi/14.webp",
  },
];

const LavazemKhanegi = () => {
  return (
    <section className="w-full  mt-14 ">
      <h2 className="pr-5 lg:pr-6 flex items-center gap-[6px] pb-4">
        <span className="text-sm lg:text-xl font-medium text-[#000002]">
          لوازم خانگی
        </span>
        <span className="text-xs lg:text-lg font-regular text-[#000511]">
          خانه و آشپزخانه
        </span>
      </h2>

      <ul className="w-full grid-lines">
        {items.map((item, i) => (
          <li key={i} className="col-span-1 w-full">
            <div className="w-[75%] min-[480px]:w-[55%] xl:w-[75%] mx-auto py-4">
              <a
                className="w-full h-full flex items-center justify-center "
                href={item.href}
              >
                <div className="relative w-full aspect-square group rounded-lg overflow-hidden">
                  <Image
                    title={item.title}
                    alt={item.title}
                    src={item.img}
                    className="lazy cursor-pointer h-full w-full"
                    width="500"
                    height="500"
                  />
                    <div className="absolute  -bottom-9.5 flex h-9.5 w-full items-center justify-center bg-[#1b3570] transition-all duration-75 group-hover:bottom-0">
                      <p className="pt-0.25 text-xs lg:text-base font-medium leading-6 text-white">
                        {item.title}
                      </p>
                    </div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LavazemKhanegi;

