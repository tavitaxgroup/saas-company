"use client";

import Image from "next/image";
import Link from "next/link";
import InquiryForm from "../components/InquiryForm";
import SiteFooter, { contactLinks } from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useI18n } from "../i18n";
import navItems from "../navigation";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="contact-hero">
        <Image
          src="/assets/stock/pexels-lab-instruments-hero.jpg"
          alt="Laboratory instruments prepared for a SISBIO product inquiry"
          fill
          className="contact-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <p className="eyebrow">{t("contact.heroEyebrow")}</p>
          <h1>{t("contact.heroTitle")}</h1>
          <p>{t("contact.heroCopy")}</p>
        </div>
      </section>

      <section className="section contact-page-layout">
        <aside className="contact-info-panel">
          <p className="eyebrow teal">{t("contact.infoEyebrow")}</p>
          <h2>{t("footer.company")}</h2>
          <div className="contact-address">
            <span>{t("footer.address1")}</span>
            <span>{t("footer.address2")}</span>
            <span>{t("footer.postal")}</span>
          </div>
          <div className="contact-link-list">
            {contactLinks.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <Link className="text-link" href="/">
            {t("common.backHome")}
          </Link>
        </aside>

        <div className="contact-form-panel">
          <InquiryForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
