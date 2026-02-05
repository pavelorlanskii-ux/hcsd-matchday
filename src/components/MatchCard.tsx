"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const CLUB_LOGO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_shanghai_dragons-rpqZlKvYrjv48TTGb7Qc3pkrbDbzZJ.png";

function parseCountdown(ms: number) {
  if (ms <= 0) return { d: "00", h: "00", m: "00", s: "00" };
  const total = Math.floor(ms / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { 
    d: String(d).padStart(2, "0"), 
    h: String(h).padStart(2, "0"), 
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0")
  };
}

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="md-countdown-unit">
      <span className="md-countdown-value">{value}</span>
      <span className="md-countdown-label">{label}</span>
    </div>
  );
}

function CountdownSeparator() {
  return <span className="md-countdown-separator">:</span>;
}

export function MatchCard(props: {
  leftMetaLines: readonly string[];
  title: string;
  homeLogoText: string;
  awayLogoText: string;
  matchDateIso: string;
  buyHref: string;
  homeHref: string;
  partnerName: string;
  className?: string;
}) {
  const target = useMemo(() => new Date(props.matchDateIso).getTime(), [props.matchDateIso]);
  const [now, setNow] = useState(target - 1000 * 60 * 60 * 24); // Initialize with 1 day before target to avoid hydration mismatch

  useEffect(() => {
    // Set actual time after mount
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = target - now;
  const countdown = parseCountdown(diff);
  const isMatchStarted = diff <= 0;

  const titleParts = props.title.split(" - ");
  const homeName = titleParts[0] ?? props.title;
  const awayName = titleParts[1] ?? "";

  return (
    <article className={`md-card-hero overflow-hidden ${props.className || ""}`}>
      {/* Mobile Layout */}
      <div className="flex flex-col p-4 sm:p-5 lg:hidden">
        {/* Match Meta: Date, League, Arena */}
        <div className="mb-4 border-b border-[var(--md-border-subtle)] pb-4">
          <div className="text-lg font-bold tracking-tight text-[var(--md-text-primary)]">
            {props.leftMetaLines[0]}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-[var(--md-text-muted)]">
            <span className="font-medium">{props.leftMetaLines[1]}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--md-text-muted)]/50" aria-hidden="true" />
            <span>{props.leftMetaLines[2]}</span>
          </div>
        </div>

        {/* Teams Block */}
        <div className="bg-[var(--md-surface-2)]/80 p-4">
          <div className="flex items-center justify-between gap-3">
            {/* Home Team */}
            <div className="flex min-w-0 flex-1 flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center bg-[var(--md-surface-3)]">
                <Image
                  src={CLUB_LOGO}
                  alt={homeName}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="md-meta mt-2">Хозяева</div>
              <div className="mt-1 line-clamp-2 text-sm font-semibold leading-tight text-[var(--md-text-primary)]">
                {homeName}
              </div>
            </div>

            {/* VS Divider */}
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-[var(--md-border)] bg-[var(--md-surface-1)]">
              <span className="text-xs font-bold text-[var(--md-text-muted)]">VS</span>
            </div>

            {/* Away Team */}
            <div className="flex min-w-0 flex-1 flex-col items-center text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[var(--md-surface-3)] text-xs font-bold text-[var(--md-text-secondary)]">
                {props.awayLogoText.slice(0, 4).toUpperCase()}
              </div>
              <div className="md-meta mt-2">Гости</div>
              <div className="mt-1 w-full truncate text-sm font-semibold leading-tight text-[var(--md-text-primary)]">
                {awayName}
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-4 border border-[var(--md-border)] bg-[var(--md-surface-2)]/60 p-4">
          <div className="md-meta mb-3 text-center">До матча осталось</div>
          {!isMatchStarted ? (
            <div className="md-countdown">
              <CountdownUnit value={countdown.d} label="дней" />
              <CountdownSeparator />
              <CountdownUnit value={countdown.h} label="часов" />
              <CountdownSeparator />
              <CountdownUnit value={countdown.m} label="минут" />
              <CountdownSeparator />
              <CountdownUnit value={countdown.s} label="секунд" />
            </div>
          ) : (
            <div className="text-center text-xl font-bold uppercase tracking-wide text-[var(--md-dragons-orange)]">
              Матч начался
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-col gap-2.5">
          <a href={props.buyHref} className="md-btn md-btn-primary md-btn-xl w-full">
            Купить билеты
          </a>
          <a href={props.homeHref} className="md-btn md-btn-secondary md-btn-lg w-full">
            На главную
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden p-5 lg:block lg:p-6">
        <div className="flex items-center gap-4">
          {/* Left Column: Meta Info */}
          <div className="w-[180px] flex-shrink-0">
            <div className="text-xl font-bold tracking-tight text-[var(--md-text-primary)]">
              {props.leftMetaLines[0]}
            </div>
            <div className="mt-2 space-y-0.5">
              <div className="text-sm font-medium text-[var(--md-text-secondary)]">
                {props.leftMetaLines[1]}
              </div>
              <div className="text-sm text-[var(--md-text-muted)]">
                {props.leftMetaLines[2]}
              </div>
            </div>
          </div>

          {/* Middle Column: Teams - flex-1 to fill all available space */}
          <div className="min-w-0 flex-1 bg-[var(--md-surface-2)]/80 px-5 py-4">
            <div className="flex items-center gap-5">
              {/* Home Team */}
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-[var(--md-surface-3)]">
                  <Image
                    src={CLUB_LOGO}
                    alt={homeName}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="md-meta text-[11px]">Хозяева</div>
                  <div className="mt-1 line-clamp-2 text-lg font-bold leading-snug text-[var(--md-text-primary)]">
                    {homeName}
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[var(--md-border)] bg-[var(--md-surface-1)]">
                <span className="text-xs font-bold text-[var(--md-text-muted)]">VS</span>
              </div>

              {/* Away Team */}
              <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
                <div className="min-w-0 flex-1 text-right">
                  <div className="md-meta text-[11px]">Гости</div>
                  <div className="mt-1 line-clamp-2 text-lg font-bold leading-snug text-[var(--md-text-primary)]">
                    {awayName}
                  </div>
                </div>
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-[var(--md-surface-3)] text-sm font-bold text-[var(--md-text-secondary)]">
                  {props.awayLogoText.slice(0, 4).toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Countdown + CTAs */}
          <div className="w-[260px] flex-shrink-0">
            {/* Countdown */}
            <div className="border border-[var(--md-border)] bg-[var(--md-surface-2)]/60 p-3">
              <div className="md-meta mb-1.5 text-center text-[10px]">До матча</div>
              {!isMatchStarted ? (
                <div className="md-countdown">
                  <CountdownUnit value={countdown.d} label="дн" />
                  <CountdownSeparator />
                  <CountdownUnit value={countdown.h} label="ч" />
                  <CountdownSeparator />
                  <CountdownUnit value={countdown.m} label="м" />
                  <CountdownSeparator />
                  <CountdownUnit value={countdown.s} label="с" />
                </div>
              ) : (
                <div className="text-center text-lg font-bold uppercase text-[var(--md-dragons-orange)]">
                  Матч начался
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-2.5 flex flex-col gap-1.5">
              <a href={props.buyHref} className="md-btn md-btn-primary w-full text-[13px]">
                Купить билеты
              </a>
              <a href={props.homeHref} className="md-btn md-btn-secondary w-full text-[12px]">
                На главную
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
