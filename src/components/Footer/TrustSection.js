import Image from "next/image";
import React from "react";

export default function TrustSection() {
  // لوگوهای همکار
  const partners = [
    {
      name: "تکنوپی",
      href: "#",
      img: "/images/footer/1.png",
      width: 120,
      height: 38,
    },
    {
      name: "تکنوگلد",
      href: "#",
      img: "/images/footer/2.png",
      width: 120,
      height: 38,
    },
    {
      name: "تکنو اکسپرس",
      href: "#",
      img: "/images/footer/3.png",
      width: 120,
      height: 38,
    },
  ];

  // نمادها و مجوزها
  const permits = [
    {
      name: "نماد اعتماد الکترونیکی تکنولایف",
      href: "#",
      img: "/images/footer/logo1.png",
    },
    {
      name: "اتحادیه کشوری کسب و کار های مجازی",
      href: "#",
      img: "/images/footer/logo2.png",
    },
    {
      name: "جشنواره وب موبایل ایران",
      href: "#",
      img: "/images/footer/logo3.png",
    },
    {
      name: "انجمن علمی تجارت الکترونیکی ایران",
      href: "#",
      img: "/images/footer/logo4.png",
    },
    {
      name: "ساماندهی تکنولایف",
      href: "#",
      img: "/images/footer/logo5.png",
    },
  ];

  return (
    <div className="my-6  lg:my-10 border-t !border-[#ffffff]  text-white">
      <nav className="pt-8 lg:pt-12 grid w-full grid-cols-1 lg:grid-cols-2 ">
        <div className="col-span-1 grid grid-cols-3 sm:grid-cols-6  lg:grid-cols-4 ">
          {partners.map((item, idx) => (
            <a
              key={idx}
              className="w-full"
              target="_blank"
              href={item.href}
              title={item.name}
            >
              <div className="relative w-[90%] min-[480px]:w-[75%] sm:w-[90%] md:w-[75%] xl:w-[68%] 2xl:w-[63%] 4xl:w-[55%] aspect-[5/2] xl:aspect-[6/2]   rounded-sm">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </a>
          ))}
        </div>

        {/* نمادها و مجوزها */}
        <div className="col-span-1 my-6  lg:my-0 pt-8 lg:pt-0 border-t !border-[#ffffff] lg:border-t-0 ">
          <nav className="grid w-full grid-cols-5 sm:grid-cols-9 md:grid-cols-12 lg:grid-cols-8 ">
            <div className="hidden lg:block col-span-3"/>
              
            
            {permits.map((item, idx) => (
              <a
                key={idx}
                target="_blank"
                href={item.href}
                rel="nofollow noopener noreferrer"
                className="w-full "
              >
                <div className="relative w-[85%] min-[480px]:w-[70%] sm:w-[80%]  lg:w-[85%] 
                xl:w-[75%] 2xl:w-[70%] min-[2000px]:w-[65%] aspect-square bg-white rounded-sm overflow-hidden lg:mr-auto">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="w-full h-full"
                  />
                </div>
              </a>
            ))}
          </nav>
        </div>
      </nav>
    </div>
  );
}
