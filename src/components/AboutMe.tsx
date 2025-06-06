
import CTAButtons from "./CTAButtons";

const AboutMe = () => {
  return (
    <section id="about-me" className="py-24 bg-gray-50 dark:bg-gray-900/50">
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
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mx-auto" style={{ width: '75%' }}>
              <img
                src="/lovable-uploads/1d02e6cb-1334-485e-a513-a7523d419d30.png"
                alt="Tomas Williams"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="animate-slide-in-right space-y-6">
            <h3 className="text-2xl font-bold">Hi, I'm Tomas</h3>
            <p className="text-lg text-muted-foreground">
              I'm a CS leader with over a decade of experience in building and scaling customer-focused teams. My journey in the world of customer success has taken me through various industries and challenges.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm passionate about helping early-stage founders establish customer success as a strategic function within their organizations. My approach combines empathy, data-driven insights, and practical strategies that drive growth.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not advising founders, you might find me exploring new places around the globe, taking photos, swimming with fishes or enjoying a slow start to the day with a walk on the Vancouver seawall.
            </p>
            <div className="pt-4">
              <CTAButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
