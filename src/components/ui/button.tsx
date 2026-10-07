import * as React from "react"

export function Button({ 
  children, 
  className = "", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center bg-sand text-midnight px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-sand-hover transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-midnight ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}