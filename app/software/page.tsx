import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import navItems from "../navigation";

const maxOneFeatures = [
  "Dynamic capture technology automatically applies optimal settings.",
  "Signal intensity management helps prevent saturation as much as possible.",
  "Automatic processing brings out maximum contrast and dynamic range.",
  "Instant data analysis supports deeper review in Max-One software."
];

const workflowPoints = [
  {
    label: "Capture",
    title: "Acquire images with guided exposure",
    text:
      "Auto and custom exposure workflows help labs document chemiluminescence signals consistently."
  },
  {
    label: "Process",
    title: "Bring out contrast and clarity",
    text:
      "Processing tools support clearer images while preserving the quantitative signal needed for review."
  },
  {
    label: "Analyze",
    title: "Move toward final documentation",
    text:
      "Max-One supports deeper quantitative review and image export for publication and lab records."
  }
];

export default function SoftwarePage() {
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
          <p className="eyebrow">Max-One Software</p>
          <h1>One platform from image capture to final results.</h1>
          <p>
            Max-One supports dynamic capture, image processing, quantitative review, and
            documentation for Signal-Direct imaging workflows.
          </p>
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
          <p className="eyebrow teal">Streamline Documentation</p>
          <h2>Capture, process, analyze, and document in one focused workflow.</h2>
          <p>
            The software workflow is designed to reduce repeat capture work and help
            multi-user labs generate consistent quantitative records.
          </p>
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
          <p className="eyebrow teal">Software Inquiry</p>
          <h2>Need Max-One software details or product documentation?</h2>
        </div>
        <a className="primary-button" href="/contact">
          Request details
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
