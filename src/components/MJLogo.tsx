interface MJLogoProps {
  size?: number;
  className?: string;
}

/**
 * Inline SVG logo — renders identically at any size, no image request needed.
 * Uses the same design as /public/icon.svg.
 */
export default function MJLogo({ size = 40, className = "" }: MJLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      aria-label="MJ Logo"
      role="img"
    >
      <defs>
        <linearGradient id="mj-border" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#2563eb"/>
          <stop offset="48%"  stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#14b8a6"/>
        </linearGradient>
        <linearGradient id="mj-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#080c18"/>
          <stop offset="100%" stopColor="#0c1426"/>
        </linearGradient>
        <linearGradient id="mj-text" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#60a5fa"/>
          <stop offset="50%"  stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#2dd4bf"/>
        </linearGradient>
        <linearGradient id="mj-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#14b8a6"/>
        </linearGradient>
        <filter id="mj-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur"/>
          <feFlood floodColor="#2563eb" floodOpacity="0.55" result="color"/>
          <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="mj-shine" cx="30%" cy="20%" r="60%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.06"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Gradient border */}
      <rect width="512" height="512" rx="104" fill="url(#mj-border)"/>

      {/* Dark background */}
      <rect x="3" y="3" width="506" height="506" rx="101" fill="url(#mj-bg)"/>

      {/* Inner shine */}
      <rect x="3" y="3" width="506" height="506" rx="101" fill="url(#mj-shine)"/>

      {/* Ambient glow top-left */}
      <circle cx="90" cy="90" r="160" fill="#2563eb" fillOpacity="0.09"/>

      {/* Ambient glow bottom-right */}
      <circle cx="422" cy="422" r="140" fill="#14b8a6" fillOpacity="0.07"/>

      {/* Decorative dots */}
      <circle cx="405" cy="105" r="5.5" fill="#3b82f6" fillOpacity="0.55"/>
      <circle cx="425" cy="105" r="3.5" fill="#8b5cf6" fillOpacity="0.45"/>
      <circle cx="440" cy="105" r="2.5" fill="#2dd4bf" fillOpacity="0.35"/>
      <circle cx="105" cy="405" r="4"   fill="#2dd4bf" fillOpacity="0.30"/>

      {/* Glow bloom */}
      <text
        x="258" y="342"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="248"
        letterSpacing="-14"
        textAnchor="middle"
        fill="#2563eb"
        fillOpacity="0.28"
        filter="url(#mj-glow)"
      >MJ</text>

      {/* Main MJ text */}
      <text
        x="258" y="342"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="248"
        letterSpacing="-14"
        textAnchor="middle"
        fill="url(#mj-text)"
      >MJ</text>

      {/* Accent bar */}
      <rect x="158" y="364" width="196" height="6" rx="3" fill="url(#mj-bar)" fillOpacity="0.75"/>

      {/* Centre dot */}
      <circle cx="256" cy="387" r="4" fill="url(#mj-bar)" fillOpacity="0.50"/>
    </svg>
  );
}
