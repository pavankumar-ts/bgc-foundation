import { Card, CardContent } from '../../components/ui/Card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>

          <Card>
            <CardContent className="prose prose-gray max-w-none p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  BGC Foundation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our healthcare programs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Name, contact information, and demographic details</li>
                  <li>Medical history and health information (with explicit consent)</li>
                  <li>Donation and payment information</li>
                  <li>Volunteer and partnership inquiries</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Website usage data and analytics</li>
                  <li>Device and browser information</li>
                  <li>IP address and location data (if permitted)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide healthcare programs and services</li>
                  <li>Process donations and maintain donor records</li>
                  <li>Send updates about our programs and impact</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Protect against fraud and ensure security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only in these circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>With your explicit consent</li>
                  <li>With healthcare partners for program delivery</li>
                  <li>With service providers who assist our operations</li>
                  <li>When required by law or legal process</li>
                  <li>To protect rights, property, or safety</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Information Protection</h2>
                <p className="text-gray-700">
                  We handle all medical information in accordance with applicable healthcare privacy laws and regulations. Medical data is encrypted, stored securely, and accessed only by authorized healthcare professionals involved in your care.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700">
                  For questions about this Privacy Policy or to exercise your rights, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
                    <strong>BGC Foundation</strong><br />
                    Email: privacy@bgcfoundation.org<br />
                    Phone: +91-XXX-XXX-XXXX<br />
                    Address: Bangalore Gastro Centre (BGC) Hospitals, Bengaluru, Karnataka
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}