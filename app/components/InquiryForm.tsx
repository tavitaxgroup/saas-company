"use client";

import { FormEvent, useState } from "react";

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
      setStatus("Please enter the verification code shown in the image.");
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

    setStatus("Opening email client for submission.");
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
        <legend>Information of Contact Person</legend>
        <label className="compact-field">
          <span>
            Name <strong>*</strong>
          </span>
          <input name="firstName" type="text" autoComplete="given-name" required />
        </label>
        <label className="compact-field">
          <span>
            Last name <strong>*</strong>
          </span>
          <input name="lastName" type="text" autoComplete="family-name" required />
        </label>
        <label className="compact-field">
          <span>
            E-Mail <strong>*</strong>
          </span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="compact-field">
          <span>Department</span>
          <input name="department" type="text" autoComplete="organization-title" />
        </label>
        <label className="compact-field">
          <span>Job Title</span>
          <input name="jobTitle" type="text" />
        </label>
        <label className="compact-field checkbox-field">
          <span>ePaper</span>
          <span className="inline-check">
            <input name="ePaper" type="checkbox" />
            Please mail me detail information of products, services and news of events.
          </span>
        </label>
      </fieldset>

      <fieldset className="form-section">
        <legend>Company Information</legend>
        <label className="compact-field">
          <span>
            Company <strong>*</strong>
          </span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label className="compact-field with-note">
          <span>
            URL <strong>*</strong>
          </span>
          <input name="url" type="url" required />
          <small>( Including http:// )</small>
        </label>
        <label className="compact-field">
          <span>Address</span>
          <input name="address" type="text" autoComplete="street-address" />
        </label>
        <label className="compact-field">
          <span>Postal Code</span>
          <input name="postalCode" type="text" autoComplete="postal-code" />
        </label>
        <label className="compact-field">
          <span>State</span>
          <input name="state" type="text" autoComplete="address-level1" />
        </label>
        <label className="compact-field">
          <span>Country</span>
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
            Telephone <strong>*</strong>
          </span>
          <input name="telephone" type="tel" autoComplete="tel" required />
          <small>(Please enter full telephone number, including Country code, Area code.)</small>
        </label>
        <label className="compact-field with-note">
          <span>Fax</span>
          <input name="fax" type="tel" />
          <small>(Please enter full telephone number, including Country code, Area code.)</small>
        </label>
        <label className="compact-field">
          <span>Main Product Line</span>
          <input name="productLine" type="text" />
        </label>
      </fieldset>

      <fieldset className="form-section">
        <legend>Others</legend>
        <label className="compact-field">
          <span>Subjects</span>
          <select name="subject" defaultValue="">
            <option value="" disabled>
              --Please select--
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
          <span>Business Type</span>
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
            Verification code <strong>*</strong>
          </span>
          <input name="verificationCode" type="text" required />
          <em aria-label={`Verification code image ${verificationCodeImage}`}>
            {verificationCodeImage}
          </em>
          <button type="button" onClick={changeVerificationCode}>
            Change Image
          </button>
        </label>
      </fieldset>

      <p className="privacy-note">
        By submitting your contact information, you acknowledge that you consent to our
        processing data in accordance with the Privacy and Cookie Policy.
      </p>
      <div className="form-submit-row">
        <button className="primary-button compact-submit" type="submit">
          Submit
        </button>
      </div>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
