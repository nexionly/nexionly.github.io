
const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Matte Green"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-pink text-white p-6 rounded-2xl shadow-lg">
                <p className="font-bold text-xl">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <span className="chip chip-accent mb-3">About Me</span>
            <h2 className="section-title">
              Transforming Customer Success for Scale-Up Success
            </h2>
            <p className="mb-6 text-muted-foreground">
              With over a decade of experience in building and scaling CS teams, I specialize in helping early-stage founders transition from founder-led support to strategic, customer-focused operations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-lg mb-2">Strategic CS Leadership</h3>
                <p className="text-muted-foreground">
                  I guide founders in building proactive CS teams that drive growth and customer loyalty.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-lg mb-2">B2B SaaS Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized experience with B2B SaaS companies, particularly in the early growth phase.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-lg mb-2">Data-Driven Approach</h3>
                <p className="text-muted-foreground">
                  Turn customer insights into actionable strategies that scale with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
