import Image from "next/image";
import Link from "next/link";
import InquiryForm from "../components/InquiryForm";
import SiteFooter, { contactLinks } from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import navItems from "../navigation";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader navItems={navItems} ctaHref="/contact" />

      <section className="contact-hero">
        <Image
          src="/assets/stock/pexels-lab-instruments-hero.jpg"
          alt="Laboratory instruments prepared for a SISBIO product inquiry"
          fill
          className="contact-hero-bg"
          priority
          sizes="100vw"
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <p className="eyebrow">Contact SISBIO</p>
          <h1>Send product inquiries and distributor requests.</h1>
          <p>
            Share your contact and company information so SISBIO can prepare product
            documentation, consultation, quotation, or partnership follow-up.
          </p>
        </div>
      </section>

      <section className="section contact-page-layout">
        <aside className="contact-info-panel">
          <p className="eyebrow teal">Contact Information</p>
          <h2>SisBio Limited</h2>
          <div className="contact-address">
            <span>4 F., No. 12, Ln. 345, Yangguang St., Neihu Dist.</span>
            <span>Taipei City 114713, Taiwan (R.O.C.)</span>
            <span>Postal code 114713</span>
          </div>
          <div className="contact-link-list">
            {contactLinks.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <Link className="text-link" href="/">
            Back to SISBIO overview
          </Link>
        </aside>

        <div className="contact-form-panel">
          <InquiryForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
