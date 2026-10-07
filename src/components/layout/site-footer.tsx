
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#070A0F] text-foreground/60 py-20 border-t border-white/10 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 items-start">
        
        {/* Column 1: Stay Informed Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold mb-6">
            Stay Informed
          </h4>
          <div className="flex items-center border-b border-white/20 pb-2 max-w-[400px]">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-none outline-none text-foreground text-sm w-full placeholder:text-foreground/30"
            />
            <button className="text-sand text-lg hover:translate-x-1 transition-transform">
              ⟶
            </button>
          </div>
        </div>

        {/* Column 2: Information Links */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold mb-6">
            Information
          </h4>
          <ul className="space-y-4 text-xs tracking-wider">
            <li><Link href="#about" className="hover:text-sand transition-colors">About</Link></li>
            <li><Link href="#hotels" className="hover:text-sand transition-colors">Hotels</Link></li>
            <li><Link href="#price" className="hover:text-sand transition-colors">Price</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-foreground font-semibold mb-6">
            Contact
          </h4>
          <ul className="space-y-4 text-xs tracking-wider">
            <li><span className="text-foreground/40">Phone:</span> +1 (800) 555-0199</li>
            <li><span className="text-foreground/40">Email:</span> routepin@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright & Brand Bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[11px] text-foreground/40 tracking-wider">
          © 2026 RoutePin Agency. All rights reserved.
        </p>
        <span className="font-serif text-2xl tracking-[0.3em] text-foreground">
          ROUTE&bull;PIN
        </span>
      </div>
    </footer>
  );
}
