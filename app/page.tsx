"use client";

import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { splitRecord, useI18n } from "./i18n";
import navItems from "./navigation";

export default function Home() {
  const { list, t } = useI18n();
  const pageCards = list("home.cards").map(splitRecord);
  const signalFeatures = list("home.stats").map((item) => {
    const [metric, title, text] = item.split("|");
    return { metric, title, text };
  });

  return (
    <main>
      <SiteHeader brandHref="/" navItems={navItems} ctaHref="/contact" />

      <section id="home" className="hero">
        <HeroCarousel />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{t("home.eyebrow")}</p>
          <h1>{t("home.title")}</h1>
          <p>{t("home.copy")}</p>
          <div className="hero-actions">
            <a className="primary-button" href="/signal-direct-imager">
              {t("home.primary")}
            </a>
            <a className="secondary-button" href="/contact">
              {t("home.secondary")}
            </a>
          </div>
        </div>
      </section>

      <section className="section split-intro">
        <div>
          <p className="eyebrow teal">{t("home.overviewEyebrow")}</p>
          <h2>{t("home.overviewTitle")}</h2>
        </div>
        <div className="intro-copy">
          <p>{t("home.overviewCopy1")}</p>
          <p>{t("home.overviewCopy2")}</p>
        </div>
      </section>

      <section className="section page-card-grid" aria-label="SISBIO website sections">
        {pageCards.map((item) => (
          <a className="page-card" href={item.href} key={item.title}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </a>
        ))}
      </section>

      <section className="section stats-band" aria-label="Signal-Direct highlights">
        {signalFeatures.map((item) => (
          <article className="stat-card" key={item.title}>
            <strong>{item.metric}</strong>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow teal">{t("home.flagshipEyebrow")}</p>
          <h2>{t("home.flagshipTitle")}</h2>
          <p>{t("home.flagshipCopy")}</p>
          <div className="mini-list">
            {list("home.flagshipList").map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a className="text-link" href="/technology">
            {t("home.flagshipLink")}
          </a>
        </div>
        <div className="device-stage with-lab">
          <Image
            src="/assets/stock/lab-instrument-bench.jpg"
            alt="Organized laboratory bench with research instruments"
            fill
            className="device-stage-bg"
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <Image
            src="/assets/signal-direct-imager.webp"
            alt="Signal-Direct Imager product"
            width={400}
            height={400}
            priority
          />
        </div>
      </section>

      <section className="bio-section compact-bio">
        <Image
          src="/assets/banner3.webp"
          alt="Bioproduction media and feed laboratory background"
          fill
          className="bio-bg"
          sizes="100vw"
        />
        <div className="bio-overlay" />
        <div className="bio-content">
          <p className="eyebrow">{t("home.bioEyebrow")}</p>
          <h2>{t("home.bioTitle")}</h2>
          <p>{t("home.bioCopy")}</p>
          <a className="secondary-button" href="/bioproduction">
            {t("home.bioButton")}
          </a>
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">{t("home.ctaEyebrow")}</p>
          <h2>{t("home.ctaTitle")}</h2>
        </div>
        <a className="primary-button" href="/contact">
          {t("common.contactSisbio")}
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
