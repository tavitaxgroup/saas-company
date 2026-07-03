"use client";

import Image from "next/image";
import { useI18n } from "../i18n";

const contactLinks = [
  { label: "sales@sisbio.com.tw", href: "mailto:sales@sisbio.com.tw" },
  { label: "service@sisbio.com.tw", href: "mailto:service@sisbio.com.tw" },
  { label: "www.sisbio.com.tw", href: "https://www.sisbio.com.tw/" }
];

type SiteFooterProps = {
  note?: string;
};

export default function SiteFooter({
  note
}: SiteFooterProps) {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div>
        <Image src="/assets/logo-sisbio.webp" alt="SISBIO" width={100} height={70} />
        <p>{note ?? t("footer.note")}</p>
      </div>
      <address>
        <strong>{t("footer.company")}</strong>
        <span>{t("footer.address1")}</span>
        <span>{t("footer.address2")}</span>
        <span>{t("footer.postal")}</span>
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
