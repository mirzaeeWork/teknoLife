import Image from "next/image";
import React from "react";

export default function FestivalBanner() {
  return (
    <a
      id="festival_banner"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div className="w-full relative h-12 min-[1400px]:h-14 " >
        <div className="absolute inset-0 w-full h-full">
          <Image
            loading="eager"
            width="1920"
            height="60"
            style={{ objectFit: "cover" }}
            alt="festival_banner"
            src="/images/tekno/1.gif"
            className="block w-full h-full"
          />
        </div>
      </div>
    </a>
  );
}
