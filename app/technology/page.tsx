import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import navItems from "../navigation";

const signalFeatures = [
  {
    metric: "100x",
    title: "More sensitive collection",
    text:
      "Direct-to-sensor chemiluminescence capture collects weak Western blot signal with less light loss and less lens distortion."
  },
  {
    metric: "168 cm2",
    title: "Whole-blot capture",
    text:
      "A large CMOS sensor captures the entire blot area at once, reducing repeat exposure work and stitching artifacts."
  },
  {
    metric: "6.0 OD",
    title: "Quantitative capacity",
    text:
      "Wide dynamic range supports low-abundance targets and highly abundant loading controls without detector saturation."
  },
  {
    metric: "5 sec",
    title: "Custom detection",
    text:
      "Custom exposure workflows are positioned for fast ECL documentation and exceptional dot blot detection."
  }
];

export default function TechnologyPage() {
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
          <p className="eyebrow">Imaging Technology</p>
          <h1>Direct photon collection for stronger Western blot signal.</h1>
          <p>
            Signal-Direct places the Western film directly against the photosensor chip,
            removing the traditional lens path that can reduce sensitivity and introduce
            distortion.
          </p>
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
          <p className="eyebrow teal">Direct-to-sensor imaging</p>
          <h2>Less light loss between the blot and detector.</h2>
          <p className="lead">
            By removing the lens path, the system can collect chemiluminescent signal
            closer to the source. That improves signal quality, reduces optical
            distortion, and supports faster documentation workflows.
          </p>
        </div>
      </section>

      <section className="section visual-feature reverse">
        <div>
          <p className="eyebrow teal">Wide-area CMOS sensor</p>
          <h2>Large pixel area supports low-signal detection.</h2>
          <p className="lead">
            A 168 cm2 CMOS sensor and 100 um x 100 um pixel size collect more photons
            than standard small-pixel CCD systems, supporting stronger Signal-to-Noise
            Ratio for ECL imaging.
          </p>
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
          <p className="eyebrow teal">Next Step</p>
          <h2>Review the full product workflow and bench footprint.</h2>
        </div>
        <a className="primary-button" href="/signal-direct-imager">
          Explore product page
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
