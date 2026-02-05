import type { ReactNode } from "react";
import Image from "next/image";

// Decorative assets
const DRAGON_DECOR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%88%D0%B45-N70vGIGcYsRhoMzoxUNDvBpzKo5fmd.png";
const KNOT_DECOR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%88%D0%B44-i6HOPbV1q2QQQNxjBK0DxtMivUbk2A.png";
const STAR_DECOR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%88%D0%B42-mj9Nys3ZnuwlzOz5EhOVtKVzjgybUr.png";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  partnerName: string;
  children: ReactNode;
};

export function HeroSection({ title, subtitle, partnerName, children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-10" id="tickets">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Dragon - right side */}
        <Image
          src={DRAGON_DECOR}
          alt=""
          width={500}
          height={350}
          className="md-decor-dragon absolute -right-20 top-[10%] w-[400px] opacity-[0.025] md:w-[500px] lg:w-[600px]"
        />
        {/* Knot - left bottom */}
        <Image
          src={KNOT_DECOR}
          alt=""
          width={180}
          height={180}
          className="md-decor-knot absolute -left-10 bottom-[15%] hidden w-[150px] opacity-[0.04] md:block lg:w-[180px]"
        />
        {/* Star accents */}
        <Image
          src={STAR_DECOR}
          alt=""
          width={60}
          height={60}
          className="md-decor-star absolute left-[15%] top-[20%] w-[40px] opacity-[0.06] lg:w-[60px]"
        />
        <Image
          src={STAR_DECOR}
          alt=""
          width={40}
          height={40}
          className="md-decor-star absolute right-[20%] bottom-[30%] hidden w-[30px] opacity-[0.05] md:block"
        />
      </div>

      {/* Content */}
      <div className="md-container relative z-10">
        <div className="flex flex-col">
          {/* Text Block */}
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Partner Badge - prominent but not overwhelming */}
            <div className="mb-4 md:mb-5">
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
            <h1 className="md-headline-hero text-balance text-[var(--md-text-primary)]">
              {title}
            </h1>
            
            {/* Subtitle with better spacing */}
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-[var(--md-text-secondary)] md:mt-5 md:text-base md:leading-relaxed lg:text-lg lg:leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Match Card - central element */}
          <div className="mt-8 md:mt-10 lg:mt-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
