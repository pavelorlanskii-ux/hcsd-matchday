"use client";

import Image from "next/image";

const BETBOOM_LOGO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-Uo5FobMRzYlKViTzKaOGGScifD6wZn.svg";

type Partner = {
  name: string;
  url: string;
  logoText?: string;
};

type Odds = {
  p1?: number;
  x?: number;
  p2?: number;
  disclaimer?: string;
  cta?: { label?: string; href?: string };
  ctaLabel?: string;
  ctaHref?: string;
};

function formatOdd(v: unknown) {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n.toFixed(2) : "--";
}

function OddPill({ 
  label, 
  value, 
  href 
}: { 
  label: string; 
  value: unknown; 
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex min-w-[72px] flex-col items-center justify-center rounded-lg border border-[var(--md-border)] bg-[var(--md-surface-2)]/80 px-3 py-2.5 transition-all hover:border-[var(--md-partner-accent)]/40 hover:bg-[var(--md-surface-3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-partner-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface-1)] active:scale-[0.97] sm:min-w-[80px] sm:px-4 sm:py-3"
    >
      <span className="md-meta text-[var(--md-text-muted)]">{label}</span>
      <span className="md-data mt-1 text-[var(--md-partner-accent)] transition-colors group-hover:text-[var(--md-partner-accent-light)]">
        {formatOdd(value)}
      </span>
    </a>
  );
}

function StarIcon() {
  return (
    <svg 
      className="h-3 w-3" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

export function PartnerOddsBar({
  partner,
  odds,
  className,
}: {
  partner: Partner;
  odds?: Odds;
  className?: string;
}) {
  const ctaLabel = odds?.cta?.label ?? odds?.ctaLabel ?? "Перейти на сайт BetBoom";
  const ctaHref = odds?.cta?.href ?? odds?.ctaHref ?? partner?.url ?? "#";
  const disclaimer = odds?.disclaimer ?? "Информация носит справочный характер";

  return (
    <div className={`md-card-featured overflow-hidden ${className || ""}`}>
      {/* Featured badge header */}
      <div className="flex items-center justify-between border-b border-[var(--md-partner-accent)]/15 bg-gradient-to-r from-[var(--md-partner-accent)]/8 to-transparent px-5 py-3 sm:px-6">
        <span className="md-badge md-badge-partner">
          <StarIcon />
          Партнёр матча
        </span>
        <span className="md-meta text-[var(--md-text-muted)]">Ставки на спорт</span>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 p-4 sm:p-5 lg:hidden">
        {/* Partner Info */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--md-partner-accent)]/10">
            <Image
              src={BETBOOM_LOGO}
              alt="BetBoom"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
          </div>
          <div>
            <div className="md-meta">Официальный партнёр</div>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="md-title-card mt-1 block text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-partner-accent)]"
            >
              {partner.logoText || partner.name}
            </a>
          </div>
        </div>

        {/* Odds Pills */}
        <div>
          <div className="md-label mb-2">Коэффициенты на матч</div>
          <div className="flex gap-2">
            <OddPill label="П1" value={odds?.p1} href={ctaHref} />
            <OddPill label="X" value={odds?.x} href={ctaHref} />
            <OddPill label="П2" value={odds?.p2} href={ctaHref} />
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="md-btn md-btn-partner md-btn-lg w-full"
        >
          {ctaLabel}
        </a>

        {/* Disclaimer */}
        <div className="text-[0.6875rem] leading-relaxed text-[var(--md-text-disabled)]">
          {disclaimer}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden p-5 lg:block lg:p-6">
        <div className="flex items-center justify-between gap-6">
          {/* Partner Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--md-partner-accent)]/10">
              <Image
                src={BETBOOM_LOGO}
                alt="BetBoom"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </div>
            <div>
              <div className="md-meta">Официальный партнёр</div>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block font-[var(--font-horta)] text-[1.375rem] tracking-[0.03em] text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-partner-accent)]"
              >
                {partner.logoText || partner.name}
              </a>
            </div>
          </div>

          {/* Odds Pills */}
          <div className="flex items-center gap-3">
            <span className="md-label mr-1">Кэфы:</span>
            <OddPill label="П1" value={odds?.p1} href={ctaHref} />
            <OddPill label="X" value={odds?.x} href={ctaHref} />
            <OddPill label="П2" value={odds?.p2} href={ctaHref} />
          </div>

          {/* CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="md-btn md-btn-partner md-btn-lg"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 border-t border-[var(--md-border-subtle)] pt-3 text-[0.75rem] leading-relaxed text-[var(--md-text-disabled)]">
          {disclaimer}
        </div>
      </div>
    </div>
  );
}
