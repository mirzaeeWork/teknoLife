"use client";
import React from "react";
import FooterTopRow from "./FooterTopRow";
import FooterLinkSections from "./FooterLinkSections";
import { DEFAULT_SECTIONS } from "@/data/data";
import FooterAccordion from "./FooterAccordion";
import ContactSection from "./ContactSection";
import TrustSection from "./TrustSection";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className=" mt-14 mb-2 lg:mb-4 mx-2 lg:mx-4   overflow-hidden rounded-xl lg:rounded-3xl bg-[linear-gradient(90deg,#0079b1,#1b3570)] ">
      <div className="px-4 lg:px-24 mx-auto w-full ">
        <FooterTopRow />
        <section className="hidden lg:block">
          <FooterLinkSections sections={DEFAULT_SECTIONS} />
        </section>

        <section className="block lg:hidden">
          <FooterAccordion sections={DEFAULT_SECTIONS} />
        </section>
        <ContactSection/>
        <TrustSection/>
      </div>
    </footer>
  );
}
