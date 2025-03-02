
import { useEffect, useRef } from 'react';

const NewsletterSubscribe = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only process messages from the Substack domain
      if (event.origin.includes('substack.com') && iframeRef.current) {
        // If Substack sends a resize message, adjust the iframe height
        if (event.data?.type === 'resize' && typeof event.data.height === 'number') {
          iframeRef.current.style.height = `${event.data.height}px`;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section id="newsletter" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights on customer experience, leadership, and growth strategies for Series-A startups.
          </p>
        </div>
        
        <div className="mx-auto max-w-xl bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden">
          <iframe 
            ref={iframeRef}
            src="https://tomaswilliamsa.substack.com/embed" 
            width="100%" 
            height="150" 
            style={{ border: '1px solid #EEE', background: 'white' }} 
            frameBorder="0" 
            scrolling="no"
            title="Tomas Williams Newsletter Subscription"
            className="w-full dark:border-gray-600"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
