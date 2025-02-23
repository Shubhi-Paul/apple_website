import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span>
            or <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex flex-col md:flex-row md:items-center justify-between p-4 text-gray">
          <p className="font-semibold text-xs mb-2 md:mb-0">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-start md:justify-end">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-xs">
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 md:mx-5">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
