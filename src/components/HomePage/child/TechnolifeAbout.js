"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function TechnolifeAbout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      dir="rtl"
      className="border-t border-[#dcdfe6] mt-14 pt-6 !text-[#000002]"
    >
      <div className="relative">
        {/* Wrapper with clamp height */}
        <div
          className={`overflow-hidden ${
            expanded ? "h-auto" : "h-36 lg:h-72"
          }`}
        >
          <h1 className="text-base font-medium mb-3">
            فروشگاه اینترنتی تکنولایف
          </h1>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            فروشگاه اینترنتی تکنولایف سال‌ها است که به‌عنوان بزرگترین فروشگاه
            کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره
            موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد الکترونیکی
            می‌تواند خیال خیلی از افراد را راحت کند. <strong>تکنولایف</strong>{" "}
            با داشتن نماد اعتماد الکترونیکی و عضویت در سازمان صنفی رایانه‌ای
            کشور، همچنین عضویت در انجمن صنفی فروشگاه‌های اینترنتی، فضای ایمن
            برای خرید آنلاین را برای مشتریان خود ایجاد کرده است.
          </p>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            شما می‌توانید خرید کالای دیجیتال مانند
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              خرید لپ تاپ
            </a>
            ، گوشی موبایل در مدل‌ها و برندهای مختلف،
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              لوازم جانبی موبایل
            </a>
            ، هدفون، و کلیه لوازم دیجیتال مدنظر خود را با بهترین قیمت، در
            فروشگاه تکنولایف به ثبت برسانید.
          </p>

          <h2 className="text-base font-medium mt-6 mb-2">
            خرید گوشی از تکنولایف
          </h2>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            برای خیلی از کاربران، تکنولایف فروشگاه اینترنتی موبایل محسوب می‌شود.
            این بدان خاطر است که شما می‌توانید انواع گوشی موبایل مورد نظر خود،
            از جمله{" "}
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
             {" "} گوشی شیائومی
            </a>
            ، گوشی سامسونگ، گوشی هواوی، آیفون و دیگر برندها را در تکنولایف
            به‌راحتی پیدا و با قیمتی مناسب، خریداری کنید.
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              خرید گوشی
            </a>
            {" "}موبایل، آن‌هم اینترنتی، می‌تواند کاری دشوار باشد؛ اما شما می‌توانید
            با اطمینان کامل، گوشی موبایل مد نظرتان را از فروشگاه اینترنتی موبایل
            تکنولایف استعلام قیمت کرده و خریداری کنید.
          </p>

          <h2 className="text-base font-medium mt-6 mb-2">خرید گوشی سامسونگ</h2>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            برند کره‌ای سامسونگ، با تولید سالانه‌ی گوشی‌های پرچمدار، میان‌رده و
            اقتصادی، یکی از پرطرفدارترین و محبوب‌ترین برندها در میان کاربران
            سراسر جهان از جمله ایران است. انواع گوشی موبایل سامسونگ، مناسب
            کاربران گیمر، عاشقان تولید محتوا، علاقه‌مندان به عکاسی و دیگر
            گروه‌ها است. تنوع بالای گوشی سامسونگ در تکنولایف، این امکان را برای
            شما علاقه‌مندان ایجاد کرده که اقدام به{" "}
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              خرید گوشی سامسونگ
            </a>
            {" "}با بهترین قیمت کنید.
          </p>

          <h2 className="text-base font-medium mt-6 mb-2">خرید گوشی اپل</h2>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            گوشی اپل از گرانترین گوشی‌ها، در عین حال محبوب‌ترین گوشی‌ها در تمامی
            دنیا محسوب می‌شود. بالا بودن{" "}
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              قیمت گوشی آیفون{" "}
            </a>
            {" "}انگار هیچوقت نتوانست مانع شود که افراد موبایل این برند را برای خرید
            انتخاب نکنند. دوربین قوی، پردازنده‌ی همه‌فن‌حریف، طراحی زیبا و خیلی
            موارد دیگر، گوشی های این برند آمریکایی را بسیار پرطرفدار کرده و شما
            می‌توانید با بهترین قیمت، این گوشی‌ها را از سایت فروش گوشی تکنولایف
            خریداری کنید.
          </p>

          <h2 className="text-base font-medium mt-6 mb-2">خرید گوشی هواوی</h2>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            هواوی، این برند چینی، در سال ۲۰۱۲ برای جهانیان شناخته شد و توانست در
            زمانی کوتاه جزء چند شرکت برتر، به خصوص در فروش گوشی شود. با این که
            داستان‌های زیادی این برند داشت، اما باز هم طرفداران پروپاقرصی دارد.
            کسانی‌که هنوز هم به فکر خرید
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              گوشی هواوی{" "}
            </a>
            {" "}هستند. سایت خرید موبایل تکنولایف، گوشی‌های این برند را با قیمتی
            فوق‌العاده برای کاربران به فروش می‌رساند.
          </p>

          <h2 className="text-base font-medium mt-6 mb-2">خرید گوشی شیائومی</h2>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            سازندگان چینی شیائومی نیز، با تولید انواع گوشی و
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              {" "}تبلت{" "} 
            </a>
            {" "}باکیفیت، توانست نظر و اعتماد خریداران گوشی را به‌ خود جلب کند. یکی
            از دلایلی که شیائومی جزء برندهای پرطرفدار است، مقرون‌به‌صرفه بودن
            قیمت گوشی های این برند نسبت به رقبا است.
          </p>

          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 mb-3 text-sm">
            شما می‌توانید انواع{" "}
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              گوشی 5G{" "}
            </a>
            {" "}و 4G را با بهترین قیمت از technolife خریداری کنید. توجه داشته باشید
            که با خرید لوازم جانبی موبایل مانند
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              پاوربانک
            </a>
            ، قاب و گلس،
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              {" "}شارژر موبایل{" "}
            </a>
            {" "}و… از تکنولایف، می‌توانید گوشی خود را به بهترین شکل تجهیز کنید.
          </p>

          <h2 className="text-base font-medium mt-6 mb-2">
            خرید هدفون و هندزفری
          </h2>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            در دنیای شلوغ امروزی، یکی از مهمترین گجت‌های دیجیتالی که همه در سبد
            خرید خود جای می‌دهند،
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              {" "}هدفون{" "}
            </a>
            و هندزفری است. این روزها که استفاده از هدفون و
            <a
              className="!text-[#14a0de] hover:no-underline px-[1px]"
              target="_blank"
              href="#"
            >
              {" "}هندزفری بلوتوثی{" "}
            </a>
            {" "}فراگیرتر از گذشته شده، خوب است بدانید که شما می‌توانید تنوع
            گسترده‌ای از نظر برند را در این محصولات در سایت تکنولایف پیدا کنید.
            کلیه هندزفری‌ها و هدفون‌ها در رنگ‌بندی‌های متنوع و با گارانتی معتبر
            به فروش می‌رسند.
          </p>

          <h2 className="text-base font-medium mt-6 mb-2">
            خرید ساعت و بند هوشمند
          </h2>
          <p className="text-justify !text-[#5f5f5f] leading-8  lg:leading-9 text-sm">
            ساعت هوشمند و بند هوشمند، دیگر محصولاتی هستند که به دلیل داشتن
            امکانات بالا، این روزها بسیار مورد توجه قرار می‌گیرند و محصولی مناسب
            استفاده روزمره، و همینطور کاملا مناسب هدیه دادن است. ساعت‌های هوشمند
            با توجه به برند قیمت‌های متنوعی دارند و همانطور که انتظار می‌رود،
            مدل‌های گرا‌ن‌تر از امکانات بیشتری نیز بهره می‌برند.
          </p>
        </div>

        {/* Gradient overlay when collapsed */}
        {!expanded && (
          <div className=" absolute bottom-0 right-0 z-10 h-12 w-full bg-gradient-to-t from-white pointer-events-none lg:h-24" />
        )}
      </div>

      {/* Toggle button */}
      <div className="mt-2">
        <button
          type="button"
          onClick={() => setExpanded((p) => !p)}
          className="flex items-center gap-2 !text-[#223c78] font-medium text-sm lg:text-base  cursor-pointer"
          aria-expanded={expanded}
          aria-controls="technolife-content"
        >
          <span>{expanded ? "بستن" : "نمایش بیشتر"}</span>
          <IoIosArrowBack
            className={`${
              expanded ? "rotate-90" : "-rotate-90"
            } text-[16px] lg:text-[18px] `}
          />
        </button>
      </div>
    </article>
  );
}
