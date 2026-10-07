import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
          alt="Canada Road Trip"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient to ensure the white text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/40 to-midnight/95" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mt-16 md:mt-0">
        
        {/* Eyebrow text with lines */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 md:w-16 bg-sand/60" aria-hidden="true" />
          <span className="uppercase text-xs md:text-sm tracking-[0.2em] text-sand font-medium">
            Join us on the big Canada road trip
          </span>
          <div className="h-[1px] w-8 md:w-16 bg-sand/60" aria-hidden="true" />
        </div>

        {/* Large Serif Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-10 text-foreground drop-shadow-lg">
          It's Great Time<br />to Start Living Now
        </h1>

        <Button>Know More</Button>
      </div>

      {/* Desktop Left Sidebar: Socials (Hidden on Mobile) */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-20">
        <span className="text-xs tracking-widest uppercase origin-left -rotate-90 text-foreground/80 mb-12">
          Follow us
        </span>
        {/* Simple mock social icons */}
        <div className="w-4 h-4 border border-foreground/80 rounded-sm hover:border-sand cursor-pointer transition-colors" />
        <div className="w-4 h-4 border border-foreground/80 rounded-full hover:border-sand cursor-pointer transition-colors" />
      </div>

      {/* Desktop Right Sidebar: Indicators (Hidden on Mobile) */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
        <span className="text-xs tracking-widest uppercase text-foreground/80 mb-2">
          Start
        </span>
        <button className="text-xs font-medium tracking-wider text-sand">01</button>
        <button className="text-xs font-medium tracking-wider text-foreground/40 hover:text-foreground/80 transition-colors">02</button>
        <button className="text-xs font-medium tracking-wider text-foreground/40 hover:text-foreground/80 transition-colors">03</button>
      </div>
    </section>
  )
}