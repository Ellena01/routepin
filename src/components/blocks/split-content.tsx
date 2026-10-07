
import * as React from "react"
import Link from "next/link"

interface SplitContentProps {
  eyebrow: string;
  title: React.ReactNode; 
  description: string;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
}

export function SplitContent({
  eyebrow,
  title,
  description,
  imageUrl,
  imagePosition = 'right',
}: SplitContentProps) {
  
  const isRight = imagePosition === 'right';

  return (
    <section className="py-24 md:py-36 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      
      {/* Text Container: Exactly 40% width */}
      <div className={`w-full md:w-[40%] px-6 md:px-12 lg:px-24 flex flex-col justify-center ${isRight ? 'order-1' : 'order-1 md:order-2'}`}>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-sand/60" aria-hidden="true" />
          <span className="uppercase text-[10px] tracking-[0.3em] text-foreground/50 font-semibold">
            {eyebrow}
          </span>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-foreground leading-[1.1] mb-8">
          {title}
        </h2>
        
        <p className="text-foreground/60 text-sm leading-[1.8] mb-12 max-w-[400px]">
          {description}
        </p>
        
        <Link href="#read-more" className="text-[11px] tracking-[0.2em] lowercase hover:text-sand transition-colors flex items-center gap-6 w-max group">
          read more 
          <span className="text-sand/70 text-xl leading-none font-light group-hover:translate-x-3 transition-transform duration-300">
            ⟶
          </span>
        </Link>
      </div>

      {/* Image Container: Exactly 60% width with perfect curves */}
      <div className={`w-full md:w-[60%] h-[400px] md:h-[650px] relative ${isRight ? 'order-2 pr-0' : 'order-2 md:order-1 pl-0'}`}>
        <img
          src={imageUrl}
          alt={eyebrow}
          className={`w-full h-full object-cover shadow-2xl 
            ${isRight 
              ? 'rounded-l-[150px] md:rounded-l-[300px] rounded-r-none' 
              : 'rounded-r-[150px] md:rounded-r-[300px] rounded-l-none'
            }`}
        />
      </div>
      
    </section>
  )
}