import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import navItems from "../navigation";

const supportItems = [
  {
    title: "Product information",
    text: "Request Signal-Direct product details, application notes, and workflow discussion."
  },
  {
    title: "Quotation preparation",
    text: "Share your procurement request so SISBIO can prepare quotation follow-up."
  },
  {
    title: "Technical consultation",
    text: "Discuss imaging workflow, sample type, software needs, and documentation expectations."
  },
  {
    title: "Distributor discussion",
    text: "Send company information for regional product or partnership conversation."
  }
];

export default function SupportPage() {
  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="detail-hero">
        <Image
          src="/assets/stock/arise-lab-hero.jpg"
          alt="Modern biotechnology laboratory for SISBIO support inquiries"
          fill
          className="detail-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <p className="eyebrow">Support</p>
          <h1>Product consultation and documentation support.</h1>
          <p>
            Use this page to understand how SISBIO can support product information,
            technical consultation, quotation preparation, and distributor discussions.
          </p>
        </div>
      </section>

      <section className="section page-card-grid support-card-grid">
        {supportItems.map((item) => (
          <article className="page-card" key={item.title}>
            <span>Support</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section faq-section">
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
            <summary>Can SISBIO support bioproduction product inquiries?</summary>
            <p>
              Yes. SISBIO can receive inquiries for CHO media, feed products, and related
              distributor or product information requests.
            </p>
          </details>
          <details>
            <summary>How can customers request product information?</summary>
            <p>
              Customers can use the contact form to share contact information, company
              details, product interest, and request type.
            </p>
          </details>
        </div>
      </section>

      <section className="section cta-band">
        <div>
          <p className="eyebrow teal">Contact SISBIO</p>
          <h2>Ready to send your product or distributor inquiry?</h2>
        </div>
        <a className="primary-button" href="/contact">
          Open contact form
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
