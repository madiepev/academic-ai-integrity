/* ============================================================
   INLINE CERTIFICATE GENERATOR
   Shared across all assessment pages.

   Usage:
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js"></script>
     <script src="../certificate.js"></script>

     <button onclick="openCertificate('pilot','know')">Download Certificate</button>
   ============================================================ */

var VU_LOGO = 'data:image/png;base64,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';

var CERT_MODULE_META = {
    know:     { label: 'Know',     full: 'Know — AI Tools & Foundations' },
    use:      { label: 'Use',      full: 'Use — Prompt Engineering & Workflows' },
    evaluate: { label: 'Evaluate', full: 'Evaluate — Critical AI Output Assessment' }
};

/* ── Inject modal once ── */
(function () {
    var overlay = document.createElement('div');
    overlay.id = 'cert-overlay';
    overlay.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;justify-content:center;align-items:center;';

    overlay.innerHTML =
        '<div id="cert-modal" style="background:white;border-radius:16px;padding:28px 32px;max-width:420px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.3);font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;position:relative;">' +
            '<button id="cert-close" style="position:absolute;top:12px;right:14px;background:none;border:none;font-size:20px;color:#94a3b8;cursor:pointer;line-height:1;" aria-label="Close">&times;</button>' +
            '<div style="font-size:18px;font-weight:800;color:#1e1b4b;margin-bottom:4px;">Download Certificate</div>' +
            '<div style="font-size:13px;color:#6b7280;margin-bottom:20px;" id="cert-modal-sub"></div>' +
            '<label style="display:block;font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;" for="cert-name-input">Your full name</label>' +
            '<input type="text" id="cert-name-input" placeholder="As it should appear on the certificate" autocomplete="name" style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:10px;font-size:15px;font-family:inherit;color:#1e1b4b;margin-bottom:16px;outline:none;transition:border-color 0.2s;">' +
            '<button id="cert-dl-btn" disabled style="width:100%;padding:12px;border:none;border-radius:10px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity 0.2s;opacity:0.4;">' +
                'Download PDF' +
            '</button>' +
            '<div id="cert-status" style="text-align:center;font-size:12px;color:#6b7280;margin-top:10px;display:none;"></div>' +
        '</div>';

    document.body.appendChild(overlay);

    document.getElementById('cert-close').addEventListener('click', closeCertificate);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeCertificate();
    });

    var nameInput = document.getElementById('cert-name-input');
    var dlBtn = document.getElementById('cert-dl-btn');
    nameInput.addEventListener('input', function () {
        var ok = nameInput.value.trim().length >= 2;
        dlBtn.disabled = !ok;
        dlBtn.style.opacity = ok ? '1' : '0.4';
    });
    nameInput.addEventListener('focus', function () { nameInput.style.borderColor = '#667eea'; });
    nameInput.addEventListener('blur', function () { nameInput.style.borderColor = '#e2e8f0'; });
    nameInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !dlBtn.disabled) generateCertPDF();
    });
})();

var _certTrack = '';
var _certModule = '';

function openCertificate(track, module) {
    _certTrack = track;
    _certModule = module;
    var meta = CERT_MODULE_META[module] || CERT_MODULE_META.know;
    var trackCap = track.charAt(0).toUpperCase() + track.slice(1);

    document.getElementById('cert-modal-sub').textContent =
        meta.label + ' module \u00b7 ' + trackCap + ' track';
    document.getElementById('cert-name-input').value = '';
    document.getElementById('cert-dl-btn').disabled = true;
    document.getElementById('cert-dl-btn').style.opacity = '0.4';
    document.getElementById('cert-dl-btn').onclick = generateCertPDF;
    document.getElementById('cert-status').style.display = 'none';

    document.getElementById('cert-overlay').style.display = 'flex';
    setTimeout(function () { document.getElementById('cert-name-input').focus(); }, 100);
}

function closeCertificate() {
    document.getElementById('cert-overlay').style.display = 'none';
}

/* ============================================================
   BUILD CERTIFICATE PDF DIRECTLY WITH jsPDF
   ============================================================ */
function generateCertPDF() {
    var name = document.getElementById('cert-name-input').value.trim();
    if (name.length < 2) return;

    var meta = CERT_MODULE_META[_certModule] || CERT_MODULE_META.know;
    var trackCap = _certTrack.charAt(0).toUpperCase() + _certTrack.slice(1);
    var now = new Date();
    var dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    var status = document.getElementById('cert-status');
    status.style.display = 'block';
    status.textContent = 'Generating PDF...';

    try {
        /* landscape letter: 279.4 x 215.9 mm */
        var pdf = new jspdf.jsPDF({ orientation: 'landscape', unit: 'mm', format: 'letter' });
        var W = pdf.internal.pageSize.getWidth();   // ~279.4
        var H = pdf.internal.pageSize.getHeight();  // ~215.9
        var cx = W / 2;

        /* ── Background ── */
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, W, H, 'F');

        /* ── Top accent bar ── */
        pdf.setFillColor(0, 48, 130);
        pdf.rect(0, 0, W, 3, 'F');

        /* ── Outer border ── */
        pdf.setDrawColor(30, 58, 95);
        pdf.setLineWidth(0.8);
        pdf.rect(5, 5, W - 10, H - 10);

        /* ── Inner border ── */
        pdf.setDrawColor(196, 180, 138);
        pdf.setLineWidth(0.3);
        pdf.rect(8, 8, W - 16, H - 16);

        /* ── Corner decorations ── */
        pdf.setDrawColor(196, 180, 138);
        pdf.setLineWidth(0.4);
        var corners = [
            [12, 12, 1, 1],
            [W - 12, 12, -1, 1],
            [12, H - 12, 1, -1],
            [W - 12, H - 12, -1, -1]
        ];
        corners.forEach(function (c) {
            var x = c[0], y = c[1], dx = c[2], dy = c[3];
            pdf.line(x, y, x + 18 * dx, y);
            pdf.line(x, y, x, y + 18 * dy);
            pdf.line(x + 3 * dx, y + 3 * dy, x + 12 * dx, y + 3 * dy);
            pdf.line(x + 3 * dx, y + 3 * dy, x + 3 * dx, y + 12 * dy);
        });

        /* ── University logo ── */
        var logoW = 55;
        var logoH = 16;
        pdf.addImage(VU_LOGO, 'PNG', cx - logoW / 2, 16, logoW, logoH);

        /* ── Pre-title ── */
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(107, 114, 128);
        pdf.text('E-LEARNING PROGRAMME', cx, 42, { align: 'center' });

        /* ── Title ── */
        pdf.setFont('times', 'normal');
        pdf.setFontSize(32);
        pdf.setTextColor(30, 58, 95);
        pdf.text('Certificate of Completion', cx, 60, { align: 'center' });

        /* ── Decorative line ── */
        pdf.setDrawColor(196, 180, 138);
        pdf.setLineWidth(0.3);
        pdf.line(cx - 50, 66, cx + 50, 66);

        /* ── "This is to certify that" ── */
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        pdf.setTextColor(107, 114, 128);
        pdf.text('This is to certify that', cx, 78, { align: 'center' });

        /* ── Name ── */
        pdf.setFont('times', 'italic');
        pdf.setFontSize(28);
        pdf.setTextColor(30, 58, 95);
        pdf.text(name, cx, 94, { align: 'center' });

        /* ── Line under name ── */
        pdf.setDrawColor(196, 180, 138);
        pdf.setLineWidth(0.3);
        pdf.line(cx - 42, 99, cx + 42, 99);

        /* ── Description ── */
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(11);
        pdf.setTextColor(71, 85, 105);

        var desc1 = 'has successfully completed the ' + meta.full + ' module';
        var desc2 = 'of the Academic AI Integrity course at the ' + trackCap + ' level.';
        pdf.text(desc1, cx, 112, { align: 'center' });
        pdf.text(desc2, cx, 119, { align: 'center' });

        /* ── Module chip ── */
        var chipText = meta.label + ' \u00b7 ' + trackCap;
        pdf.setFontSize(9);
        var chipW = pdf.getTextWidth(chipText) + 12;
        pdf.setFillColor(240, 244, 255);
        pdf.roundedRect(cx - chipW / 2, 127, chipW, 8, 4, 4, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(59, 89, 152);
        pdf.text(chipText, cx, 132.5, { align: 'center' });

        /* ── Footer columns ── */
        var footY = H - 38;
        var cols = [
            { x: cx - 75, label: 'DATE', value: dateStr },
            { x: cx,      label: 'MODULE', value: meta.full },
            { x: cx + 75, label: 'INSTITUTION', value: 'Vrije Universiteit Amsterdam' }
        ];

        pdf.setDrawColor(203, 213, 225);
        pdf.setLineWidth(0.3);

        cols.forEach(function (col) {
            pdf.line(col.x - 22, footY, col.x + 22, footY);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(7);
            pdf.setTextColor(148, 163, 184);
            pdf.text(col.label, col.x, footY + 5, { align: 'center' });
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(8);
            pdf.setTextColor(71, 85, 105);
            pdf.text(col.value, col.x, footY + 10, { align: 'center' });
        });

        /* ── Certificate ID ── */
        var hash = Array.from(name).reduce(function (h, c) { return ((h << 5) - h + c.charCodeAt(0)) | 0; }, 0);
        var certId = _certTrack.toUpperCase().slice(0, 3) + '-' +
                     _certModule.toUpperCase().slice(0, 3) + '-' +
                     now.getFullYear() +
                     String(now.getMonth() + 1).padStart(2, '0') +
                     String(now.getDate()).padStart(2, '0') + '-' +
                     Math.abs(hash).toString(36).toUpperCase().slice(0, 6);
        pdf.setFont('courier', 'normal');
        pdf.setFontSize(7);
        pdf.setTextColor(203, 213, 225);
        pdf.text('ID: ' + certId, W - 15, H - 12, { align: 'right' });

        /* ── Save ── */
        var safeName = name.replace(/\s+/g, '_');
        pdf.save('Certificate_' + _certModule + '_' + _certTrack + '_' + safeName + '.pdf');

        status.textContent = 'Downloaded!';
        setTimeout(function () { closeCertificate(); }, 1200);

    } catch (err) {
        console.error('Certificate generation error:', err);
        status.textContent = 'Error: ' + err.message;
    }
}
