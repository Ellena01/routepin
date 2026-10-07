
import { Hero } from "@/components/sections/hero"
import { SplitContent } from "@/components/blocks/split-content"
import { DestinationGallery } from "@/components/sections/destination-gallery"
import { WhyRoutePin } from "@/components/sections/why-routepin"
import { ToursBanner } from "@/components/sections/tours-banner"
import { TravelPlan } from "@/components/sections/travel-plan"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0A0D14]">
      <Hero />
      
      <div className="w-full pt-16 pb-24">
        {/* About Section */}
        <SplitContent 
          eyebrow="About"
          title={<>Become Part of<br/>Two-Week Canada Western Conquest</>}
          description="Fascinating landscapes, national parks with thousand-year-old trees up to the sky, an Indian village with more than 80 totem poles. Climb the mountains, swim in the healing hot springs, spend the night under the starry sky with RoutePin."
          imageUrl="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop"
          imagePosition="right"
        />

        {/* Travel Map Section */}
        <SplitContent 
          eyebrow="Travel Map"
          title="Explore & Enjoy"
          description="From Vancouver to Calgary, 2 provinces, 7 cities, 8 stops, 2017 km. Visit the highest peak of the Canadian Rocky Mountains, enjoy the beauty of the Sunwapta Falls and Peyto Lake, meet the residents of Banff, a small mountain town at an elevation of 1,380 meters."
          imageUrl="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
          imagePosition="left"
        />

        {/* Transport Section */}
        <SplitContent 
          eyebrow="Transport"
          title="How to Move Around?"
          description="RoutePin provides you with comfortable vans with all the amenities inside. At your disposal: consumer electronics, bathroom, TV, two or more beds, air conditioning, mini fridge, sink and stove, solar-powered electricity."
          imageUrl="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop"
          imagePosition="right"
        />
      </div>

      <DestinationGallery />
      <WhyRoutePin />
      <ToursBanner />
      <TravelPlan />
    </main>
  )
}