import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import navItems from "../navigation";

const choMedia = [
  {
    name: "CHO MaxA",
    image: "cho-maxa.webp",
    text:
      "Chemically defined basal medium for CHO-K1, CHO-S, and CHO-DG44 cells in batch and fed-batch culture processes."
  },
  {
    name: "CHO MaxA5 Plus",
    image: "cho-maxa5-plus.webp",
    text:
      "ADCF CHO medium designed for CHO-S, CHO-K1, CHO-DG44, and CHOZN cell culture workflows."
  },
  {
    name: "CHO MaxC",
    image: "cho-maxc.webp",
    text:
      "Basal medium option for CHO-K1, CHO-S, and CHOZN cells in chemically defined bioproduction processes."
  },
  {
    name: "CHO MaxD",
    image: "cho-maxd.webp",
    text:
      "CHO media platform for batch and fed-batch culture where consistency and animal component control matter."
  },
  {
    name: "CHO MaxX",
    image: "cho-maxx.webp",
    text: "CHO basal medium for scalable cell culture development and upstream process optimization."
  },
  {
    name: "CHO MaxY",
    image: "cho-maxy.webp",
    text: "Chemically defined CHO medium positioned for production-oriented culture development."
  },
  {
    name: "CHO MaxZ",
    image: "cho-maxz.webp",
    text: "Basal medium for CHO-S, CHO-K1, and CHO-DG44 cells in batch and fed-batch applications."
  }
];

const feeds = [
  {
    name: "MaxFA5",
    image: "maxfa5.webp",
    text: "Feed supplement for CHO, HEK293, Hybridoma, and other cell line culture processes."
  },
  {
    name: "MaxFA",
    image: "maxfa.webp",
    text: "Bioproduction feed product supporting CHO culture productivity and fed-batch process development."
  },
  {
    name: "MaxFB",
    image: "maxfb.webp",
    text: "Feed formulation for mammalian cell culture workflows requiring repeatable nutrient support."
  },
  {
    name: "MaxFX",
    image: "maxfx.webp",
    text: "Feed option for upstream bioprocessing teams optimizing viable cell density and protein expression."
  }
];

export default function BioproductionPage() {
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
          <p className="eyebrow">Bioproduction</p>
          <h1>CHO media and feed for upstream process development.</h1>
          <p>
            SISBIO offers supporting media and feed products for mammalian cell culture,
            batch and fed-batch workflows, and production-oriented process development.
          </p>
        </div>
      </section>

      <section className="section catalog-section related-products">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow teal">CHO Media</p>
            <h2>Chemically defined basal media for CHO workflows.</h2>
          </div>
          <p className="lead">
            Supporting product family for CHO-K1, CHO-S, CHO-DG44, CHOZN, and related
            mammalian cell culture workflows.
          </p>
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
                <p>CHO media | CDM | ADCF</p>
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
            <p className="eyebrow teal">Feed</p>
            <h2>Feed supplements for fed-batch culture.</h2>
          </div>
          <p className="lead">
            Feed products support bioproduction teams optimizing productivity, viable cell
            density, and process consistency across CHO, HEK293, Hybridoma, and other cell
            line applications.
          </p>
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
                <p>Bioproduction feed</p>
                <h3>{product.name}</h3>
                <span>{product.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">Product Line Inquiry</p>
          <h2>Discuss media, feed, or distributor opportunities with SISBIO.</h2>
        </div>
        <a className="primary-button" href="/contact">
          Send inquiry
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
