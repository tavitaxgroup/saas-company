import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import InquiryForm from "./components/InquiryForm";
import SiteHeader from "./components/SiteHeader";

const navItems = [
  { label: "Signal-Direct", href: "#signal-direct" },
  { label: "Sensitivity", href: "#sensitivity" },
  { label: "Software", href: "#software" },
  { label: "Specifications", href: "#specifications" },
  { label: "Support", href: "#support" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" }
];

const signalFeatures = [
  {
    metric: "100x",
    title: "More sensitive",
    text:
      "Direct-to-sensor chemiluminescence capture collects weak Western blot signal with less light loss and less lens distortion."
  },
  {
    metric: "168 cm2",
    title: "Wider dynamic range",
    text:
      "A large CMOS sensor captures the entire blot at once, reducing signal loss, stitching artifacts, and repeat exposure work."
  },
  {
    metric: "6.0 OD",
    title: "Quantitative capacity",
    text:
      "Wide dynamic range supports low-abundance targets and highly abundant loading controls without detector saturation."
  },
  {
    metric: "5 sec",
    title: "Custom mode detection",
    text:
      "The system is positioned for fast ECL documentation, including exceptional dot blot detection in custom exposure workflows."
  }
];

const signalSpecs = [
  ["Product", "Signal-Direct Imager"],
  ["Application", "Chemiluminescence Western blot imaging"],
  ["Pixel size", "100 um x 100 um"],
  ["CMOS sensor chip size", "168 cm2"],
  ["Active imaging area", "13.7 cm x 11.7 cm"],
  ["Full well capacity", "3,150,000 electrons maximum"],
  ["Dynamic range", "6.0 OD"],
  ["Operation mode", "Auto and custom exposure"],
  ["Data format", "TIFF, JPEG, BMP, PNG"],
  ["Analysis software", "PC control with Max-One software"],
  ["Dimensions", "280 mm x 250 mm x 53 mm"],
  ["Weight", "Approximately 4 kg"],
  ["Light source", "Chemiluminescence, epi LEDs (R/G/B)"]
];

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
    text:
      "CHO basal medium for scalable cell culture development and upstream process optimization."
  },
  {
    name: "CHO MaxY",
    image: "cho-maxy.webp",
    text:
      "Chemically defined CHO medium positioned for production-oriented culture development."
  },
  {
    name: "CHO MaxZ",
    image: "cho-maxz.webp",
    text:
      "Basal medium for CHO-S, CHO-K1, and CHO-DG44 cells in batch and fed-batch applications."
  }
];

const feeds = [
  {
    name: "MaxFA5",
    image: "maxfa5.webp",
    text:
      "Feed supplement for CHO, HEK293, Hybridoma, and other cell line culture processes."
  },
  {
    name: "MaxFA",
    image: "maxfa.webp",
    text:
      "Bioproduction feed product supporting CHO culture productivity and fed-batch process development."
  },
  {
    name: "MaxFB",
    image: "maxfb.webp",
    text:
      "Feed formulation for mammalian cell culture workflows requiring repeatable nutrient support."
  },
  {
    name: "MaxFX",
    image: "maxfx.webp",
    text:
      "Feed option for upstream bioprocessing teams optimizing viable cell density and protein expression."
  }
];

export default function Home() {
  return (
    <main>
      <SiteHeader brandHref="#home" navItems={navItems} ctaHref="#contact" />

      <section id="home" className="hero">
        <HeroCarousel />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Signal-Direct Imager</p>
          <h1>Signal-Direct Imager for high-sensitivity Western blot detection.</h1>
          <p>
            A compact, lens-free chemiluminescence imaging platform designed to capture
            weak ECL signal, preserve quantitative range, and simplify daily protein
            research workflows.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/signal-direct-imager">
              Explore Signal-Direct
            </a>
            <a className="secondary-button" href="#specifications">
              View specifications
            </a>
          </div>
        </div>
      </section>

      <section className="section split-intro">
        <div>
          <p className="eyebrow teal">Flagship Product</p>
          <h2>A Western blot imager built around direct photon collection.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Leveraging Taiwan's semiconductor and optoelectronics ecosystem, SISBIO
            transfers production inspection technology into a cost-effective,
            high-resolution chemiluminescence system.
          </p>
          <p>
            Signal-Direct removes the traditional lens path and places the Western film
            directly against the photosensor chip, so labs can collect more photons from
            each blot with less distortion and less signal loss.
          </p>
        </div>
      </section>

      <section id="signal-direct" className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow teal">Signal-Direct Imager</p>
          <h2>See more, measure everything, and get results in seconds.</h2>
          <p>
            The Signal-Direct Imager is a compact chemiluminescence Western blot imager
            designed to remove common bottlenecks of traditional cooled CCD camera
            imaging.
          </p>
          <div className="mini-list">
            <span>Powerful simplicity for multi-user labs</span>
            <span>Lens-free direct attachment to the photosensor chip</span>
            <span>Color protein marker capture for image documentation</span>
          </div>
          <a className="text-link" href="/signal-direct-imager">
            Read detailed product workflow
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

      <section id="sensitivity" className="section visual-feature">
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
          <h2>100x more sensitive signal collection.</h2>
          <p className="lead">
            Western film is directly attached to the photosensor chip for imaging, so the
            system captures chemiluminescent signal without lens light loss. This improves
            sensitivity, speed, and quantitative signal quality while minimizing noise.
          </p>
        </div>
      </section>

      <section className="section visual-feature reverse">
        <div>
          <p className="eyebrow teal">Wide-area CMOS sensor</p>
          <h2>100x wider range for whole-blot capture.</h2>
          <p className="lead">
            The 168 cm2 sensor captures the full blot area at once. A larger pixel area
            collects more photons than standard CCD pixels, supporting stronger
            Signal-to-Noise Ratio for ECL and the linear range of next-generation probes.
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

      <section className="section stats-band" aria-label="Signal-Direct highlights">
        {signalFeatures.map((item) => (
          <article key={item.title} className="stat-card">
            <strong>{item.metric}</strong>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section id="specifications" className="section specs-layout">
        <div>
          <p className="eyebrow teal">Technical Specifications</p>
          <h2>Compact bench footprint, high-resolution data output.</h2>
          <p className="lead">
            The system combines auto exposure, custom exposure, RGB epi LED illumination,
            and Max-One software for image capture, analysis, and documentation.
          </p>
          <div className="spec-image">
            <Image
              src="/assets/may-quang-pho-thu-nho-4096pixel.jpg"
              alt="Compact laboratory analysis instrument"
              width={477}
              height={456}
            />
          </div>
        </div>
        <div className="spec-table" role="table" aria-label="Signal-Direct Imager specifications">
          {signalSpecs.map(([label, value]) => (
            <div className="spec-row" role="row" key={label}>
              <span role="cell">{label}</span>
              <strong role="cell">{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="software" className="software-section">
        <Image
          src="/assets/stock/scientist-pipette-workflow.jpg"
          alt="Scientist preparing samples in a molecular biology laboratory"
          fill
          className="software-bg"
          sizes="100vw"
        />
        <div className="software-panel">
          <p className="eyebrow">Max-One Software</p>
          <h2>One platform from image capture to final results.</h2>
          <p>
            Dynamic capture technology applies optimal settings, manages signal intensity
            to help prevent saturation, and processes images for contrast, clarity, and
            publication-ready quantitative data.
          </p>
          <a className="primary-button" href="#contact">
            Request product details
          </a>
          <a className="software-link" href="/signal-direct-imager#max-one">
            View Max-One workflow
          </a>
        </div>
      </section>

      <section id="bioproduction" className="bio-section compact-bio">
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
            Alongside Signal-Direct imaging, SISBIO offers CHO media and feed products for
            mammalian cell culture, batch and fed-batch workflows, and process development.
          </p>
        </div>
      </section>

      <section className="section catalog-section related-products">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow teal">CHO Media</p>
            <h2>Compact catalog of chemically defined basal media.</h2>
          </div>
          <p className="lead">
            A supporting product family for CHO-K1, CHO-S, CHO-DG44, CHOZN, and related
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

      <section id="support" className="section split-intro">
        <div>
          <p className="eyebrow teal">Support</p>
          <h2>Product consultation and documentation support.</h2>
        </div>
        <div className="intro-copy">
          <p>
            SISBIO can support product information requests, technical consultation,
            brochure review, quotation preparation, and distributor discussions.
          </p>
          <p>
            For detailed Signal-Direct workflow information, visit the product detail page
            or send an inquiry through the contact form below.
          </p>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow teal">FAQ</p>
          <h2>Common questions.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>What is Signal-Direct Imager used for?</summary>
            <p>
              It is designed for chemiluminescence Western blot imaging and quantitative
              protein research documentation.
            </p>
          </details>
          <details>
            <summary>Does the system support Max-One software?</summary>
            <p>
              Yes. Max-One supports image capture, dynamic capture workflows, analysis,
              and documentation.
            </p>
          </details>
          <details>
            <summary>How can customers request product information?</summary>
            <p>
              Customers can use the inquiry form to share their product interest,
              application, and request type.
            </p>
          </details>
        </div>
      </section>

      <section id="contact" className="section inquiry-section">
        <div className="inquiry-copy">
          <p className="eyebrow teal">Inquiry Form</p>
          <h2>Request product information or consultation.</h2>
          <p className="lead">
            Share your research workflow, product interest, or procurement request. SISBIO
            can later connect this form to a CRM, email service, or website backend.
          </p>
        </div>
        <InquiryForm />
      </section>

      <footer className="footer">
        <div>
          <Image src="/assets/logo-sisbio.webp" alt="SISBIO" width={100} height={70} />
          <p>
            High-sensitivity imaging solutions and bioproduction media & feed products for
            research use. Not for use in diagnostic procedures.
          </p>
        </div>
        <address>
          <strong>SisBio Limited</strong>
          <span>4 F., No. 12, Ln. 345, Yangguang St., Neihu Dist.</span>
          <span>Taipei City 114713, Taiwan (R.O.C.)</span>
          <span>Postal code 114713</span>
          <a href="mailto:jack.lou@sisbio.com.tw">jack.lou@sisbio.com.tw</a>
          <a href="mailto:sales@sisbio.com.tw">sales@sisbio.com.tw</a>
          <a href="mailto:service@sisbio.com.tw">service@sisbio.com.tw</a>
          <a href="https://www.sisbio.com.tw/">www.sisbio.com.tw</a>
          <a href="tel:+886939176425">886-939 176 425</a>
        </address>
      </footer>
    </main>
  );
}
