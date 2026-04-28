export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-black">
      <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Data We Collect</h2>
        <p className="mb-4">
          We collect personal identification information (Name, email address, phone number, location data during emergencies) when you register or use the Havenly Solutions Safety Hub.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why We Collect It</h2>
        <p className="mb-4">
          Data is collected explicitly for providing emergency safety services, coordinating with community responders, and logging auditable evidence for incident resolution.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p className="mb-4">
          User data is retained as long as the account is active. Upon account deletion, PII is anonymised. However, evidence associated with incidents is retained to preserve legal integrity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Request Deletion</h2>
        <p className="mb-4">
          You may request data deletion completely by visiting our <a href="/data-deletion" className="text-blue-600 underline">Data Deletion Request</a> page or by contacting support. Your account will be soft-deleted and anonymised in compliance with POPIA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Breach Notification Procedure</h2>
        <p className="mb-4">
          In compliance with POPIA, in the unlikely event of a data breach, Havenly Solutions will notify the Information Regulator and all affected users within 72 hours of becoming aware of the breach, outlining the nature of the breach and remediation steps taken.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-4">
          For privacy concerns or inquiries, contact our data protection officer at: <a href="mailto:privacy@havenly.solutions" className="text-blue-600 underline">privacy@havenly.solutions</a>
        </p>
      </section>
    </div>
  );
}
