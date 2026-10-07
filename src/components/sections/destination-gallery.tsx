
"use client"

import { useState } from "react";
import { mockDestinations } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/modals/booking-modal";

export function DestinationGallery() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#0A0D14] w-full overflow-hidden">
      
      {/* Header Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-foreground leading-[1.1] mb-8">
            Let's Explore<br />the World Together
          </h2>
          <Button onClick={() => setIsModalOpen(true)}>Let's Go</Button>
        </div>
        
        <div className="max-w-[450px]">
          <p className="text-foreground/60 text-sm leading-[1.8] mb-4">
            RoutePin is an online road trip planner on which you can personalize your 100% tailor-made trip to Canada.
          </p>
          <p className="text-foreground/60 text-sm leading-[1.8]">
            Our website is the only existing platform where it is possible to truly plan your entire road trip online, by choosing your destinations and your accommodations, while also having the possibility of adding optional activities.
          </p>
        </div>
      </div>

      {/* Extended Arch Carousel Stage */}
      <div className="relative h-[520px] md:h-[640px] w-full max-w-[1600px] mx-auto flex justify-center items-center px-4">
        {mockDestinations.map((destination, index) => {
          const offset = index - activeIndex;
          
          let positionClasses = "";
          let sizeClasses = "";
          let opacityClasses = "";
          let zIndex = "z-0";

          if (offset === 0) {
            positionClasses = "translate-x-0";
            sizeClasses = "w-[320px] md:w-[400px] h-[500px] md:h-[600px] shadow-2xl scale-100";
            opacityClasses = "opacity-100";
            zIndex = "z-30";
          } else if (offset === -1) {
            positionClasses = "-translate-x-[85%] md:-translate-x-[110%]";
            sizeClasses = "w-[260px] md:w-[330px] h-[420px] md:h-[510px]";
            opacityClasses = "opacity-80";
            zIndex = "z-20";
          } else if (offset === 1) {
            positionClasses = "translate-x-[85%] md:translate-x-[110%]";
            sizeClasses = "w-[260px] md:w-[330px] h-[420px] md:h-[510px]";
            opacityClasses = "opacity-80";
            zIndex = "z-20";
          } else if (offset === -2) {
            positionClasses = "-translate-x-[160%] md:-translate-x-[205%]";
            sizeClasses = "w-[210px] md:w-[270px] h-[350px] md:h-[430px]";
            opacityClasses = "opacity-40";
            zIndex = "z-10";
          } else if (offset === 2) {
            positionClasses = "translate-x-[160%] md:translate-x-[205%]";
            sizeClasses = "w-[210px] md:w-[270px] h-[350px] md:h-[430px]";
            opacityClasses = "opacity-40";
            zIndex = "z-10";
          } else {
            positionClasses = offset < 0 ? "-translate-x-[250%] opacity-0 pointer-events-none" : "translate-x-[250%] opacity-0 pointer-events-none";
            sizeClasses = "w-[180px] h-[300px]";
            zIndex = "z-0";
          }

          return (
            <div
              key={destination.id}
              onClick={() => setActiveIndex(index)}
              style={{ backgroundImage: `url(${destination.image})` }}
              className={`absolute cursor-pointer rounded-2xl overflow-hidden bg-cover bg-center bg-[#1A1D24] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${positionClasses} ${sizeClasses} ${opacityClasses} ${zIndex}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full text-center z-10">
                <h3 className={`font-serif text-2xl md:text-3xl text-white transition-opacity duration-500 drop-shadow-md ${offset === 0 ? 'opacity-100' : 'opacity-60'}`}>
                  {destination.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Pagination / Stepper indicator */}
      <div className="flex justify-center items-center gap-3 mt-16">
        {mockDestinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-sand' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </section>
  );
}