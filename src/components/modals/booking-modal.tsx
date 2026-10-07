"use client"

import { useState } from "react";
import { mockDestinations } from "@/lib/mock-data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDestination, setSelectedDestination] = useState(mockDestinations[0]?.name || "Vancouver");
  const [travelers, setTravelers] = useState("2 Travelers");
  const [startDate, setStartDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-[600px] bg-[#0A0D14] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl text-foreground">
        
        {/* Close Button */}
        <button 
          onClick={() => { setSubmitted(false); onClose(); }}
          className="absolute top-6 right-6 text-foreground/40 hover:text-white text-xl transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-sand font-semibold block mb-2">
              Tailor-Made Journey
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Plan Your Route
            </h3>
            <p className="text-foreground/60 text-sm mb-8 leading-[1.7]">
              Customize your Canadian road trip by selecting your primary starting destination, party size, and travel window.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Destination Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2 font-medium">
                  Primary Destination
                </label>
                <select 
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-[#121620] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sand transition-colors"
                >
                  {mockDestinations.map((dest) => (
                    <option key={dest.id} value={dest.name}>
                      {dest.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Travelers & Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2 font-medium">
                    Travelers
                  </label>
                  <select 
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-[#121620] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sand transition-colors"
                  >
                    <option>1 Traveler</option>
                    <option>2 Travelers</option>
                    <option>Family (3-5)</option>
                    <option>Private Group (6+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2 font-medium">
                    Start Date
                  </label>
                  <input 
                    type="date" 
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#121620] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sand transition-colors color-scheme-dark"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-sand text-[#0A0D14] font-medium text-xs uppercase tracking-[0.2em] py-4 rounded-lg hover:bg-sand/90 transition-colors mt-4"
              >
                Confirm Custom Itinerary
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-sand/20 text-sand flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
              ✓
            </div>
            <h3 className="font-serif text-3xl text-white mb-4">
              Itinerary Reserved
            </h3>
            <p className="text-foreground/60 text-sm max-w-[400px] mx-auto leading-[1.8] mb-8">
              Thank you for planning with RoutePin. We have successfully registered your interest for <span className="text-white font-medium">{selectedDestination}</span> for <span className="text-white font-medium">{travelers}</span> starting on <span className="text-white font-medium">{startDate}</span>. Our concierge team will reach out shortly.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-transparent border border-white/20 text-white text-xs uppercase tracking-[0.2em] px-8 py-3 rounded-lg hover:border-sand hover:text-sand transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}