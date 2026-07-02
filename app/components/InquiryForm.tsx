"use client";

import { FormEvent, useState } from "react";

const demoRecipient = "plehoang641@gmail.com";

export default function InquiryForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const organization = String(formData.get("organization") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const country = String(formData.get("country") || "");
    const interest = String(formData.get("interest") || "");
    const requestType = String(formData.get("requestType") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`SISBIO demo inquiry - ${interest || "Product information"}`);
    const body = encodeURIComponent(
      [
        "Demo inquiry from SISBIO website",
        "",
        `Name: ${name}`,
        `Organization: ${organization}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Country/Region: ${country}`,
        `Product interest: ${interest}`,
        `Request type: ${requestType}`,
        "",
        "Message:",
        message
      ].join("\n")
    );

    setStatus("Opening email client for demo submission.");
    window.location.href = `mailto:${demoRecipient}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Organization
          <input name="organization" type="text" autoComplete="organization" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Country / Region
          <input name="country" type="text" autoComplete="country-name" />
        </label>
        <label>
          Product interest
          <select name="interest" defaultValue="Signal-Direct Imager" required>
            <option>Signal-Direct Imager</option>
            <option>Max-One Software</option>
            <option>CHO Media</option>
            <option>Bioproduction Feed</option>
            <option>Distributor inquiry</option>
          </select>
        </label>
        <label>
          Request type
          <select name="requestType" defaultValue="Product information" required>
            <option>Product information</option>
            <option>Quotation</option>
            <option>Technical consultation</option>
            <option>Brochure or documentation</option>
            <option>Distributor partnership</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your application, expected workflow, sample type, or procurement timeline."
          required
        />
      </label>
      <label className="consent-row">
        <input name="consent" type="checkbox" required />
        <span>I agree to be contacted by SISBIO about this inquiry.</span>
      </label>
      <button className="primary-button" type="submit">
        Send Inquiry
      </button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
