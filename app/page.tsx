import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import navItems from "./navigation";

const pageCards = [
  {
    label: "Product",
    title: "Signal-Direct Imager",
    text: "A compact chemiluminescence Western blot imager for high-sensitivity protein research workflows.",
    href: "/signal-direct-imager"
  },
  {
    label: "Technology",
    title: "Direct-to-sensor imaging",
    text: "Understand how direct photon collection, large CMOS area, and wide dynamic range support stronger signal capture.",
    href: "/technology"
  },
  {
    label: "Software",
    title: "Max-One workflow",
    text: "Move from image capture to contrast processing, quantitative review, and documentation in one platform.",
    href: "/software"
  },
  {
    label: "Reference",
    title: "Technical specifications",
    text: "Review sensor size, active imaging area, formats, dimensions, operating range, and PC requirements.",
    href: "/specifications"
  }
];

const signalFeatures = [
  {
    metric: "100x",
    title: "More sensitive",
    text: "Lens-free capture reduces light loss for weak Western blot signal."
  },
  {
    metric: "168 cm2",
    title: "Large CMOS sensor",
    text: "Wide sensor area captures the full blot with fewer repeat exposure steps."
  },
  {
    metric: "6.0 OD",
    title: "Dynamic range",
    text: "Quantitative capacity supports low-abundance targets and abundant controls."
  },
  {
    metric: "4 kg",
    title: "Compact system",
    text: "A small bench footprint fits shared and multi-user laboratory environments."
  }
];

export default function Home() {
  return (
    <main>
      <SiteHeader brandHref="/" navItems={navItems} ctaHref="/contact" />

      <section id="home" className="hero">
        <HeroCarousel />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">SISBIO Signal-Direct</p>
          <h1>High-sensitivity Western blot imaging for focused protein research.</h1>
          <p>
            Explore Signal-Direct Imager, the direct-to-sensor imaging workflow, Max-One
            software, detailed specifications, and SISBIO product support.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/signal-direct-imager">
              Explore Signal-Direct
            </a>
            <a className="secondary-button" href="/contact">
              Contact SISBIO
            </a>
          </div>
        </div>
      </section>

      <section className="section split-intro">
        <div>
          <p className="eyebrow teal">Overview</p>
          <h2>One clear path from product interest to technical evaluation.</h2>
        </div>
        <div className="intro-copy">
          <p>
            SISBIO presents Signal-Direct as the flagship product, then separates the
            supporting technology, software, specifications, and inquiry workflow into
            dedicated pages so visitors can move directly to the information they need.
          </p>
          <p>
            Bioproduction media and feed remain available as a related product line for
            upstream process development teams.
          </p>
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
          <p className="eyebrow teal">Flagship Product</p>
          <h2>Signal-Direct Imager removes the lens path from chemiluminescence capture.</h2>
          <p>
            Western film is placed directly against the photosensor chip, helping the
            system collect more photons with less lens distortion and less light loss.
          </p>
          <div className="mini-list">
            <span>Direct attachment to the photosensor chip</span>
            <span>Color protein marker capture for documentation</span>
            <span>Compact footprint for shared laboratory spaces</span>
          </div>
          <a className="text-link" href="/technology">
            View imaging technology
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
          <p className="eyebrow">Related Product Line</p>
          <h2>Bioproduction media & feed for upstream process development.</h2>
          <p>
            Browse CHO media and feed products for mammalian cell culture, batch and
            fed-batch workflows, and process development.
          </p>
          <a className="secondary-button" href="/bioproduction">
            View bioproduction line
          </a>
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">Product Inquiry</p>
          <h2>Need documentation, quotation, or distributor discussion?</h2>
        </div>
        <a className="primary-button" href="/contact">
          Contact SISBIO
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
