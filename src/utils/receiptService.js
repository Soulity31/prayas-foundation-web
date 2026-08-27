/**
 * Prayas Foundation - Multi-Channel 80G Tax Exemption Receipt & Inboxing Service
 * Provides:
 * - Official Section 80G certificate formatting (Plain text & XHTML Email compliant)
 * - Multi-provider 1-click web compose URIs (Gmail, Outlook Web, Yahoo Mail, Mailto)
 * - Direct Web Receipt Dispatch fallback
 * - WhatsApp receipt dispatch
 * - High-resolution print & PDF generator
 */

import { getDonationPdfUrl } from './apiClient.js';

export const PRAYAS_TRUST_DETAILS = {
  name: "Prayas Foundation (Trust)",
  registrationNo: "E-33214 (Mumbai)",
  pan: "AAATP4928PF20214",
  tax80gApproval: "CIT(E)/80G/12A/2021-22/W-412",
  address: "Mumbai Public School, Gate No. 6, Malvani, Malad (West), Mumbai - 400095, Maharashtra",
  phone: "+91-9820500726",
  email: "info@prayasfoundation.co.in",
  website: "https://prayasfoundation.co.in",
  signatory: "Brijesh Singh (Trustee / Chairman)"
};

/**
 * Formats a clean, official Section 80G plain-text receipt or Normal Donation acknowledgment
 */
export function generate80GReceiptText(donation) {
  const is80g = Boolean(donation.is_80g || (donation.tax_80g_receipt_no && String(donation.tax_80g_receipt_no).startsWith('80G')));
  const rawNo = donation.tax_80g_receipt_no || (is80g ? `80G-PF-2026-X${donation.id || Math.floor(1000 + Math.random() * 9000)}` : `RCP-PF-2026-N${donation.id || Math.floor(1000 + Math.random() * 9000)}`);
  const receiptNo = (!is80g && rawNo.startsWith('80G-PF-')) ? rawNo.replace('80G-PF-', 'RCP-PF-') : rawNo;
  const dateStr = donation.created_at ? new Date(donation.created_at).toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' }) : new Date().toLocaleString('en-IN');
  const amountFmt = Number(donation.amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const donorName = donation.donor_name || 'Generous Donor';
  const donorEmail = donation.donor_email || '';
  const donorPhone = donation.donor_phone || 'N/A';
  const donorPan = (donation.donor_pan && donation.donor_pan.trim().length >= 5) ? donation.donor_pan : (is80g ? 'Provided on File' : 'Not Applicable (General Direct Donation)');
  const txnRef = donation.transaction_id || `UPI-2026-${Math.floor(100000 + Math.random() * 900000)}`;
  const cause = donation.cause || 'MPS Malvani Classroom & Digital Lab Infrastructure';
  const paymentMode = donation.payment_mode || 'UPI (QR Code)';

  const titleHeader = is80g ? 'OFFICIAL 80G DONATION RECEIPT & TAX DEDUCTION CERTIFICATE' : 'OFFICIAL DONATION RECEIPT & ACKNOWLEDGMENT CERTIFICATE';
  const taxDecl = is80g
    ? `STATUTORY TAX BENEFIT DECLARATION:
Donations to Prayas Foundation are eligible for 50% deduction under Section 80G
of the Income Tax Act, 1961 (Approval No. ${PRAYAS_TRUST_DETAILS.tax80gApproval}).`
    : `OFFICIAL DONATION ACKNOWLEDGMENT:
Certified with gratitude that this voluntary contribution has been received by
Prayas Foundation Trust and will be applied towards student education, digital learning,
and child welfare at Mumbai Public School, Malvani.`;

  return `
================================================================================
                    PRAYAS FOUNDATION (CHARITABLE TRUST)
        Mumbai Public School, Malvani, Malad West, Mumbai - 400095
        Trust Reg. No: ${PRAYAS_TRUST_DETAILS.registrationNo} | PAN: ${PRAYAS_TRUST_DETAILS.pan}
================================================================================

${titleHeader}
--------------------------------------------------------------------------------
Receipt Number      : ${receiptNo}
Date & Time Issued  : ${dateStr}
Transaction Ref     : ${txnRef}
Payment Mode        : ${paymentMode}

DONOR DETAILS:
--------------------------------------------------------------------------------
Full Name           : ${donorName}
Email Address       : ${donorEmail}
Contact Phone       : ${donorPhone}
Donor PAN / ID      : ${donorPan}

CONTRIBUTION SUMMARY:
--------------------------------------------------------------------------------
Amount Received     : INR ₹${amountFmt}
Designated Purpose  : ${cause}

${taxDecl}

This is an authentic computer-generated official receipt issued by Prayas
Foundation.

Prayas Foundation Trust
Website: ${PRAYAS_TRUST_DETAILS.website}
Helpline: ${PRAYAS_TRUST_DETAILS.phone} | Email: ${PRAYAS_TRUST_DETAILS.email}
================================================================================
`.trim();
}

/**
 * Formats a modern branded HTML certificate
 */
export function generate80GReceiptHtml(donation) {
  const is80g = Boolean(donation.is_80g || (donation.tax_80g_receipt_no && String(donation.tax_80g_receipt_no).startsWith('80G')));
  const rawNo = donation.tax_80g_receipt_no || (is80g ? `80G-PF-2026-X${donation.id || Math.floor(1000 + Math.random() * 9000)}` : `RCP-PF-2026-N${donation.id || Math.floor(1000 + Math.random() * 9000)}`);
  const receiptNo = (!is80g && rawNo.startsWith('80G-PF-')) ? rawNo.replace('80G-PF-', 'RCP-PF-') : rawNo;
  const dateStr = donation.created_at ? new Date(donation.created_at).toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' }) : new Date().toLocaleString('en-IN');
  const amountFmt = Number(donation.amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const donorName = donation.donor_name || 'Generous Donor';
  const donorEmail = donation.donor_email || '';
  const donorPhone = donation.donor_phone || 'N/A';
  const donorPan = (donation.donor_pan && donation.donor_pan.trim().length >= 5) ? donation.donor_pan : (is80g ? 'Provided on File' : 'Not Required (General Support)');
  const txnRef = donation.transaction_id || `UPI-2026-${Math.floor(100000 + Math.random() * 900000)}`;
  const cause = donation.cause || 'MPS Malvani Classroom & Digital Lab Infrastructure';
  const paymentMode = donation.payment_mode || 'UPI (QR Code)';

  const headerSub = is80g ? `Section 80G Tax Exemption Certificate • PAN: ${PRAYAS_TRUST_DETAILS.pan}` : `Official Charitable Donation Receipt • PAN: ${PRAYAS_TRUST_DETAILS.pan}`;
  const headerBg = is80g ? 'linear-gradient(135deg, #065f46 0%, #047857 100%)' : 'linear-gradient(135deg, #0369a1 0%, #0284c7 100%)';
  const headerBorder = is80g ? '#059669' : '#0284c7';
  const boxBorder = is80g ? '#10b981' : '#38bdf8';
  const accentColor = is80g ? '#047857' : '#0284c7';

  const statutoryHtml = is80g
    ? `<div style="background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 10px; padding: 14px; margin-bottom: 20px; font-size: 12.5px; color: #065f46; line-height: 1.5;">
        🛡️ <strong>Statutory 80G Tax Exemption:</strong> Donations to Prayas Foundation are 50% tax-exempt under Section 80G of the Income Tax Act, 1961 (Order No. ${PRAYAS_TRUST_DETAILS.tax80gApproval}).
      </div>`
    : `<div style="background: #f0f9ff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 14px; margin-bottom: 20px; font-size: 12.5px; color: #0369a1; line-height: 1.5;">
        🤝 <strong>Official Charitable Acknowledgment:</strong> Certified with sincere gratitude that this voluntary contribution has been received by Prayas Foundation (Trust) and will be applied directly towards student education and child welfare.
      </div>`;

  return `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 2px solid ${boxBorder}; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
    <div style="background: ${headerBg}; color: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 3px solid ${headerBorder};">
      <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">PRAYAS FOUNDATION</h1>
      <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.95; font-weight: 500;">Registered Public Charitable Trust (Reg No: ${PRAYAS_TRUST_DETAILS.registrationNo})</p>
      <p style="margin: 3px 0 0; font-size: 12px; opacity: 0.85;">${headerSub}</p>
    </div>

    <div style="padding: 26px 28px; color: #1e293b; line-height: 1.6;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #e2e8f0; padding-bottom: 14px; margin-bottom: 18px;">
        <div>
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700;">Receipt Number</span>
          <div style="font-family: monospace; font-size: 16px; font-weight: 800; color: ${accentColor};">${receiptNo}</div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700;">Date Issued</span>
          <div style="font-size: 13px; font-weight: 600; color: #334155;">${dateStr}</div>
        </div>
      </div>

      <p style="margin-top: 0; font-size: 15px;">Dear <strong>${donorName}</strong>,</p>
      <p style="font-size: 14px; color: #475569; margin-bottom: 18px;">
        We gratefully acknowledge receipt of your generous contribution. This official receipt confirms your donation in support of students and digital education at Mumbai Public School, Malvani.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13.5px; background: #f8fafc; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">
        <tbody>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600; width: 38%;">Amount Received</td>
            <td style="padding: 10px 14px; font-weight: 800; color: #059669; font-size: 16px;">₹${amountFmt}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Transaction Ref (UTR)</td>
            <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">${txnRef}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Donor PAN / ID</td>
            <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">${donorPan}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Payment Mode</td>
            <td style="padding: 10px 14px; color: #334155;">${paymentMode}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Cause Supported</td>
            <td style="padding: 10px 14px; color: #334155;">${cause}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Donor Contact</td>
            <td style="padding: 10px 14px; color: #334155;">${donorEmail} ${donorPhone !== 'N/A' ? `• ${donorPhone}` : ''}</td>
          </tr>
        </tbody>
      </table>

      ${statutoryHtml}

      <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 10px;">
        <div style="font-size: 11.5px; color: #64748b;">
          <div><strong>Prayas Foundation (Trust)</strong></div>
          <div>Mumbai Public School, Malvani, Malad (W), Mumbai</div>
          <div>Helpline: +91-9820500726</div>
        </div>
        <div style="text-align: center; min-width: 140px;">
          <div style="font-family: 'Brush Script MT', cursive, serif; font-size: 20px; color: ${accentColor}; margin-bottom: 2px;">Brijesh Singh</div>
          <div style="border-top: 1px solid #cbd5e1; font-size: 11px; color: #64748b; padding-top: 2px;">Authorized Signatory</div>
        </div>
      </div>
    </div>

    <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 11.5px; color: #64748b; border-top: 1px solid #e2e8f0;">
      Computer generated certificate • Prayas Foundation Trust • www.prayasfoundation.co.in
    </div>
  </div>
  `;
}

/**
 * Returns ready-to-use Compose URLs for all major webmail providers
 */
export function getReceiptEmailLinks(donation, recipientEmail) {
  const is80g = Boolean(donation.is_80g || (donation.tax_80g_receipt_no && String(donation.tax_80g_receipt_no).startsWith('80G')));
  const targetEmail = recipientEmail || donation.donor_email || '';
  const rawNo = donation.tax_80g_receipt_no || (is80g ? `80G-PF-2026-X${donation.id || 1001}` : `RCP-PF-2026-N${donation.id || 1001}`);
  const receiptNo = (!is80g && rawNo.startsWith('80G-PF-')) ? rawNo.replace('80G-PF-', 'RCP-PF-') : rawNo;
  const subject = is80g ? `Official 80G Donation Receipt #${receiptNo} - Prayas Foundation` : `Official Donation Receipt #${receiptNo} - Prayas Foundation`;
  const body = generate80GReceiptText(donation);

  return {
    subject,
    body,
    targetEmail,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(targetEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${encodeURIComponent(targetEmail)}&subj=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    mailto: `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  };
}

/**
 * 1-Click Direct Emailer: Opens Gmail web compose or default email client
 */
export function openEmailReceipt(donation, recipientEmail) {
  const links = getReceiptEmailLinks(donation, recipientEmail);
  const win = window.open(links.gmail, '_blank');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = links.mailto;
  }
  return true;
}

/**
 * Direct WhatsApp receipt sender
 */
export function openWhatsAppReceipt(donation, targetPhone) {
  const receiptNo = donation.tax_80g_receipt_no || `80G-PF-2026-X${donation.id || 1001}`;
  const amountFmt = Number(donation.amount || 0).toLocaleString('en-IN');
  const donorName = donation.donor_name || 'Donor';
  const txnRef = donation.transaction_id || 'UPI-REF';

  const text = `*Prayas Foundation (Trust) - Official 80G Receipt*\n\nDear ${donorName},\nThank you for your generous contribution of *₹${amountFmt}* towards MPS Malvani School.\n\n*Receipt Number:* ${receiptNo}\n*Transaction Ref:* ${txnRef}\n*80G Exemption Approval:* ${PRAYAS_TRUST_DETAILS.pan}\n\nDownload your full 80G tax certificate or reach us at +91-9820500726 | www.prayasfoundation.co.in`;

  const cleanPhone = (targetPhone || donation.donor_phone || '').replace(/[^0-9]/g, '');
  const waUrl = cleanPhone.length >= 10
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`
    : `https://wa.me/?text=${encodeURIComponent(text)}`;

  window.open(waUrl, '_blank');
}

/**
 * Universal In-Page 80G Tax Exemption Receipt Viewer Modal
 * 100% compatible with Mobile & Desktop (Zero popup blocker issues)
 */
export function openReceiptModal(donation) {
  if (!donation) return;

  let modal = document.getElementById('receipt-viewer-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'receipt-viewer-modal';
    modal.className = 'modal-backdrop';
    modal.style.cssText = 'position: fixed; inset: 0; z-index: 999999; background: rgba(0,0,0,0.8); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; padding: 1rem;';
    document.body.appendChild(modal);
  }

  const htmlContent = generate80GReceiptHtml(donation);
  const emailLinks = getReceiptEmailLinks(donation);
  const is80g = Boolean(donation.is_80g || (donation.tax_80g_receipt_no && String(donation.tax_80g_receipt_no).startsWith('80G')));

  modal.innerHTML = `
    <div class="modal-panel" style="max-width: 760px; width: 100%; max-height: 92vh; overflow-y: auto; background: #ffffff; color: #0f172a; border-radius: 24px; padding: 1.5rem 1.75rem; position: relative; box-shadow: 0 35px 90px rgba(0,0,0,0.6); border: 2px solid #10b981;">
      
      <!-- Close Corner Button -->
      <button id="close-receipt-viewer-btn" class="modal-close-corner-btn hover-lift" type="button" aria-label="Close Receipt Viewer" title="Close" style="position: absolute; top: 14px; right: 14px; width: 38px; height: 38px; border-radius: 50%; background: #f1f5f9; color: #0f172a; border: 1.5px solid #cbd5e1; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 900; cursor: pointer; z-index: 100;">
        ✕
      </button>

      <!-- Action Buttons Bar at Top -->
      <div style="display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 1.25rem; padding-right: 3.2rem; align-items: center;">
        <button id="btn-print-modal-receipt" class="btn btn-primary btn-sm hover-lift" style="padding: 0.55rem 1.1rem; font-weight: 700; font-size: 0.88rem; border-radius: 10px; display: inline-flex; align-items: center; gap: 0.4rem;">
          <span>🖨️ Print / Save as PDF</span>
        </button>
        <a href="${emailLinks.gmail}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm hover-lift" style="padding: 0.55rem 0.95rem; font-weight: 700; font-size: 0.88rem; border-radius: 10px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; color: #0284c7; border-color: #0284c7;">
          <span>✉️ Email via Gmail</span>
        </a>
        <button id="btn-copy-receipt-txt" class="btn btn-secondary btn-sm hover-lift" style="padding: 0.55rem 0.95rem; font-weight: 700; font-size: 0.88rem; border-radius: 10px; display: inline-flex; align-items: center; gap: 0.4rem;">
          <span>📋 Copy Text</span>
        </button>
      </div>

      <!-- Live 80G Certificate Content -->
      <div id="printable-receipt-card" style="border: 1.5px solid #e2e8f0; border-radius: 18px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 15px rgba(0,0,0,0.06);">
        ${htmlContent}
      </div>

    </div>
  `;

  modal.classList.add('open');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Modal Event Listeners
  const closeBtn = modal.querySelector('#close-receipt-viewer-btn');
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.remove('open');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  const printBtn = modal.querySelector('#btn-print-modal-receipt');
  if (printBtn) {
    printBtn.onclick = () => {
      printOfficial80GReceipt(donation);
    };
  }

  const copyBtn = modal.querySelector('#btn-copy-receipt-txt');
  if (copyBtn) {
    copyBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(generate80GReceiptText(donation));
        copyBtn.innerHTML = '<span>✓ Copied to Clipboard!</span>';
        copyBtn.style.background = '#10b981';
        copyBtn.style.color = '#ffffff';
        setTimeout(() => {
          copyBtn.innerHTML = '<span>📋 Copy Text</span>';
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2000);
      } catch (e) {
        prompt('Copy Official 80G Receipt Text (Ctrl+C, Enter):', generate80GReceiptText(donation));
      }
    };
  }
}

/**
 * High-resolution Print / PDF generator for the 80G Certificate
 */
export function printOfficial80GReceipt(donation) {
  const htmlContent = generate80GReceiptHtml(donation);
  
  // Try popup window first
  try {
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (printWindow && printWindow.document) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>80G Tax Exemption Receipt - Prayas Foundation</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style>
              @page { size: auto; margin: 12mm; }
              body { margin: 0; padding: 20px; background: #ffffff; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-family: sans-serif; }
              @media print {
                .no-print { display: none !important; }
              }
              .print-header-actions {
                max-width: 650px;
                margin: 0 auto 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .btn-print {
                background: #059669;
                color: #ffffff;
                border: none;
                padding: 8px 16px;
                border-radius: 8px;
                font-weight: 700;
                cursor: pointer;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="print-header-actions no-print">
              <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
              <span style="font-size: 13px; color: #64748b;">Prayas Foundation Official Tax Certificate</span>
            </div>
            ${htmlContent}
            <script>
              setTimeout(() => {
                window.print();
              }, 350);
            <\/script>
          </body>
        </html>
      `);
      printWindow.document.close();
      return;
    }
  } catch (e) {}

  // Fallback if popup blocked
  window.print();
}

/**
 * Universal Official 80G Receipt Viewer & PDF Downloader
 */
export function downloadOfficial80GPdf(donation) {
  openReceiptModal(donation);
}


