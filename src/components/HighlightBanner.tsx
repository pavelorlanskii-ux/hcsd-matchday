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
          {/* Mobile header row: badge (left) + icon (right) on one line */}
          <div className="flex items-center justify-between md:hidden">
            {highlight.badge && (
              <span className="md-badge md-badge-turq">
                {highlight.badge}
              </span>
            )}
            <div
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--md-dragons-turq)]/30 bg-[var(--md-dragons-turq)]/10"
              aria-hidden="true"
            >
              <Image
                src="/ornaments/dragons.png"
                alt=""
                fill
                sizes="48px"
                unoptimized
                className="object-contain drop-shadow [filter:brightness(0)_invert(1)]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Badge - only rendered on md+ (mobile badge is in the header row above) */}
            <div className="hidden md:block">
              {highlight.badge && (
                <span className="md-badge md-badge-turq">
                  {highlight.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="md-headline-section mt-4 text-balance text-[var(--md-text-primary)]">
              {highlight.title}
            </h2>

            {/* Description */}
            {highlight.description && (
              <p className="md-subtitle mt-4 max-w-2xl text-pretty">
                {highlight.description}
              </p>
            )}
          </div>

          {/* Dragon icon - hidden on mobile (shown in header row), visible on md+ */}
          <div className="hidden shrink-0 items-center justify-center md:flex">
            <div
              className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[var(--md-dragons-turq)]/30 bg-[var(--md-dragons-turq)]/10"
              aria-hidden="true"
            >
              <Image
                src="/ornaments/dragons.png"
                alt=""
                fill
                sizes="80px"
                unoptimized
                className="object-contain drop-shadow [filter:brightness(0)_invert(1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
