"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "../i18n";

const inquiryRecipient = "sales@sisbio.com.tw";

const verificationCodes = ["NX78L", "S9K4D", "B7M2Q", "L5T8P"];

const businessTypes = [
  "Distributor",
  "Wholesaler",
  "Retailer",
  "Manufacturer",
  "Trading Company",
  "Catalogue sales company"
];

export default function InquiryForm() {
  const [status, setStatus] = useState("");
  const [verificationCodeImage, setVerificationCodeImage] = useState(verificationCodes[0]);
  const { t } = useI18n();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const email = String(formData.get("email") || "");
    const department = String(formData.get("department") || "");
    const jobTitle = String(formData.get("jobTitle") || "");
    const ePaper = formData.get("ePaper") ? "Yes" : "No";
    const company = String(formData.get("company") || "");
    const url = String(formData.get("url") || "");
    const address = String(formData.get("address") || "");
    const postalCode = String(formData.get("postalCode") || "");
    const state = String(formData.get("state") || "");
    const country = String(formData.get("country") || "");
    const telephone = String(formData.get("telephone") || "");
    const fax = String(formData.get("fax") || "");
    const productLine = String(formData.get("productLine") || "");
    const subject = String(formData.get("subject") || "");
    const verificationCode = String(formData.get("verificationCode") || "");
    const selectedBusinessTypes = formData.getAll("businessType").join(", ");

    if (verificationCode.trim().toUpperCase() !== verificationCodeImage) {
      setStatus(t("form.invalidCode"));
      return;
    }

    const emailSubject = encodeURIComponent(`SISBIO contact inquiry - ${subject || "Product information"}`);
    const body = encodeURIComponent(
      [
        "Inquiry from SISBIO website",
        "",
        "Information of Contact Person",
        `Name: ${firstName}`,
        `Last name: ${lastName}`,
        `Email: ${email}`,
        `Department: ${department}`,
        `Job title: ${jobTitle}`,
        `ePaper: ${ePaper}`,
        "",
        "Company Information",
        `Company: ${company}`,
        `URL: ${url}`,
        `Address: ${address}`,
        `Postal code: ${postalCode}`,
        `State: ${state}`,
        `Country: ${country}`,
        `Telephone: ${telephone}`,
        `Fax: ${fax}`,
        `Main product line: ${productLine}`,
        "",
        "Others",
        `Subject: ${subject}`,
        `Business type: ${selectedBusinessTypes}`,
        `Verification code: ${verificationCode}`,
        "",
        "Privacy consent acknowledged on submission."
      ].join("\n")
    );

    setStatus(t("form.openingEmail"));
    window.location.href = `mailto:${inquiryRecipient}?subject=${emailSubject}&body=${body}`;
  };

  const changeVerificationCode = () => {
    setVerificationCodeImage((current) => {
      const currentIndex = verificationCodes.indexOf(current);
      return verificationCodes[(currentIndex + 1) % verificationCodes.length];
    });
  };

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <fieldset className="form-section">
        <legend>{t("form.contactLegend")}</legend>
        <label className="compact-field">
          <span>
            {t("form.name")} <strong>*</strong>
          </span>
          <input name="firstName" type="text" autoComplete="given-name" required />
        </label>
        <label className="compact-field">
          <span>
            {t("form.lastName")} <strong>*</strong>
          </span>
          <input name="lastName" type="text" autoComplete="family-name" required />
        </label>
        <label className="compact-field">
          <span>
            {t("form.email")} <strong>*</strong>
          </span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="compact-field">
          <span>{t("form.department")}</span>
          <input name="department" type="text" autoComplete="organization-title" />
        </label>
        <label className="compact-field">
          <span>{t("form.jobTitle")}</span>
          <input name="jobTitle" type="text" />
        </label>
        <label className="compact-field checkbox-field">
          <span>{t("form.ePaper")}</span>
          <span className="inline-check">
            <input name="ePaper" type="checkbox" />
            {t("form.ePaperText")}
          </span>
        </label>
      </fieldset>

      <fieldset className="form-section">
        <legend>{t("form.companyLegend")}</legend>
        <label className="compact-field">
          <span>
            {t("form.company")} <strong>*</strong>
          </span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label className="compact-field with-note">
          <span>
            {t("form.url")} <strong>*</strong>
          </span>
          <input name="url" type="url" required />
          <small>{t("form.urlNote")}</small>
        </label>
        <label className="compact-field">
          <span>{t("form.address")}</span>
          <input name="address" type="text" autoComplete="street-address" />
        </label>
        <label className="compact-field">
          <span>{t("form.postal")}</span>
          <input name="postalCode" type="text" autoComplete="postal-code" />
        </label>
        <label className="compact-field">
          <span>{t("form.state")}</span>
          <input name="state" type="text" autoComplete="address-level1" />
        </label>
        <label className="compact-field">
          <span>{t("form.country")}</span>
          <select name="country" defaultValue="Vietnam" autoComplete="country-name">
            <option>Vietnam</option>
            <option>Taiwan</option>
            <option>Thailand</option>
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Indonesia</option>
            <option>Philippines</option>
            <option>United States</option>
            <option>Other</option>
          </select>
        </label>
        <label className="compact-field with-note">
          <span>
            {t("form.telephone")} <strong>*</strong>
          </span>
          <input name="telephone" type="tel" autoComplete="tel" required />
          <small>{t("form.phoneNote")}</small>
        </label>
        <label className="compact-field with-note">
          <span>{t("form.fax")}</span>
          <input name="fax" type="tel" />
          <small>{t("form.phoneNote")}</small>
        </label>
        <label className="compact-field">
          <span>{t("form.productLine")}</span>
          <input name="productLine" type="text" />
        </label>
      </fieldset>

      <fieldset className="form-section">
        <legend>{t("form.othersLegend")}</legend>
        <label className="compact-field">
          <span>{t("form.subjects")}</span>
          <select name="subject" defaultValue="">
            <option value="" disabled>
              {t("form.select")}
            </option>
            <option>Signal-Direct Imager</option>
            <option>Max-One Software</option>
            <option>CHO Media</option>
            <option>Bioproduction Feed</option>
            <option>Distributor inquiry</option>
            <option>Technical consultation</option>
          </select>
        </label>
        <div className="compact-field business-field">
          <span>{t("form.businessType")}</span>
          <div className="check-grid">
            {businessTypes.map((type) => (
              <label key={type} className="inline-check">
                <input name="businessType" type="checkbox" value={type} />
                {type}
              </label>
            ))}
          </div>
        </div>
        <label className="compact-field verification-field">
          <span>
            {t("form.verification")} <strong>*</strong>
          </span>
          <input name="verificationCode" type="text" required />
          <em aria-label={`Verification code image ${verificationCodeImage}`}>
            {verificationCodeImage}
          </em>
          <button type="button" onClick={changeVerificationCode}>
            {t("form.changeImage")}
          </button>
        </label>
      </fieldset>

      <p className="privacy-note">
        {t("form.privacy")}
      </p>
      <div className="form-submit-row">
        <button className="primary-button compact-submit" type="submit">
          {t("form.submit")}
        </button>
      </div>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
