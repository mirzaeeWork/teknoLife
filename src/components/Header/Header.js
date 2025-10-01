"use client";

import FestivalBanner from "./FestivalBanner";
import HeaderMobile from "./HeaderMobile";
import TechnolifeHeader from "./TechnolifeHeader";

function Header() {
  return (
    <header
      id="header"
      className="bg-white border-b border-solid border-black/20 inset-x-0 fixed top-0 z-100 w-full duration-300 transition-all"
      role="banner"
    >
      <section className="hidden lg:block">
        <FestivalBanner />
        <TechnolifeHeader />
      </section>

      <section className="block lg:hidden ">
        <HeaderMobile />
      </section>
    </header>
  );
}

export default Header;
