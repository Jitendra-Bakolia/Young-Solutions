import React from "react";
import "../../../../public/css/termsCondition.css";

const TermsConditions = () => {
  return (
    <div className="TermsConditions-page">
      {/* Header Section */}
      <div className="TermsConditions-header">
        <h1 className="TermsConditions-title">Terms &amp; Conditions</h1>
        <p className="TermsConditions-update">Last Updated: 24-Oct-25</p>
      </div>

      {/* Content Section */}
      <div className="TermsConditions-content">
        <p>
          These Terms &amp; Conditions (“Terms”) govern your access to and use of the website and
          services provided by <strong>Young Solutions</strong> (“we”, “us”, “our”). By visiting our
          website, placing an inquiry, or purchasing any product from us, you agree to be bound by
          these Terms. If you do not agree, please do not use our website or services.
        </p>

        <h2>1. Company Details</h2>
        <p>
          <strong>Young Solutions</strong><br />
          F-323 B, Sector-11, Pratap Vihar, Ghaziabad, Uttar Pradesh – 201009<br />
          Email: <a href="mailto:youngsolutions27@gmail.com">youngsolutions27@gmail.com</a><br />
          Phone / WhatsApp: +91 70119 88749<br />
          GST No.: 09AADFY0685N1ZH
        </p>

        <h2>2. Product Information</h2>
        <ul>
          <li>Actual product features may vary slightly from displayed descriptions.</li>
          <li>Prices and availability may change without prior notice.</li>
          <li>Some products may be subject to manufacturer or distributor policies.</li>
        </ul>
        <p>We reserve the right to correct any errors, inaccuracies, or omissions at any time.</p>

        <h2>3. Orders &amp; Quotations</h2>
        <ul>
          <li>Website Inquiry Form</li>
          <li>Phone / WhatsApp</li>
          <li>Email</li>
        </ul>
        <p>
          Quotations are valid only until the mentioned validity date. Product orders are processed
          only upon confirmation and agreed terms. We reserve the right to decline or cancel an
          order at our discretion.
        </p>

        <h2>4. Pricing &amp; Payment Terms</h2>
        <ul>
          <li>All prices are in INR (₹) and inclusive/exclusive of GST as mentioned.</li>
          <li>
            Payment methods accepted: Bank Transfer / NEFT / RTGS, UPI, Credit/Debit Cards.
          </li>
          <li>Orders are dispatched only after full payment unless otherwise agreed in writing.</li>
        </ul>

        <h2>5. Shipping &amp; Delivery</h2>
        <ul>
          <li>Delivery timelines depend on product type, location, and availability.</li>
          <li>Shipping charges may apply unless stated otherwise.</li>
          <li>Transit delays are beyond our control once handed to courier partners.</li>
          <li>
            Report delivery damage or shortages within 24 hours of receipt, with unboxing video
            proof.
          </li>
        </ul>

        <h2>6. Warranty &amp; Support</h2>
        <ul>
          <li>All products are 100% genuine and covered by manufacturer warranty.</li>
          <li>Warranty claims must be processed through authorized service centers.</li>
          <li>
            Young Solutions assists in guiding customers but does not provide direct product repair
            services unless stated.
          </li>
        </ul>

        <h2>7. Return, Replacement &amp; Cancellation</h2>
        <ul>
          <li>Allowed only as per our Return &amp; Refund Policy.</li>
          <li>
            Products once opened, damaged, tampered, or used are not eligible for return unless
            covered under DOA (Dead on Arrival).
          </li>
          <li>Customized or special-order items are non-returnable.</li>
        </ul>

        <h2>8. Limitations of Liability</h2>
        <ul>
          <li>We are not liable for loss of business, profits, or data due to product malfunction.</li>
          <li>We are not liable for service downtime or delays by third-party brands.</li>
          <li>Our liability is limited to the amount paid for the product.</li>
        </ul>

        <h2>9. Intellectual Property</h2>
        <p>
          All logos, brand names, product names, and trademarks belong to their respective owners.
          Content on our website cannot be copied, reproduced, or distributed without written
          approval.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be resolved under the
          jurisdiction of courts in Ghaziabad, Uttar Pradesh.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          For questions or clarifications related to these Terms:<br />
          Email: <a href="mailto:youngsolutions27@gmail.com">youngsolutions27@gmail.com</a><br />
          Phone / WhatsApp: +91 70119 88749
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
