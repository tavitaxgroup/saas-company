"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  brandHref?: string;
  navItems: NavItem[];
  ctaHref?: string;
};

export default function SiteHeader({
  brandHref = "/",
  navItems,
  ctaHref = "#contact"
}: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href={brandHref} aria-label="SISBIO home" onClick={closeMenu}>
        <Image src="/assets/logo-sisbio.webp" alt="SISBIO" width={100} height={70} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href={ctaHref}>
        Inquire Now
      </Link>
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
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Link className="mobile-nav-cta" href={ctaHref} onClick={closeMenu}>
          Inquire Now
        </Link>
      </nav>
    </header>
  );
}
