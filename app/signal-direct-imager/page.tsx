import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import navItems from "../navigation";

const workflowPoints = [
  {
    label: "Capture",
    title: "Direct-to-sensor chemiluminescence imaging",
    text:
      "Western film is placed directly against the photosensor chip, removing the lens path that can introduce light loss and image distortion."
  },
  {
    label: "Quantify",
    title: "Publication-ready quantitative data",
    text:
      "The system supports simultaneous detection of low-abundance targets and highly abundant controls without detector saturation."
  },
  {
    label: "Document",
    title: "Color protein marker capture",
    text:
      "Dedicated color protein marker capture helps produce precise, clean, and visually consistent image documentation."
  }
];

const maxOneFeatures = [
  "Dynamic capture technology automatically applies optimal settings.",
  "Signal intensity management helps prevent saturation as much as possible.",
  "Automatic processing brings out maximum contrast and dynamic range.",
  "Instant data analysis supports deeper review in Max-One software."
];

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
          <p className="eyebrow">Signal-Direct Imager</p>
          <h1>The revolution in simplicity and power.</h1>
          <p>
            From image capture to final results, Signal-Direct and Max-One software offer
            a focused imaging experience for high-sensitivity Western blot documentation.
          </p>
          <Link className="secondary-button" href="/">
            Back to landing page
          </Link>
        </div>
      </section>

      <section className="section split-intro">
        <div>
          <p className="eyebrow teal">Why Signal-Direct</p>
          <h2>See more, measure everything, and preserve quantitative range.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Sensitivity is determined by the ability to collect photons from the blot and
            convert them into a strong, quantifiable signal while minimizing noise.
          </p>
          <p>
            Signal-Direct uses a large CMOS sensor and 100 um x 100 um pixel area to
            collect substantially more photons than standard small-pixel CCD systems.
          </p>
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
          <p className="eyebrow teal">Designed for Multi-User Labs</p>
          <h2>Where every inch matters.</h2>
          <p>
            The Signal-Direct Imager is engineered for efficiency, with a footprint so
            compact it is comparable to a standard laptop. Labs can keep high-resolution
            imaging capability without dedicating a large room or extensive bench space.
          </p>
        </div>
      </section>

      <section id="max-one" className="detail-band reverse">
        <div className="detail-band-copy">
          <p className="eyebrow teal">Streamline Your Documentation</p>
          <h2>One platform for all your results.</h2>
          <p>
            Max-One software supports a seamless imaging experience, from dynamic capture
            to instant analysis and deeper review of quantitative results.
          </p>
          <div className="feature-list">
            {maxOneFeatures.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <Link className="text-link" href="/software">
            View full software workflow
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
          <p className="eyebrow teal">A Faster Workflow</p>
          <h2>A more beautiful image.</h2>
        </div>
        <div className="intro-copy">
          <p>
            The system provides dedicated color protein marker capture for precise image
            documentation, helping teams produce clearer records with less repeat capture.
          </p>
          <p>
            Automatic processing helps bring out maximum contrast and dynamic range,
            making documentation faster while preserving data-rich image output.
          </p>
        </div>
      </section>

      <section id="specs" className="section specs-layout">
        <div>
          <p className="eyebrow teal">Technical Specifications</p>
          <h2>Detailed system reference.</h2>
          <p className="lead">
            Specifications below are organized from the Signal Direct Imager brochure for
            evaluation and product inquiry.
          </p>
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

      <SiteFooter note="Signal-Direct Imager is for research use only. Not for use in diagnostic procedures." />
    </main>
  );
}
