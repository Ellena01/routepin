import Link from "next/link"

export function ToursBanner() {
  return (
    <section className="relative py-32 md:py-44 w-full overflow-hidden flex items-center justify-center">
      {/* Background Panoramic Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-[#0A0D14]/80 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-foreground mb-6 leading-[1.2]">
          The RoutePin Has Other Tours as Well
        </h2>
        
        <p className="text-foreground/70 text-sm md:text-base leading-[1.8] mb-12 max-w-[650px] mx-auto">
          Choose from our vast collection of unique adventure routes across Canada. Whether you are looking for hidden alpine trails or coastal highway drives, RoutePin has what it takes for you.
        </p>

        <Link 
          href="#tours" 
          className="inline-block bg-sand text-[#0A0D14] font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-sand/90 transition-colors"
        >
          See the Tours
        </Link>
      </div>
    </section>
  )
}