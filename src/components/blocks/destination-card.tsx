import { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
  offset: number;
  onClick: () => void;
}

export function DestinationCard({ destination, offset, onClick }: DestinationCardProps) {
  // Determine if this specific card is the center, or adjacent
  const isCenter = offset === 0;
  const isOffset1 = Math.abs(offset) === 1;

  // Calculate 3D positioning based on distance from the center
  let transformClasses = "translate-x-0 scale-100 z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"; 
  
  if (offset === -1) transformClasses = "-translate-x-[65%] scale-[0.85] z-20";
  if (offset === 1)  transformClasses = "translate-x-[65%] scale-[0.85] z-20";
  if (offset === -2) transformClasses = "-translate-x-[130%] scale-[0.70] z-10";
  if (offset === 2)  transformClasses = "translate-x-[130%] scale-[0.70] z-10";

  // Cards further back get darker to simulate shadow depth
  const overlayOpacity = isCenter ? "opacity-0" : isOffset1 ? "opacity-50" : "opacity-80";

  return (
    <div 
      onClick={onClick}
      className={`absolute w-[280px] md:w-[380px] h-[380px] md:h-[550px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden rounded-sm ${transformClasses}`}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* 3D Depth Shadow Overlay */}
      <div className={`absolute inset-0 bg-[#0A0D14] transition-opacity duration-700 ${overlayOpacity}`} />

      {/* Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/90 via-transparent to-transparent" />
      
      {/* Text Label */}
      <div className="absolute bottom-0 left-0 p-8 w-full text-center">
        <h3 className={`font-serif text-2xl md:text-3xl text-white transition-opacity duration-700 ${isCenter ? 'opacity-100' : 'opacity-40'}`}>
          {destination.name}
        </h3>
      </div>
    </div>
  );
}
