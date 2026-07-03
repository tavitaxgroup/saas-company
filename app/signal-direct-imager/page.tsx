"use client";

import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { splitRecord, useI18n } from "../i18n";
import navItems from "../navigation";

const detailedSpecs = [
  ["Pixel Size", "100 um x 100 um"],
  ["CMOS Sensor Chip Size", "168 cm2"],
  ["Active Imaging Area", "13.7 cm x 11.7 cm (5.4 in. x 4.6 in.)"],
  ["Full Well Capacity", "3,150,000 electrons maximum"],
  ["Dynamic Range", "6.0 OD"],
  ["Operation Mode", "Auto and custom exposure"],
  ["Data Format", "TIFF, JPEG, BMP, PNG"],
  ["PC Control", "USB 3.0 or newer/higher port required"],
  ["Dimensions", "280 mm x 250 mm x 53 mm"],
  ["Weight", "Approximately 4 kg (8.8 lb)"],
  ["Power", "100-240 V, 50-60 Hz"],
  ["Light Source", "Chemiluminescence, epi LEDs (R/G/B)"],
  ["Operation Temperature", "15 degrees C to 35 degrees C"],
  ["Operating Humidity", "35% to 55% relative humidity, noncondensing"]
];

export default function SignalDirectImagerPage() {
  const { list, t } = useI18n();
  const workflowPoints = list("signal.workflow").map(splitRecord);
  const maxOneFeatures = list("software.features");

  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="detail-hero">
        <Image
          src="/assets/stock/lab-instrument-bench.jpg"
          alt="Laboratory instrument bench for Signal-Direct Imager"
          fill
          className="detail-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="eyebrow">{t("signal.heroEyebrow")}</p>
          <h1>{t("signal.heroTitle")}</h1>
          <p>{t("signal.heroCopy")}</p>
          <Link className="secondary-button" href="/">
            {t("signal.back")}
          </Link>
        </div>
      </section>

      <section className="section split-intro">
        <div>
          <p className="eyebrow teal">{t("signal.whyEyebrow")}</p>
          <h2>{t("signal.whyTitle")}</h2>
        </div>
        <div className="intro-copy">
          <p>{t("signal.whyCopy1")}</p>
          <p>{t("signal.whyCopy2")}</p>
        </div>
      </section>

      <section className="section workflow-strip" aria-label="Signal-Direct workflow">
        {workflowPoints.map((point) => (
          <article key={point.label} className="workflow-item">
            <span>{point.label}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section id="multi-user" className="detail-band">
        <div className="detail-band-media">
          <Image
            src="/assets/signal-direct-multi-user-lab.png"
            alt="Signal-Direct Imager compact footprint on a shared laboratory bench"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="detail-band-copy">
          <p className="eyebrow teal">{t("signal.multiEyebrow")}</p>
          <h2>{t("signal.multiTitle")}</h2>
          <p>{t("signal.multiCopy")}</p>
        </div>
      </section>

      <section id="max-one" className="detail-band reverse">
        <div className="detail-band-copy">
          <p className="eyebrow teal">{t("signal.docEyebrow")}</p>
          <h2>{t("signal.docTitle")}</h2>
          <p>{t("signal.docCopy")}</p>
          <div className="feature-list">
            {maxOneFeatures.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <Link className="text-link" href="/software">
            {t("signal.softwareLink")}
          </Link>
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

      <section className="section split-intro">
        <div>
          <p className="eyebrow teal">{t("signal.fastEyebrow")}</p>
          <h2>{t("signal.fastTitle")}</h2>
        </div>
        <div className="intro-copy">
          <p>{t("signal.fastCopy1")}</p>
          <p>{t("signal.fastCopy2")}</p>
        </div>
      </section>

      <section id="specs" className="section specs-layout">
        <div>
          <p className="eyebrow teal">{t("signal.specEyebrow")}</p>
          <h2>{t("signal.specTitle")}</h2>
          <p className="lead">{t("signal.specLead")}</p>
        </div>
        <div className="spec-table" role="table" aria-label="Detailed Signal-Direct specifications">
          {detailedSpecs.map(([label, value]) => (
            <div className="spec-row" role="row" key={label}>
              <span role="cell">{label}</span>
              <strong role="cell">{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter note={t("footer.signalNote")} />
    </main>
  );
}
