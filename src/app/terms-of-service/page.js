import { Card, CardContent } from '../../components/ui/Card';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>

          <Card>
            <CardContent className="prose prose-gray max-w-none p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the BGC Foundation website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your relationship with BGC Foundation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About BGC Foundation</h2>
                <p className="text-gray-700 leading-relaxed">
                  BGC Foundation is a registered non-profit organization dedicated to providing healthcare programs to rural communities in Karnataka, India. Our mission is to bridge the gap between specialized medical care and underserved populations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Our Website</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Uses</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Access information about our programs and services</li>
                  <li>Make donations to support our healthcare initiatives</li>
                  <li>Apply for volunteer opportunities</li>
                  <li>Contact us for partnership inquiries</li>
                  <li>Subscribe to our newsletter and updates</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Uses</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Any unlawful purpose or activity</li>
                  <li>Interfering with website security features</li>
                  <li>Transmitting viruses or malicious code</li>
                  <li>Attempting unauthorized access to our systems</li>
                  <li>Misrepresenting your identity or affiliation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Programs</h2>
                <p className="text-gray-700 mb-4">
                  Our healthcare programs are provided as community service initiatives. By participating in our programs:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>You acknowledge that our services complement but do not replace regular medical care</li>
                  <li>You agree to provide accurate medical history and information</li>
                  <li>You understand that all medical advice should be followed up with your regular physician</li>
                  <li>You consent to the collection of necessary medical information for program delivery</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Donations and Financial Contributions</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>All donations are voluntary and non-refundable</li>
                  <li>Donation receipts will be provided for tax purposes as applicable</li>
                  <li>We reserve the right to use donations where they are most needed</li>
                  <li>Donor information will be kept confidential unless you consent otherwise</li>
                  <li>We comply with all applicable fundraising regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700">
                  The content, design, and materials on this website are owned by BGC Foundation and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
                <p className="text-gray-700">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using our services, you consent to our privacy practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Medical Disclaimer</h3>
                  <p className="text-gray-700">
                    Our programs provide general health information and screening services. They are not a substitute for professional medical diagnosis, treatment, or advice. Always seek the advice of qualified healthcare providers.
                  </p>
                </div>
                <p className="text-gray-700">
                  Our website and services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted access or error-free operation of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700">
                  BGC Foundation shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or participation in our programs, except as required by applicable law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms of Service are governed by the laws of India and the state of Karnataka. Any disputes will be resolved in the courts of Bangalore, Karnataka.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
                    <strong>BGC Foundation</strong><br />
                    Email: legal@bgcfoundation.org<br />
                    Phone: +91-XXX-XXX-XXXX<br />
                    Address: Bangalore Gastro Centre (BGC) Hospitals, Bengaluru, Karnataka
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}