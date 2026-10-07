export function WhyRoutePin() {
  return (
    <section className="py-28 md:py-36 bg-[#0A0D14] w-full border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        
        {/* Section Heading */}
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 tracking-wide">
          Why RoutePin?
        </h2>
        <p className="text-foreground/60 text-sm md:text-base max-w-[650px] mx-auto leading-[1.8] mb-24">
          We meticulously take care of each of our offices and their comfort during each trip. Our company has a fleet of more than a thousand hotels all over the country, where our customers will be provided with special favorable conditions.
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          
          {/* Stat 1: Happy Customers */}
          <div className="flex flex-col items-center">
            {/* Minimal Line Icon Placeholder */}
            <div className="mb-8 text-sand/80">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4">10K+</h3>
            <h4 className="text-xs uppercase tracking-[0.2em] text-sand font-semibold mb-3">Happy Customers</h4>
            <p className="text-foreground/50 text-xs md:text-sm leading-[1.7] max-w-[280px]">
              We have over 10,000 happy travelers who have always used the services of RoutePin.
            </p>
          </div>

          {/* Stat 2: Comfortable Vans */}
          <div className="flex flex-col items-center">
            <div className="mb-8 text-sand/80">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4">247</h3>
            <h4 className="text-xs uppercase tracking-[0.2em] text-sand font-semibold mb-3">Comfortable Vans</h4>
            <p className="text-foreground/50 text-xs md:text-sm leading-[1.7] max-w-[280px]">
              Our vans are equipped with all the necessary amenities for a comfortable journey.
            </p>
          </div>

          {/* Stat 3: Completed Tours */}
          <div className="flex flex-col items-center">
            <div className="mb-8 text-sand/80">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4">3860</h3>
            <h4 className="text-xs uppercase tracking-[0.2em] text-sand font-semibold mb-3">Completed Tours</h4>
            <p className="text-foreground/50 text-xs md:text-sm leading-[1.7] max-w-[280px]">
              We have already extended tours across Canada in 48 states and more than 460 provinces.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}