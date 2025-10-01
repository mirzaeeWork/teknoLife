import React from "react";

export default function FooterLinkSections({ sections }) {
  return (
    <div  className="my-10 border-t !border-[#ffffff]  text-white">
      <div className="w-full pt-12">
        <div className="grid grid-cols-3 xl:grid-cols-6 gap-y-14 gap-x-4 xl:gap-4">
          {sections.map((section, idx) => (
            <nav key={idx} className="col-span-1 ">
              <strong className="text-lg font-medium ">{section.title}</strong>
              <div className="pt-6">
                {section.links.map((link, li) => (
                  <a
                    key={li}
                    href={link.href || "#"}
                    className="block !text-sm font-medium leading-9 !text-gray-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          ))}
        </div>
      </div>
    </div>
  );
}
