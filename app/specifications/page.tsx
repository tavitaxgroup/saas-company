"use client";

import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useI18n } from "../i18n";
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

export default function SpecificationsPage() {
  const { t } = useI18n();

  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="detail-hero">
        <Image
          src="/assets/may-quang-pho-thu-nho-4096pixel.jpg"
          alt="Compact laboratory analysis instrument used for technical specification reference"
          fill
          className="detail-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="eyebrow">{t("spec.heroEyebrow")}</p>
          <h1>{t("spec.heroTitle")}</h1>
          <p>{t("spec.heroCopy")}</p>
        </div>
      </section>

      <section className="section specs-layout">
        <div>
          <p className="eyebrow teal">{t("spec.tableEyebrow")}</p>
          <h2>{t("spec.tableTitle")}</h2>
          <p className="lead">{t("spec.tableLead")}</p>
          <div className="spec-image">
            <Image
              src="/assets/signal-direct-imager.webp"
              alt="Signal-Direct Imager product"
              width={400}
              height={400}
            />
          </div>
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

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">{t("spec.ctaEyebrow")}</p>
          <h2>{t("spec.ctaTitle")}</h2>
        </div>
        <a className="primary-button" href="/contact">
          {t("common.contactSisbio")}
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
