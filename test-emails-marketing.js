#!/usr/bin/env node
/**
 * Email Testing Suite for Havenly Marketing
 * Tests email sending capabilities via contact forms, newsletters, and transactional emails
 * 
 * Usage: node test-emails-marketing.js [recipient_email]
 */

const https = require('https');
const crypto = require('crypto');

const recipient = process.argv[2] || 'test@havenly.local';
const RESEND_API_KEY = process.env.RESEND_API_KEY || 'test-key';
const USE_MOCK = !process.env.RESEND_API_KEY;

console.log(`\n📧 HAVENLY MARKETING - EMAIL TESTING SUITE`);
console.log(`Recipient: ${recipient}`);
console.log(`Mode: ${USE_MOCK ? 'MOCK (logging only)' : 'LIVE (via Resend API)'}\n`);

let successCount = 0;
let failureCount = 0;
const failures = [];

async function sendEmail(subject, html, tag, campaign) {
  if (USE_MOCK) {
    console.log(`  ⏳ [MOCK] ${tag.padEnd(35)} Campaign: ${campaign}`);
    successCount++;
    return true;
  }

  return new Promise((resolve) => {
    const payload = JSON.stringify({
      from: 'Havenly Marketing <marketing@havenly.solutions>',
      to: recipient,
      subject,
      html,
      headers: {
        'X-Campaign': campaign,
        'X-Test': 'true',
      },
    });

    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (res.statusCode === 200 && result.id) {
            console.log(`  ✅ ${tag.padEnd(35)} ID: ${result.id}`);
            successCount++;
          } else {
            console.log(`  ❌ ${tag.padEnd(35)} Status: ${res.statusCode}`);
            failureCount++;
            failures.push({ tag, campaign, status: res.statusCode });
          }
        } catch (e) {
          console.log(`  ❌ ${tag.padEnd(35)} Parse error`);
          failureCount++;
          failures.push({ tag, campaign, status: 'PARSE_ERROR' });
        }
        resolve(true);
      });
    });

    req.on('error', (error) => {
      console.log(`  ❌ ${tag.padEnd(35)} Network error`);
      failureCount++;
      failures.push({ tag, campaign, status: 'NETWORK_ERROR' });
      resolve(true);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  const now = new Date().toLocaleString();
  const testId = crypto.randomUUID();

  console.log('📤 MARKETING CAMPAIGNS\n');

  // Newsletter Signup Confirmation
  await sendEmail(
    'Welcome to Havenly Marketing Updates',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Welcome to Havenly!</h2>
        <p>Thanks for subscribing to our marketing updates.</p>
        <p>You'll receive the latest news, tips, and exclusive offers.</p>
        <a href="https://havenly.solutions" style="background: #0067b8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit our site</a>
      </div>
    `,
    'Newsletter Signup Confirmation',
    'newsletter_signup'
  );

  // Weekly Newsletter
  await sendEmail(
    'Havenly Weekly - Amazing Features & Tips',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Weekly Digest</h2>
        <h3>This Week's Highlights</h3>
        <ul>
          <li>New partnership announcements</li>
          <li>Product updates and improvements</li>
          <li>Community success stories</li>
        </ul>
        <p>Check back next week for more updates!</p>
      </div>
    `,
    'Weekly Newsletter',
    'weekly_digest'
  );

  // Contact Form Response
  await sendEmail(
    'We Received Your Inquiry - Havenly Support',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Thanks for Reaching Out!</h2>
        <p>We received your message and our team will get back to you within 24 hours.</p>
        <p><strong>Ticket ID:</strong> ${testId}</p>
        <p>Your support is important to us.</p>
      </div>
    `,
    'Contact Form Acknowledgment',
    'contact_form'
  );

  // Event Invitation
  await sendEmail(
    'You\'re Invited: Havenly Webinar - Security Best Practices',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Exclusive Webinar Invitation</h2>
        <p>Join us for an exclusive webinar on security best practices.</p>
        <p><strong>Date:</strong> ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        <p><strong>Time:</strong> 2:00 PM UTC</p>
        <a href="https://havenly.solutions/webinar" style="background: #0067b8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Register Now</a>
      </div>
    `,
    'Webinar Invitation',
    'webinar_invite'
  );

  // Promotional Campaign
  await sendEmail(
    '🎉 Limited Time Offer - 50% Off Annual Plans',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f0f0f0;">
        <h2 style="color: #0067b8;">Special Offer - This Week Only!</h2>
        <p>Get 50% off annual plans for new customers.</p>
        <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="font-size: 24px; font-weight: bold; color: #0067b8;">50% OFF</p>
          <p>Valid for new subscriptions only</p>
          <p style="font-size: 12px; color: #666;">Offer expires ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        </div>
        <a href="https://havenly.solutions/pricing" style="background: #0067b8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Claim Offer</a>
      </div>
    `,
    'Promotional Campaign',
    'promo_50off'
  );

  // Educational Content
  await sendEmail(
    'Guide: 10 Tips for Better Safety - Havenly',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>10 Tips for Better Safety</h2>
        <ol>
          <li>Always share your location with trusted contacts</li>
          <li>Keep your phone charged and accessible</li>
          <li>Review security settings regularly</li>
          <li>Use strong, unique passwords</li>
          <li>Enable two-factor authentication</li>
          <li>Keep your app updated</li>
          <li>Report suspicious activity immediately</li>
          <li>Trust your instincts</li>
          <li>Stay connected with your community</li>
          <li>Review emergency contacts regularly</li>
        </ol>
      </div>
    `,
    'Educational Content',
    'guide_10tips'
  );

  // Re-engagement Campaign
  await sendEmail(
    'We Miss You! Come Back to Havenly',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>We Miss You!</h2>
        <p>It's been a while since we've seen you. Here's what's new:</p>
        <ul>
          <li>Enhanced safety features</li>
          <li>Improved user interface</li>
          <li>New integrations and partnerships</li>
        </ul>
        <a href="https://havenly.solutions" style="background: #0067b8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Log In Now</a>
      </div>
    `,
    'Re-engagement Campaign',
    'reengagement'
  );

  // Feedback Request
  await sendEmail(
    'Tell Us What You Think - Havenly Survey',
    `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>We Value Your Feedback</h2>
        <p>Help us improve by taking a quick 5-minute survey.</p>
        <p>Your insights help us build better features.</p>
        <a href="https://havenly.solutions/survey" style="background: #0067b8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Take Survey</a>
      </div>
    `,
    'Feedback Survey',
    'survey_request'
  );

  // Report Summary
  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 EMAIL TEST SUMMARY\n`);
  console.log(`Total Sent: ${successCount + failureCount}`);
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${failureCount}`);

  if (failures.length > 0) {
    console.log(`\nFailures:\n`);
    failures.forEach((f) => {
      console.log(`  - ${f.tag} (Campaign: ${f.campaign}) - Status: ${f.status}`);
    });
  }

  console.log(`\n✓ Marketing email testing completed at ${now}\n`);
  process.exit(failureCount > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
