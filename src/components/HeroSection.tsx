import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  partnerName: string;
  children: ReactNode;
};

export function HeroSection({ title, subtitle, partnerName, children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-8 md:pt-14 md:pb-10 lg:pt-20 lg:pb-12" id="tickets">
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {/* Text Block */}
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Partner Badge - prominent but not overwhelming */}
            <div className="mb-5 md:mb-6">
              <span className="md-badge md-badge-partner">
                <svg 
                  className="h-3 w-3" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                {"Партнёр матча: " + partnerName}
              </span>
            </div>

            {/* Headline with proper hierarchy */}
            <h1 className="md-headline-hero text-[var(--md-text-primary)] lg:whitespace-nowrap">
              {title}
            </h1>
            
            {/* Subtitle with better spacing */}
            <p className="md-subtitle mt-5 max-w-xl text-pretty md:mt-6">
              {subtitle}
            </p>
          </div>

          {/* Match Card - central element */}
          <div className="mt-10 md:mt-12 lg:mt-14">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
