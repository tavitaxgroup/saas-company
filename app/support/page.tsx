"use client";

import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useI18n } from "../i18n";
import navItems from "../navigation";

export default function SupportPage() {
  const { list, t } = useI18n();
  const supportItems = list("support.items").map((item) => {
    const [title, text] = item.split("|");
    return { title, text };
  });
  const faqItems = list("support.faq").map((item) => {
    const [question, answer] = item.split("|");
    return { question, answer };
  });

  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="detail-hero">
        <Image
          src="/assets/stock/arise-lab-hero.jpg"
          alt="Modern biotechnology laboratory for SISBIO support inquiries"
          fill
          className="detail-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="eyebrow">{t("support.heroEyebrow")}</p>
          <h1>{t("support.heroTitle")}</h1>
          <p>{t("support.heroCopy")}</p>
        </div>
      </section>

      <section className="section page-card-grid support-card-grid">
        {supportItems.map((item) => (
          <article className="page-card" key={item.title}>
            <span>{t("support.heroEyebrow")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow teal">{t("support.faqEyebrow")}</p>
          <h2>{t("support.faqTitle")}</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">{t("support.ctaEyebrow")}</p>
          <h2>{t("support.ctaTitle")}</h2>
        </div>
        <a className="primary-button" href="/contact">
          {t("support.ctaButton")}
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
