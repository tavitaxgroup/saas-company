"use client";

import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useI18n } from "../i18n";
import navItems from "../navigation";

const choImages = ["cho-maxa.webp", "cho-maxa5-plus.webp", "cho-maxc.webp", "cho-maxd.webp", "cho-maxx.webp", "cho-maxy.webp", "cho-maxz.webp"];
const feedImages = ["maxfa5.webp", "maxfa.webp", "maxfb.webp", "maxfx.webp"];

export default function BioproductionPage() {
  const { list, t } = useI18n();
  const choMedia = list("bio.choProducts").map((item, index) => {
    const [name, text] = item.split("|");
    return { name, text, image: choImages[index] };
  });
  const feeds = list("bio.feedProducts").map((item, index) => {
    const [name, text] = item.split("|");
    return { name, text, image: feedImages[index] };
  });

  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="detail-hero">
        <Image
          src="/assets/banner3.webp"
          alt="Bioproduction media and feed laboratory background"
          fill
          className="detail-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="eyebrow">{t("bio.heroEyebrow")}</p>
          <h1>{t("bio.heroTitle")}</h1>
          <p>{t("bio.heroCopy")}</p>
        </div>
      </section>

      <section className="section catalog-section related-products">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow teal">{t("bio.choEyebrow")}</p>
            <h2>{t("bio.choTitle")}</h2>
          </div>
          <p className="lead">{t("bio.choLead")}</p>
        </div>
        <div className="product-grid cho-grid">
          {choMedia.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <Image
                  src={`/assets/${product.image}`}
                  alt={product.name}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div>
                <p>{t("bio.choTag")}</p>
                <h3>{product.name}</h3>
                <span>{product.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section catalog-section related-products feed-section">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow teal">{t("bio.feedEyebrow")}</p>
            <h2>{t("bio.feedTitle")}</h2>
          </div>
          <p className="lead">{t("bio.feedLead")}</p>
        </div>
        <div className="product-grid feed-grid">
          {feeds.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <Image
                  src={`/assets/${product.image}`}
                  alt={product.name}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div>
                <p>{t("bio.feedTag")}</p>
                <h3>{product.name}</h3>
                <span>{product.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">{t("bio.ctaEyebrow")}</p>
          <h2>{t("bio.ctaTitle")}</h2>
        </div>
        <a className="primary-button" href="/contact">
          {t("bio.ctaButton")}
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
