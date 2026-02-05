"use client";

import Image from "next/image";

const BETBOOM_LOGO = "/partners/betboom-logo.png";

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
      className="group flex min-w-[5.5rem] flex-1 flex-col items-center justify-center border border-[var(--md-border)] px-3 py-3 transition-all hover:border-[rgba(255,107,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-partner-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface-1)] active:scale-[0.97] sm:min-w-[6.5rem] sm:px-5 sm:py-4"
      style={{ background: 'rgba(36, 51, 82, 0.8)' }}
    >
      <span className="md-label text-[var(--md-text-muted)]">{label}</span>
      <span className="mt-1.5 font-[var(--font-horta)] text-[var(--md-font-size-xl)] font-bold tabular-nums text-[var(--md-partner-accent)] transition-colors group-hover:text-[var(--md-partner-accent-light)] sm:mt-2 sm:text-[var(--md-font-size-2xl)]">
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
      <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3" style={{ borderBottom: '1px solid rgba(255, 107, 0, 0.15)', background: 'linear-gradient(to right, rgba(255, 107, 0, 0.08), transparent)' }}>
        <span className="md-badge md-badge-partner text-[10px] sm:text-[11px]">
          <StarIcon />
          Партнёр матча
        </span>
        <span className="font-[var(--font-horta)] text-[10px] uppercase tracking-[0.1em] text-[var(--md-text-muted)] sm:text-[11px]">Ставки на спорт</span>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-3 p-4 sm:gap-4 sm:p-5 lg:hidden">
        {/* Partner Info */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12" style={{ background: 'rgba(255, 107, 0, 0.1)' }}>
            <Image
              src={BETBOOM_LOGO}
              alt="BetBoom"
              width={36}
              height={36}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-[var(--font-horta)] text-[10px] uppercase tracking-[0.1em] text-[var(--md-text-muted)]">Официальный партнёр</div>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 block truncate font-[var(--font-horta)] text-[1.125rem] tracking-[0.03em] text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-partner-accent)] sm:text-[1.25rem]"
            >
              {partner.logoText || partner.name}
            </a>
          </div>
        </div>

        {/* Odds Pills */}
        <div>
          <div className="mb-1.5 font-[var(--font-horta)] text-[10px] uppercase tracking-[0.1em] text-[var(--md-text-muted)] sm:mb-2">Коэффициенты на матч</div>
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
          className="md-btn md-btn-partner mt-2 w-full sm:min-h-[3.5rem]"
        >
          {ctaLabel}
        </a>

        {/* Disclaimer */}
        <div className="md-body-sm text-[var(--md-text-disabled)]">
          {disclaimer}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden p-6 lg:block lg:p-8">
        <div className="flex items-center justify-between gap-8">
          {/* Partner Info */}
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center" style={{ background: 'rgba(255, 107, 0, 0.1)' }}>
              <Image
                src={BETBOOM_LOGO}
                alt="BetBoom"
                width={44}
                height={44}
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <div className="md-meta">Официальный партнёр</div>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 block font-[var(--font-horta)] text-[var(--md-font-size-2xl)] tracking-[0.03em] text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-partner-accent)]"
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
        <div className="mt-5 border-t border-[var(--md-border-subtle)] pt-4 md-body-sm text-[var(--md-text-disabled)]">
          {disclaimer}
        </div>
      </div>
    </div>
  );
}
