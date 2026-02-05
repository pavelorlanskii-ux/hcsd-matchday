import Image from "next/image";

const STAR_DECOR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%88%D0%B42-mj9Nys3ZnuwlzOz5EhOVtKVzjgybUr.png";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  showDecor?: boolean;
};

export function SectionHeader({ title, subtitle, showDecor = true }: SectionHeaderProps) {
  return (
    <header className="relative">
      {/* Optional decorative star */}
      {showDecor && (
        <div className="pointer-events-none absolute -left-2 -top-2 opacity-[0.06] md:-left-4 md:-top-4" aria-hidden="true">
          <Image
            src={STAR_DECOR}
            alt=""
            width={40}
            height={40}
            className="h-6 w-6 md:h-8 md:w-8"
          />
        </div>
      )}
      
      <div className="md-section-line">
        <h2 className="md-headline-section text-balance text-[var(--md-text-primary)]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--md-text-secondary)] md:mt-3 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
