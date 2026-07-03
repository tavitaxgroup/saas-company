"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { languageOptions, useI18n } from "../i18n";

type NavItem = {
  key: string;
  href: string;
  children?: NavItem[];
};

type SiteHeaderProps = {
  brandHref?: string;
  navItems: NavItem[];
  ctaHref?: string;
};

export default function SiteHeader({
  brandHref = "/",
  navItems,
  ctaHref = "/contact"
}: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const { locale, setLocale, t } = useI18n();

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown("");
  };

  return (
    <header className="site-header">
      <Link className="brand" href={brandHref} aria-label="SISBIO home" onClick={closeMenu}>
        <Image src="/assets/logo-sisbio.webp" alt="SISBIO" width={100} height={70} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) =>
          item.children ? (
            <div
              className="nav-dropdown"
              key={item.href}
              onMouseEnter={() => setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown("")}
              onFocus={() => setOpenDropdown(item.href)}
            >
              <button
                className="nav-dropdown-trigger"
                type="button"
                aria-expanded={openDropdown === item.href}
                aria-haspopup="true"
                onClick={() =>
                  setOpenDropdown((current) => (current === item.href ? "" : item.href))
                }
              >
                {t(`nav.${item.key}`)}
              </button>
              <div className={`nav-dropdown-menu ${openDropdown === item.href ? "is-open" : ""}`}>
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href} onClick={() => setOpenDropdown("")}>
                    {t(`nav.${child.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.href} href={item.href}>
              {t(`nav.${item.key}`)}
            </Link>
          )
        )}
      </nav>
      <Link className="header-cta" href={ctaHref}>
        {t("common.inquireNow")}
      </Link>
      <label className="language-select desktop-language">
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value as typeof locale)}
          aria-label={t("common.language")}
        >
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.shortLabel}
            </option>
          ))}
        </select>
      </label>
      <button
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`mobile-nav ${isOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) =>
          item.children ? (
            <div className="mobile-nav-group" key={item.href}>
              <span>{t(`nav.${item.key}`)}</span>
              {item.children.map((child) => (
                <Link key={child.href} href={child.href} onClick={closeMenu}>
                  {t(`nav.${child.key}`)}
                </Link>
              ))}
            </div>
          ) : (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {t(`nav.${item.key}`)}
            </Link>
          )
        )}
        <label className="language-select mobile-language">
          <select
            value={locale}
            onChange={(event) => setLocale(event.target.value as typeof locale)}
            aria-label={t("common.language")}
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <Link className="mobile-nav-cta" href={ctaHref} onClick={closeMenu}>
          {t("common.inquireNow")}
        </Link>
      </nav>
    </header>
  );
}
