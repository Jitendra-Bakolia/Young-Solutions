import React from "react";
import "../../../../public/css/returnRefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="RefundPolicy-container">
      {/* Header */}
      <header className="RefundPolicy-header">
        <h1 className="RefundPolicy-title">Return &amp; Refund Policy</h1>
        <p>Last Updated: 24-Oct-25</p>
      </header>

      {/* Content */}
      <div className="RefundPolicy-content">
        <p>
          At <strong>Young Solutions</strong>, we aim to ensure a transparent and reliable
          purchase experience. All products supplied by us are 100% genuine, brand-sealed, and
          covered under official manufacturer warranty (where applicable). This Return &amp;
          Refund Policy governs requests related to returns, replacement, refunds, and
          cancellations.
        </p>

        <h2>1. General Policy</h2>
        <p>
          Due to the nature of IT hardware and technology products, returns or refunds are not
          offered for cases such as:
        </p>
        <ul>
          <li>Change of mind</li>
          <li>Incorrect product ordered by the customer</li>
          <li>Product compatibility issues (unless advised by us in writing)</li>
        </ul>
        <p>
          We request customers to verify requirements, specifications, and compatibility before
          placing the order.
        </p>

        <h2>2. Eligible Return / Replacement Cases</h2>
        <p>A product is eligible for return or replacement only if:</p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "15px",
          }}
        >
          <thead>
            <tr style={{ background: "#f5f5f5", borderBottom: "2px solid #b59759" }}>
              <th style={{ textAlign: "left", padding: "10px" }}>Condition</th>
              <th style={{ textAlign: "left", padding: "10px" }}>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>Product received is physically damaged</td>
              <td style={{ padding: "10px" }}>
                Must be reported within 24 hours of delivery with unboxing video as proof
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>
                Product received is different from what was ordered
              </td>
              <td style={{ padding: "10px" }}>
                Must be reported within 24 hours with supporting photos/video
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>Product is Dead on Arrival (DOA) / not powering on</td>
              <td style={{ padding: "10px" }}>
                Replacement will follow brand/manufacturer DOA policy only
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Important:</strong>
        </p>
        <ul>
          <li>
            An unboxing video from the moment the sealed package is opened is mandatory to claim
            damage / wrong product / DOA.
          </li>
          <li>Without video proof, we cannot process the claim.</li>
        </ul>

        <h2>3. Non-Returnable / Non-Refundable Products</h2>
        <p>The following items cannot be returned or refunded:</p>
        <ul>
          <li>
            Products that have been opened, unboxed, activated, registered, used, or physically
            installed
          </li>
          <li>Products that are tampered with or missing accessories/packaging</li>
          <li>Software licenses, digital products, antivirus keys, subscription codes</li>
          <li>Products purchased under special order, clearance, or promotional pricing</li>
          <li>Customized / configured systems like custom-built PCs or server setups</li>
        </ul>

        <h2>4. Manufacturer Warranty</h2>
        <p>
          All hardware products carry brand warranty as per manufacturer terms. Warranty support
          is handled directly by authorized service centers. <br />
          Young Solutions assists customers with guidance, but does not perform repairs.
        </p>
        <p>
          <strong>Warranty does not cover except OEM Offering:</strong>
        </p>
        <ul>
          <li>
            The warranty is limited to what the Original Equipment Manufacturer (OEM) provides.
          </li>
          <li>
            Any additional claims, damages, or coverage beyond the OEM’s standard warranty will not
            be honored.
          </li>
          <li>
            Only the services, repairs, or replacements that the OEM officially provides are
            included.
          </li>
        </ul>

        <h2>5. Refunds</h2>
        <p>Refunds will be processed only when:</p>
        <ul>
          <li>The product qualifies for return under Section 2, and</li>
          <li>Replacement is not available in stock.</li>
        </ul>
        <p>
          <strong>Refunds will be issued through:</strong>
        </p>
        <ul>
          <li>Bank Transfer / NEFT</li>
        </ul>
        <p>
          <strong>Refund timeline:</strong> 3–8 business days after product inspection and approval.
        </p>

        <h2>6. Order Cancellation</h2>
        <ul>
          <li>Orders cannot be cancelled once payment is made or the order is processed.</li>
          <li>
            Cancellation before dispatch may be considered only in exceptional cases and may be
            subject to cancellation charges.
          </li>
        </ul>

        <h2>7. Shipping Costs</h2>
        <ul>
          <li>
            Return shipping costs are the responsibility of the customer unless the error is from
            our side.
          </li>
          <li>
            In case of damage/mismatch approved return, we will arrange pickup or reimburse shipping
            as applicable.
          </li>
        </ul>

        <h2>8. Contact for Return Requests</h2>
        <p>
          To report a claim, contact:
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:youngsolutions27@gmail.com">youngsolutions27@gmail.com</a>
          <br />
          <strong>Phone / WhatsApp:</strong> +91 70119 88749
        </p>

        <p>When contacting, please include:</p>
        <ul>
          <li>Order Invoice</li>
          <li>Product Photos / Videos</li>
          <li>Unboxing Video (for damage/DOA cases)</li>
        </ul>

        <p>
          We appreciate your cooperation. This policy ensures safety for both the customer and{" "}
          <strong>Young Solutions</strong> while maintaining fair, transparent, and ethical
          business practices.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
