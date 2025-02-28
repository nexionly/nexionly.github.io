
const AboutMe = () => {
  return (
    <section id="about-me" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="chip chip-accent mb-3">About Me</span>
          <h2 className="section-title">The Person Behind the Work</h2>
          <p className="section-subtitle">
            Get to know me beyond the professional expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/8e624975-e3bc-47af-a999-9f9f79ab165f.png"
                alt="Tomas Williams"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="animate-slide-in-right space-y-6">
            <h3 className="text-2xl font-bold">Hi, I'm Tomas</h3>
            <p className="text-lg text-muted-foreground">
              I'm a CX leader with over a decade of experience in building and scaling customer-focused teams. My journey in the world of customer experience has taken me through various industries and challenges.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm passionate about helping Series-A founders establish customer experience as a strategic function within their organizations. My approach combines empathy, data-driven insights, and practical strategies that drive growth.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not advising founders, you might find me exploring new places around the globe, taking photos, swimming with fishes or enjoying a slow start to the day with a walk on the Vancouver seawall.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.linkedin.com/in/tomaswilliamsa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
