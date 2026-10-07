

export function TravelPlan() {
  const stepsRow1 = [
    { number: "1", label: "Vancouver" },
    { number: "2", label: "Victoria" },
    { number: "3", label: "Pacific Rim" },
    { number: "4", label: "Calgary" },
  ];

  const stepsRow2 = [
    { number: "5", label: "Whistler" },
    { number: "6", label: "Banff" },
    { number: "7", label: "Jasper" },
    { number: "8", label: "Tablelands Provincial Park" },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#0A0D14] w-full border-t border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        
        {/* Section Heading */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-foreground mb-24 tracking-wide">
          RoutePin Travel Plan
        </h2>

        {/* Timeline Container */}
        <div className="flex flex-col gap-20 max-w-[1000px] mx-auto relative">
          
          {/* Horizontal Connecting Line for Row 1 */}
          <div className="hidden md:block absolute top-[24px] left-[12%] right-[12%] h-[1px] bg-sand/30 z-0" />

          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stepsRow1.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative group">
                {/* Node Circle */}
                <div className="w-12 h-12 rounded-full border border-sand/40 bg-[#0A0D14] flex items-center justify-center font-serif text-sand text-lg mb-4 z-10 shadow-lg group-hover:border-sand group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                {/* Label */}
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium">
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Horizontal Connecting Line for Row 2 */}
          <div className="hidden md:block absolute top-[210px] left-[12%] right-[12%] h-[1px] bg-sand/30 z-0" />

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stepsRow2.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative group">
                {/* Node Circle */}
                <div className="w-12 h-12 rounded-full border border-sand/40 bg-[#0A0D14] flex items-center justify-center font-serif text-sand text-lg mb-4 z-10 shadow-lg group-hover:border-sand group-hover:scale-110 transition-all duration-300">
                  {step.number}
                </div>
                {/* Label */}
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium">
                  {step.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}