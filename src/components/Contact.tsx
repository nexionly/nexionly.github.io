
import { useState } from "react";
import { Mail, Phone, Calendar, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <span className="chip chip-accent mb-3">Get in Touch</span>
            <h2 className="section-title">Ready to Transform Your Customer Experience?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how I can help your team create exceptional customer experiences that drive growth and loyalty.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-brand-green-light p-3 rounded-full mr-4">
                  <Mail className="text-brand-green h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@mattegreenmedia.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-brand-blue-light p-3 rounded-full mr-4">
                  <Phone className="text-brand-blue h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-brand-pink-light p-3 rounded-full mr-4">
                  <Calendar className="text-brand-pink h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Schedule</p>
                  <p className="font-medium">Book a 30-minute consultation</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Messaging Options</h3>
              <div className="space-y-3">
                <p className="flex items-center text-sm">
                  <span className="chip chip-primary mr-2">CTA</span>
                  Book a Call
                </p>
                <p className="flex items-center text-sm">
                  <span className="chip chip-secondary mr-2">Newsletter</span>
                  Subscribe to CX insights
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-medium block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink/60 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink/60 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="company" className="text-sm font-medium block">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink/60 transition-all"
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-medium block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink/60 transition-all"
                    placeholder="Tell me about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
