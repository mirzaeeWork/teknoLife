import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseCircle, IoSearchOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import NavbarMenu from "./NavbarMenu";

function SearchWrapper({ open: show, setOpen: setClose }) {
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

  const handleClearMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValue("");
    setOpenAll(true, false);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const handleChange = (e) => {
    const next = e.target.value;
    setValue(next);
    setOpen((o) => (o.close === !!next ? o : { ...o, close: !!next }));
  };

  return (
    <nav
      className={`fixed inset-0 top-0 right-0 z-[500] h-screen w-screen bg-white p-4 transition-all duration-300 ${
        show ? "opacity-100 visible " : "opacity-0 invisible "
      }`}
    >
      <div
        className={`flex gap-2 items-center relative ${
          open.modal ? "z-[501]" : ""
        }`}
      >
        <div
          className={`flex w-full bg-[#f0f0f0] rounded-sm px-2 ${
            open.modal ? "bg-[#EBEBEB]" : ""
          }`}
        >
          <div className={`flex items-center gap-2 w-full h-11`}>
            {!open.close ? (
              <IoSearchOutline className="w-6 h-6 text-[#9c9d9e] transition-all duration-150" />
            ) : (
              <IoCloseCircle
                className="w-6 h-6 text-[#666] transition-all duration-150"
                onMouseDown={handleClearMouseDown}
              />
            )}

            <input
              ref={inputRef}
              className="w-full px-2 bg-transparent outline-0 text-[15px] placeholder:text-sm"
              placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
        </div>

        <div
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          className={`
            absolute top-[115%] right-0 w-[calc(100%-32px)] bg-[#EBEBEB] rounded-xl shadow-md p-4
            transition-all duration-150
           
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

        <IoMdClose
          className="w-6 h-6 text-[#666]"
          onClick={() => setClose(false)}
        />
      </div>
    </nav>
  );
}

// --- 1) Banner ---
function FestivalBanner() {
  return (
    <a
      className="block w-full"
      target="_blank"
      rel="noopener noreferrer"
      href="#"
      id="festival_banner"
    >
      <div className="w-full relative h-8 sm:h-14" >
        <div className="absolute inset-0 w-full h-full">
          <Image
            loading="eager"
            width={1000}
            height={42}
            style={{ objectFit: "cover" }}
            alt="festival_banner"
            src="/images/tekno/2.gif"
            className="block w-full h-full"
          />
        </div>
      </div>
    </a>
  );
}

// --- 3) Logo ---
function Logo() {
  return (
    <a href="/" target="_blank">
      <Image
        loading="lazy"
        width={102}
        height={32}
        alt="Technolife"
        title="Technolife"
        src="/images/tekno/logo_techno_new.svg"
      />
    </a>
  );
}

// --- 4) Cart + Login ---
function CartLogin() {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <AiOutlineShoppingCart className="w-6 h-6 fill-gray-600 " />
        <div className="absolute top-0 right-1 z-1">
          <p></p>
        </div>
      </div>
      <button className="flex text-[12px]  px-2 py-1 cursor-pointer items-center rounded-lg border border-[#223c78]">
        <span className="!text-[#212121] ">ورود</span>
      </button>
    </div>
  );
}

// --- 5) Mobile Search ---
function MobileSearch() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className={`flex gap-2 px-3 bg-[#f6f6f6] rounded-sm py-2.5`}>
        <IoSearchOutline className="w-6 h-6 text-[#9c9d9e]" />
        <input
          placeholder="جستجو ..."
          readOnly
          className="w-full px-2 bg-transparent outline-0 cursor-text placeholder:text-[#c2c0c0] text-sm"
          onFocus={() => setOpen(true)}
        />
      </div>
      <SearchWrapper open={open} setOpen={setOpen} />
    </div>
  );
}

// --- 6) Chat Button ---
function ChatButton() {
  return (
    <button className="rounded-full w-9.5 h-9.5 bg-[#fffaff]">
      <Image
        loading="lazy"
        width={36}
        height={36}
        alt="chat"
        src="https://www.technolife.com/image/Sparkle.svg"
      />
    </button>
  );
}

// --- 7) Sidebar Nav (container) ---
function SidebarNav() {
  return (
    <div className="baseModal fixedBox">
      <nav id="menu_itemz" className="bg"></nav>
    </div>
  );
}

function HeaderNavMenu({ handleMenu:onCancel }) {
  return (
    <div className=" flex items-center justify-between mb-6 px-4">
      {/* آیکن کنسل */}
      <IoMdClose
        className="cursor-pointer w-6 h-6 text-[#666] transition-all duration-150"
        onClick={onCancel}
      />

      {/* لوگو */}
      <a href="/" target="_blank">
        <div style={{ width: 35 }}>
          <Image
            loading="lazy"
            width={35}
            height={35}
            alt="Technolife"
            title="Technolife"
            src="https://www.technolife.com/image/static_technolife-brand_new.svg"
          />
        </div>
      </a>
    </div>
  );
}

// --- 8) HeaderMobile (composition only, هیچ چیز اضافه نشده) ---
export default function HeaderMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);
  return (
    <article className="header-module__header___AmsK4 header-module__relative___S3i4S">
      <FestivalBanner />

      <div className="w-full px-4">
        <div className="py-3 flex w-full flex-col gap-4">
          <div className=" flex w-full items-center justify-between">
            <AiOutlineMenu
              className="cursor-pointer lg:hidden w-6 h-6 text-[#666] "
              onClick={handleMenu}
            />
            <Logo />
            <CartLogin />
          </div>
          <div className="flex gap-2">
            <MobileSearch />
            <ChatButton />
          </div>
          <section
            className={`relative transition-all duration-200 ${
              openMenu ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div
              className={`fixed h-screen top-0 right-0  transition-all duration-200 py-4
                ${
                  openMenu
                    ? "w-[70%] sm:w-[50%] z-[501]  bg-[#fff]"
                    : "w-0"
                }
              `}
            >
              <HeaderNavMenu handleMenu={handleMenu}/>
              <NavbarMenu classes="w-full flex-col  gap-7 overflow-hidden px-4" />
            </div>

            {/* بک‌دراپ برای بستن منو */}
            <div
              onClick={handleMenu}
              className={`modalBg transition-all duration-200
                ${
                  openMenu
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                }
              `}
            />
          </section>{" "}
        </div>
      </div>
    </article>
  );
}
