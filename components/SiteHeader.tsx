"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteIdentity } from "@/content/site";
import { SmartLink } from "./SmartLink";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-header__inner">
        <SmartLink className="site-mark" href="/" aria-label="Aleksandar Tomovski home">
          <span>{siteIdentity.name}</span>
        </SmartLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <SmartLink
                key={item.href}
                className="nav-link"
                data-active={active}
                href={item.href}
              >
                {item.label}
              </SmartLink>
            );
          })}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        data-open={open}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <SmartLink
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </SmartLink>
        ))}
      </nav>
    </header>
  );
}
