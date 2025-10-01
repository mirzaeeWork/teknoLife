// components/FirstTripleBannersHomepage.jsx
import Image from "next/image";
import React from "react";


export default function FirstTripleBannersHomepage({asideClass,bannersOne:banners,img}) {
  return (
    <aside
      className={` w-full ${asideClass} gap-7  mt-14`}
    >
      {banners.map((b, i) => (
        <div
          key={i}
          className=" col-span-1 overflow-hidden rounded-md  lg:rounded-xl"
        >
          <a target="_blank" href={b.href}>
            <div className={`w-full relative ${img}`} >
                <Image
                  loading="lazy"
                  fetchPriority="auto"
                  src={b.src}
                  alt={b.alt}
                  title={b.title}
                  className="w-full h-full"
                  width="900"
                  height="900"
                />
            </div>
          </a>
        </div>
      ))}
    </aside>
  );
}
