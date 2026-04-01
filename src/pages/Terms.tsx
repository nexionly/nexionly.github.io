import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>
          <p className="text-muted-foreground mb-6">Last updated: April 1, 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using tomaswilliams.com ("the Website"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. Services</h2>
            <p className="text-muted-foreground">
              Tomas Williams provides Customer Success consultancy and advisory services for early-stage founders and scale-up leaders. Services include strategic consulting, CS infrastructure implementation, coaching, and related advisory services as described on the Website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on this Website, including text, graphics, logos, frameworks, methodologies, and templates, is the property of Tomas Williams and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Use of the Website</h2>
            <p className="text-muted-foreground">You agree to use the Website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Infringe on the rights of others</li>
              <li>Interfere with or disrupt the Website's operation</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Use the Website to transmit harmful or malicious content</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Consulting Services Disclaimer</h2>
            <p className="text-muted-foreground">
              The information and advice provided through our consulting services are based on professional experience and best practices. However, results may vary depending on individual circumstances. We do not guarantee specific business outcomes or financial results.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, Tomas Williams shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. External Links</h2>
            <p className="text-muted-foreground">
              The Website may contain links to third-party websites (including Cal.com, LinkedIn, and Substack). We are not responsible for the content or practices of these external sites.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">8. Modifications</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website constitutes acceptance of any modified terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms of Use shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through good-faith negotiation.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">10. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Use, please contact us via{" "}
              <a href="https://www.linkedin.com/in/tomaswilliamsa/" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">
                LinkedIn
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
