import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: April 1, 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Introduction</h2>
            <p className="text-muted-foreground">
              Tomas Williams ("we," "us," or "our") operates the website tomaswilliams.com. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, and any details you provide when booking a call or contacting us.</li>
              <li><strong>Usage Data:</strong> Anonymous website analytics data collected through Umami Analytics, including pages visited, referral sources, and general geographic region.</li>
              <li><strong>Newsletter Data:</strong> Email address when you subscribe to our newsletter via ConvertKit.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To provide and improve our consulting services</li>
              <li>To schedule and manage appointments via Cal.com</li>
              <li>To send newsletter updates and relevant content (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
            <p className="text-muted-foreground">We use the following third-party services:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Umami Analytics:</strong> Privacy-focused, cookie-free website analytics. No personal data is collected.</li>
              <li><strong>Cal.com:</strong> Appointment scheduling. Subject to Cal.com's privacy policy.</li>
              <li><strong>ConvertKit:</strong> Email newsletter management. Subject to ConvertKit's privacy policy.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies</h2>
            <p className="text-muted-foreground">
              Our website uses minimal cookies. Umami Analytics is cookie-free and does not track personal data. Essential cookies may be used for basic website functionality such as theme preferences.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Data Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. We may share information only with the third-party service providers listed above, solely to deliver our services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. You may request deletion of your data at any time.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">8. Your Rights</h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Request a copy of the data we hold about you</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us via{" "}
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

export default Privacy;
