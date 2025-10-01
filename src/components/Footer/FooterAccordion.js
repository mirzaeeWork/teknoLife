"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function FooterAccordion({ sections }) {
  const [open, setOpen] = useState(() => sections.map(() => false));

  const toggle = (idx) =>
    setOpen((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });

  return (
    <div  className="my-6 border-t !border-[#f5f9fc] pt-8 text-white">
      {sections.map((section, idx) => {
        const panelId = `footer-acc-panel-${idx}`;
        const isOpen = open[idx];

        return (
          <nav key={section.title} className="w-full ">
            <div className="flex w-full flex-col">
              {/* Header */}
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="px-4 py-3 flex w-full cursor-pointer items-center justify-between "
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className="flex items-center gap-2 lg:gap-3">
                  <p className="font-medium !text-xs  sm:!text-sm  text-white ">
                    {section.title}
                  </p>
                </div>
                <IoIosArrowBack
                  className={` text-[16px] text-white  transition-transform duration-300 ${
                    isOpen ? "rotate-90" : "-rotate-90"
                  }`}
                />
              </button>

              {/* Panel */}
              <div
                id={panelId}
                className={`
                  w-full overflow-hidden transition-all duration-300 ease-in-out
                  ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0"}
                `}
              >
                <div className="m-5 px-4 flex flex-col gap-4 border-r border-white border-opacity-40 ">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs leading-5 !text-gray-200"
                      href={link.href || "#"}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        );
      })}
    </div>
  );
}
