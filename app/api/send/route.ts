import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  serviceOther: string;
  message: string;
};

const serviceLabels: Record<string, string> = {
  web: "Web Sitesi Tasarımı",
  panel: "Yönetim Paneli",
  qr: "QR Menü Çözümleri",
  seo: "SEO ve İçerik Optimizasyonu",
  other: "Diğer",
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

function generateEmailHTML(data: FormData): string {
  const selectedService = serviceLabels[data.service] || data.service;
  const finalService =
    data.service === "other" && data.serviceOther
      ? `${selectedService}: ${data.serviceOther}`
      : selectedService;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
      color: #ffffff;
      padding: 32px 24px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    .header p {
      margin: 8px 0 0 0;
      font-size: 14px;
      opacity: 0.9;
    }
    .content {
      padding: 32px 24px;
    }
    .section {
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666;
      margin-bottom: 8px;
    }
    .field {
      margin-bottom: 16px;
    }
    .field-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #999;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 14px;
      color: #333;
      word-break: break-word;
    }
    .message-box {
      background-color: #f9f9f9;
      border-left: 4px solid #000000;
      padding: 16px;
      border-radius: 4px;
      margin-top: 8px;
    }
    .message-box p {
      margin: 0;
      font-size: 14px;
      color: #333;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .footer {
      background-color: #f5f5f5;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    .footer p {
      margin: 0;
      font-size: 12px;
      color: #999;
    }
    .footer a {
      color: #000000;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Yeni Teklif Formu Gönderimi</h1>
      <p>MF Digital Studio</p>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">Başvuru Bilgileri</div>
        
        <div class="field">
          <div class="field-label">Ad Soyad</div>
          <div class="field-value">${escapeHtml(data.fullName)}</div>
        </div>
        
        <div class="field">
          <div class="field-label">E-posta</div>
          <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
        </div>
        
        <div class="field">
          <div class="field-label">Telefon</div>
          <div class="field-value">${escapeHtml(data.phone)}</div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Hizmet Seçimi</div>
        <div class="field">
          <div class="field-value">${escapeHtml(finalService)}</div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Mesaj</div>
        <div class="message-box">
          <p>${escapeHtml(data.message)}</p>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <p>
        Bu mesaj <a href="https://www.mfdigitalstudio.com">MF Digital Studio</a> teklif formundan gönderilmiştir.<br>
        <strong>${escapeHtml(data.email)}</strong> adresinden geldi.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    // Validate required fields
    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.service ||
      !data.message
    ) {
      return NextResponse.json(
        { error: "Tüm alanları doldurunuz." },
        { status: 400 }
      );
    }

    if (data.service === "other" && !data.serviceOther) {
      return NextResponse.json(
        { error: "Lütfen diğer hizmet konusunu belirtiniz." },
        { status: 400 }
      );
    }

    // Prepare email subject and HTML
    const selectedService = serviceLabels[data.service] || data.service;
    const finalService =
      data.service === "other" && data.serviceOther
        ? `${selectedService}: ${data.serviceOther}`
        : selectedService;

    const subject = `Yeni Teklif: ${finalService} - ${data.fullName}`;
    const htmlContent = generateEmailHTML(data);

    const resend = getResendClient();

    if (!resend) {
      console.error("Resend API key is missing.");
      return NextResponse.json(
        { error: "E-posta servisi şu anda yapılandırılmadı. Lütfen daha sonra tekrar deneyin." },
        { status: 500 }
      );
    }

    // Send email via Resend
    const response = await resend.emails.send({
      from: 'MF Digital Studio <bilgi@send.mfdigitalstudio.com>',
      to: "info@mfdigitalstudio.com",
      replyTo: data.email,
      subject: subject,
      html: htmlContent,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi. Lütfen tekrar deneyin." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
