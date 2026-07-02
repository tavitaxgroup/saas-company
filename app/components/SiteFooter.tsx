import Image from "next/image";

const contactLinks = [
  { label: "sales@sisbio.com.tw", href: "mailto:sales@sisbio.com.tw" },
  { label: "service@sisbio.com.tw", href: "mailto:service@sisbio.com.tw" },
  { label: "www.sisbio.com.tw", href: "https://www.sisbio.com.tw/" }
];

type SiteFooterProps = {
  note?: string;
};

export default function SiteFooter({
  note = "High-sensitivity imaging solutions and bioproduction media & feed products for research use. Not for use in diagnostic procedures."
}: SiteFooterProps) {
  return (
    <footer className="footer">
      <div>
        <Image src="/assets/logo-sisbio.webp" alt="SISBIO" width={100} height={70} />
        <p>{note}</p>
      </div>
      <address>
        <strong>SisBio Limited</strong>
        <span>4 F., No. 12, Ln. 345, Yangguang St., Neihu Dist.</span>
        <span>Taipei City 114713, Taiwan (R.O.C.)</span>
        <span>Postal code 114713</span>
        {contactLinks.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </address>
    </footer>
  );
}

export { contactLinks };
