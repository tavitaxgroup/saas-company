"use client";

import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { splitRecord, useI18n } from "../i18n";
import navItems from "../navigation";

export default function SoftwarePage() {
  const { list, t } = useI18n();
  const maxOneFeatures = list("software.features");
  const workflowPoints = list("software.workflow").map(splitRecord);

  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="detail-hero">
        <Image
          src="/assets/stock/scientist-pipette-workflow.jpg"
          alt="Scientist preparing samples for imaging software workflow"
          fill
          className="detail-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="eyebrow">{t("software.heroEyebrow")}</p>
          <h1>{t("software.heroTitle")}</h1>
          <p>{t("software.heroCopy")}</p>
        </div>
      </section>

      <section className="section workflow-strip" aria-label="Max-One workflow">
        {workflowPoints.map((point) => (
          <article className="workflow-item" key={point.label}>
            <span>{point.label}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section className="detail-band reverse">
        <div className="detail-band-copy">
          <p className="eyebrow teal">{t("software.docEyebrow")}</p>
          <h2>{t("software.docTitle")}</h2>
          <p>{t("software.docCopy")}</p>
          <div className="feature-list">
            {maxOneFeatures.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
        <div className="detail-band-media">
          <Image
            src="/assets/max-one-software-interface.png"
            alt="Max-One software interface for Signal-Direct image capture and documentation"
            fill
            className="contain-media"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">{t("software.ctaEyebrow")}</p>
          <h2>{t("software.ctaTitle")}</h2>
        </div>
        <a className="primary-button" href="/contact">
          {t("software.ctaButton")}
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
