export function getWelcomeEmailHtml() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>Welcome to Vextra</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f8f6; margin: 0; padding: 40px 20px; -webkit-font-smoothing: antialiased;">
  <div style="max-width: 480px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">

    <!-- Header -->
    <div style="background-color: #2f3a3f; padding: 32px 24px; text-align: center;">
      <h1 style="color: #14b8a6; font-size: 28px; font-weight: 600; margin: 0; letter-spacing: -0.5px;">Vextra</h1>
      <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 8px 0 0 0; letter-spacing: 0.5px;">BUILT TO WORK</p>
    </div>

    <!-- Content -->
    <div style="padding: 40px 32px;">
      <h2 style="color: #2f3a3f; font-size: 22px; font-weight: 600; margin: 0 0 16px 0; letter-spacing: -0.3px;">You're on the list!</h2>

      <p style="color: #5a6a70; font-size: 15px; line-height: 1.7; margin: 0 0 20px 0;">
        Thanks for joining the Vextra waitlist. We're building dependable digital products for Nigeria and Africa, and we'll notify you as soon as we launch.
      </p>

      <p style="color: #5a6a70; font-size: 15px; line-height: 1.7; margin: 0 0 28px 0;">
        In the meantime, follow us on social media for updates and behind-the-scenes content.
      </p>

      <!-- Social Links -->
      <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
        <a href="https://linkedin.com/company/vextrahq" style="display: inline-block; margin: 0 8px; color: #2f3a3f; text-decoration: none; font-size: 13px;">LinkedIn</a>
        <span style="color: #d1d5db;">•</span>
        <a href="https://x.com/vextrahq" style="display: inline-block; margin: 0 8px; color: #2f3a3f; text-decoration: none; font-size: 13px;">X (Twitter)</a>
        <span style="color: #d1d5db;">•</span>
        <a href="https://instagram.com/vextrahq" style="display: inline-block; margin: 0 8px; color: #2f3a3f; text-decoration: none; font-size: 13px;">Instagram</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8f8f6; padding: 24px 32px; text-align: center;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">
        Vextra Limited &bull; Est. 2025
      </p>
      <p style="color: #9ca3af; font-size: 11px; margin: 0;">
        <a href="https://vextralimited.com" style="color: #14b8a6; text-decoration: none;">vextralimited.com</a>
      </p>
    </div>
  </div>

  <!-- Unsubscribe -->
  <div style="text-align: center; margin-top: 24px;">
    <p style="color: #9ca3af; font-size: 11px; margin: 0;">
      You received this email because you signed up for the Vextra waitlist.
    </p>
  </div>
</body>
</html>
  `.trim();
}
