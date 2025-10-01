import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import { FaTelegram, FaYoutube } from "react-icons/fa6";

export default function ContactSection() {
  // شبکه‌های اجتماعی
  const socialLinks = [
    {
      name: "اینستاگرام",
      href: "#",
      icon: <FaInstagram className="text-[16px] sm:text-[18px] lg:text-[28px]" />,
    },
    {
      name: "آپارات",
      href: "#",
      icon: <SiAparat className="text-[16px] sm:text-[18px] lg:text-[28px]" />,
    },
    {
      name: "تلگرام",
      href: "#",
      icon: <FaTelegram className="text-[16px] sm:text-[18px] lg:text-[28px]" />,
    },
    {
      name: "یوتیوب",
      href: "#",
      icon: <FaYoutube className="text-[16px] sm:text-[18px] lg:text-[28px]" />,
    },
  ];

  // شماره تلفن‌ها
  const phones = ["021-91077500", "021-58424000"];

  // اپلیکیشن‌ها
  const apps = [
    {
      name: "بازار",
      href: "#",
      img: "/images/footer/footerBazzar.png",
    },
    {
      name: "سیب اپ",
      href: "#",
      img: "/images/footer/footerSibapp.png",
    },
    {
      name: "مایکت",
      href: "#",
      img: "/images/footer/footerMayket.png",
    },
  ];

  return (
    <div className="my-6  lg:my-10 border-t !border-[#ffffff]  text-white">
      <nav className="w-full pt-8 lg:pt-12 grid  grid-cols-1 lg:grid-cols-3 ">
        {/* ارتباط با ما */}
        <div className="flex flex-col">
          <p className="!text-base  lg:text-lg font-medium pb-6">ارتباط با ما</p>

          <div className="flex lg:hidden leading-5 pb-5 ">
            <p className="text-xs leading-5 font-medium ">شبکه های اجتماعی</p>
            <div className="flex gap-5  !text-gray-200 pr-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* تلفن */}
          <div className=" flex pb-5 lg:pb-2 text-xs leading-5 lg:!text-sm font-medium lg:leading-9 !text-gray-200">
            <p className="block ">تلفن :</p>
            <div className="flex pr-3">
              {phones.map((phone, idx) => (
                <span key={idx} className="flex items-center">
                  <a
                    href={`tel:${phone.replace(/-/g, "")}`}
                    target="_blank"
                    className=" whitespace-nowrap"
                  >
                    {phone}
                  </a>
                  {idx < phones.length - 1 && (
                    <span className="mx-0.5"> - </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* ایمیل */}
          <div className="flex pb-5 lg:pb-2 text-xs leading-5 lg:!text-sm font-medium lg:leading-9 !text-gray-200">
            <p className="block">ایمیل :</p>
            <span className="flex items-center pr-3">
              <a
                href="mailto:info@technolife.com"
                target="_blank"
                className="dir-ltr whitespace-nowrap"
              >
                info@technolife.com
              </a>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex flex-col">
          <p className="text-lg font-medium pb-6">شبکه های اجتماعی</p>
          <div className="flex gap-7 !text-sm font-medium leading-9 !text-gray-200">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="nofollow noopener"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="my-6  lg:my-0 pt-8 lg:pt-0 border-t !border-[#ffffff] lg:border-t-0 flex flex-col">
          <p className="!text-base  lg:!text-lg font-medium pb-6">دانلود اپلیکیشن ما از:</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-3  !text-sm font-medium leading-9 !text-gray-200">
            {apps.map((app, idx) => (
              <a
                key={idx}
                href={app.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full"
              >
                <div className="relative w-[90%] min-[480px]:w-[75%] sm:w-[90%] aspect-[5/2] xl:aspect-[6/2] bg-white flex items-center justify-center rounded-sm">
                  <Image
                    src={app.img}
                    alt={`دانلود از ${app.name}`}
                    width="71"
                    height="31"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
