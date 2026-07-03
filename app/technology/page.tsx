"use client";

import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useI18n } from "../i18n";
import navItems from "../navigation";

export default function TechnologyPage() {
  const { list, t } = useI18n();
  const signalFeatures = list("tech.stats").map((item) => {
    const [metric, title, text] = item.split("|");
    return { metric, title, text };
  });

  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="detail-hero">
        <Image
          src="/assets/stock/pexels-biotech-scientists.jpg"
          alt="Scientists reviewing molecular biology imaging workflow"
          fill
          className="detail-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="eyebrow">{t("tech.heroEyebrow")}</p>
          <h1>{t("tech.heroTitle")}</h1>
          <p>{t("tech.heroCopy")}</p>
        </div>
      </section>

      <section className="section visual-feature">
        <div className="feature-image-panel">
          <Image
            src="/assets/anh-minh-hoa-signal-direct-imager-1.webp"
            alt="Lens-free direct-to-sensor Western blot imaging"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="eyebrow teal">{t("tech.directEyebrow")}</p>
          <h2>{t("tech.directTitle")}</h2>
          <p className="lead">{t("tech.directCopy")}</p>
        </div>
      </section>

      <section className="section visual-feature reverse">
        <div>
          <p className="eyebrow teal">{t("tech.sensorEyebrow")}</p>
          <h2>{t("tech.sensorTitle")}</h2>
          <p className="lead">{t("tech.sensorCopy")}</p>
        </div>
        <div className="feature-image-panel">
          <Image
            src="/assets/anh-minh-hoa-signal-direct-imager-2.webp"
            alt="Signal-Direct Imager wide sensor comparison"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section stats-band" aria-label="Technology highlights">
        {signalFeatures.map((item) => (
          <article className="stat-card" key={item.title}>
            <strong>{item.metric}</strong>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">{t("tech.ctaEyebrow")}</p>
          <h2>{t("tech.ctaTitle")}</h2>
        </div>
        <a className="primary-button" href="/signal-direct-imager">
          {t("tech.ctaButton")}
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
