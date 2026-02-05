import Image from "next/image";

const CLOVER_DECOR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%88%D0%B43-dvaSw4hJk1HL2qy5uCr3CyQt3HyzHA.png";

type HighlightBannerProps = {
  highlight?: { 
    title?: string; 
    badge?: string; 
    description?: string; 
    image?: string 
  };
};

export function HighlightBanner({ highlight }: HighlightBannerProps) {
  if (!highlight || !highlight.title) {
    return null;
  }

  return (
    <article className="md-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="pointer-events-none absolute -right-8 -top-8 opacity-[0.03] md:-right-4 md:-top-4" aria-hidden="true">
        <Image
          src={CLOVER_DECOR}
          alt=""
          width={180}
          height={180}
          className="h-32 w-32 md:h-40 md:w-40"
        />
      </div>

      <div className="relative z-10 p-5 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Content */}
          <div className="flex-1">
            {/* Badge */}
            {highlight.badge && (
              <span className="md-badge md-badge-turq">
                {highlight.badge}
              </span>
            )}
            
            {/* Title */}
            <h2 className="md-headline-section mt-4 text-balance text-[var(--md-text-primary)]">
              {highlight.title}
            </h2>
            
            {/* Description */}
            {highlight.description && (
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--md-text-secondary)] md:text-base md:leading-relaxed">
                {highlight.description}
              </p>
            )}
          </div>

          {/* Optional visual indicator */}
          <div className="mt-6 flex shrink-0 items-center justify-center md:mt-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--md-dragons-turq)]/30 bg-[var(--md-dragons-turq)]/10 md:h-20 md:w-20">
              <svg 
                className="h-8 w-8 text-[var(--md-dragons-turq)] md:h-10 md:w-10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
