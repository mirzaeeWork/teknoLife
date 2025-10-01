import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { BsGrid } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose, IoCloseCircle, IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { TbCirclePercentage } from "react-icons/tb";
import { GrBasket } from "react-icons/gr";
import { RiGift2Line } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { GiTwoCoins } from "react-icons/gi";
import NavbarMenu from "./NavbarMenu";

export default function TechnolifeHeader() {
  const [showBottom, setShowBottom] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      const y = window.scrollY || 0;
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const delta = y - lastY.current;
        const threshold = 4;
        if (delta > threshold) setShowBottom(false);
        else if (delta < -threshold) setShowBottom(true);
        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="px-6">
      <NavbarTop />

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          showBottom ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-opacity ${
            showBottom ? "opacity-100 pb-5" : "opacity-0"
          }`}
        >
          <NavbarMenu classes="flex-row items-center gap-10"/>
        </div>
      </div>
    </header>
  );
}

/* ============== Subcomponents ============== */
function NavbarTop() {
  return (
    <div className="w-[100%] flex items-center justify-between pt-4 pb-6">
      <div className="w-[50%] xl:w-[40%] flex items-center gap-4 ">
        <Logo />
        <SearchWrapper />
      </div>
      <div className="flex gap-6 mb-auto">
        <AuthButtons />
        <Cart />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#" target="_blank" className="block">
      <Image
        loading="lazy"
        width="110"
        height="42"
        alt="Technolife"
        title="Technolife"
        src="/images/tekno/logo_techno.svg"
      />
    </a>
  );
}

function SearchWrapper() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState({
    dropdown: false,
    modal: false,
    close: false,
  });

  // helper: باز/بسته کردن دراپ‌دان و بک‌دراپ + وضعیت ضربدر
  const setOpenAll = (isOpen, showClose = !!value) => {
    setOpen({ dropdown: isOpen, modal: isOpen, close: showClose });
  };

  const handleFocus = () => setOpenAll(true);

  const handleBackdropMouseDown = () => {
    setOpenAll(false, !!value);
    inputRef.current?.blur();
  };

  const handleClearMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValue("");
    setOpenAll(true, false);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpenAll(false, !!value);
      inputRef.current?.blur();
    }
  };

  const handleChange = (e) => {
    const next = e.target.value;
    setValue(next);
    setOpen((o) => (o.close === !!next ? o : { ...o, close: !!next }));
  };

  return (
    <nav className="w-full">
      <div className={`relative ${open.modal ? "z-[501]" : ""}`}>
        <div
          className={`flex px-3 bg-[#f0f0f0] rounded-sm ${
            open.modal ? "bg-[#EBEBEB]" : ""
          }`}
        >
          <div className={`flex items-center gap-2 w-full `}>
            <IoSearchOutline className="w-6 h-6 text-[#9c9d9e]" />
            <input
              ref={inputRef}
              className="w-full px-2 bg-transparent outline-0 text-[15px] placeholder:text-sm"
              placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* آیکن کلوز */}
          <button
            type="button"
            tabIndex={-1}
            onMouseDown={handleClearMouseDown}
            className={`
              w-fit pr-4 flex justify-center items-center h-14
              transition-all duration-150
              ${
                open.close
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }
            `}
            aria-label="پاک کردن جستجو"
          >
            <IoCloseCircle className="w-6 h-6 text-[#666]" />
          </button>
        </div>

        <div
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          className={`
            absolute top-[110%] left-0 w-full bg-white rounded-xl shadow-md p-4
            transition-all duration-150
            ${
              open.dropdown
                ? "opacity-100 visible translate-y-0 z-[1001]"
                : "opacity-0 invisible translate-y-2"
            }
          `}
        >
          <div className="flex items-center gap-2 mb-2">
            <BsGrid className="w-6 h-6  text-[#9c9d9e]" />
            <p className="text-sm font-light">
              جستجو برای ...
              {value ? (
                <span className="text-[.75rem] !text-[#7194c2] font-normal">
                  ${value}
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      </div>

      <div
        onMouseDown={handleBackdropMouseDown}
        className={`
          modalBg
          transition-all duration-150
          ${
            open.modal
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      ></div>
    </nav>
  );
}

function AuthButtons() {
  return (
    <div className="flex  ml-3 h-10 cursor-pointer items-center rounded-lg border border-[#223c78] px-6 ">
      <span className="pl-5 !text-[#212121] border-l border-[#666]">ورود</span>
      <span className="pr-5 !text-[#212121]">ثبت نام</span>
    </div>
  );
}

function Cart() {
  return (
    <div className="relative flex h-full items-center group">
      <div>
        <div className="relative">
          <span>
            <div>
              <div className="relative border h-10 w-10 rounded flex items-center cursor-pointer justify-center border-[#d7dee0]">
                <AiOutlineShoppingCart className="w-6 h-6 fill-gray-600 " />
                <div className="absolute top-0 right-1 z-1">
                  <p></p>
                </div>
              </div>
            </div>
          </span>
          {/* Tooltip empty basket */}
          <div
            className="invisible absolute z-10 w-max rounded-full bg-white px-4 pb-1 pt-1.5 opacity-0 transition-all"
            style={{ bottom: "-50px", left: 0 }}
          >
            <p>
              سبد خرید <span>( خالی )</span>
            </p>
          </div>
        </div>
      </div>
      {/* Dropdown container (empty) */}
      <div
        className="invisible opacity-0 absolute z-50 rounded-2xl bg-white group-hover:opacity-100 group-hover:visible"
        style={{ top: "100%", left: "-25%" }}
      ></div>
    </div>
  );
}

// function NavbarMenu() {
//   return (
//     <nav>
//       <ul className="flex items-center gap-10 text-sm">
//         <NavItem href="#" icon={AiOutlineMenu} label="دسته بندی محصولات" />
//         <NavItem href="#" icon={TbCirclePercentage} label="تونل زمان" />
//         <NavItem href="#" icon={GrBasket} label="خرید سازمانی" />
//         <NavItem href="#" icon={RiGift2Line} label="کارت هدیه" />
//         <NavItem href="#" icon={TfiWallet} label="خرید اقساطی" />
//         <NavItem
//           href="#"
//           icon={GiTwoCoins}
//           label={
//             <span className="flex gap-2">
//               <span>خرید طلای دیجیتال</span>
//               <span className="bg-[#ffd6e8] !text-[#9f1853] !text-[12px] !leading-[18px] rounded-[25px] px-2 py-0 ">
//                 جدید
//               </span>
//             </span>
//           }
//         />
//         <li>
//           <a
//             href="#"
//             target="_blank"
//             rel="noreferrer"
//             className="!text-[#223c78]"
//           >
//             فروشنده شو
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// function NavItem({ href, icon: Icon, label }) {
//   return (
//     <li>
//       <a
//         href={href}
//         target="_blank"
//         rel="noreferrer"
//         className="flex items-center gap-2"
//       >
//         {Icon ? <Icon className="w-5 h-5 text-[#666]" /> : null}
//         <span>{label}</span>
//       </a>
//     </li>
//   );
// }
