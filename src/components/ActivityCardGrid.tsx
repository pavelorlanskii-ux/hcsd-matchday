"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import type { Activity, ActivityBadge, ActivityTag } from "@/data/matchday";

type ChipProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

function Chip({ active, onClick, children }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`md-chip ${active ? "md-chip-active" : ""}`}
    >
      {children}
    </button>
  );
}

function LocationIcon() {
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

type ActivityCardGridProps = {
  activities?: Activity[];
  tags?: ActivityTag[];
  badges?: ActivityBadge[];
};

export function ActivityCardGrid({
  activities = [],
  tags = [],
  badges = [],
}: ActivityCardGridProps) {
  const [tag, setTag] = useState<ActivityTag | "Все">("Все");
  const [badge, setBadge] = useState<ActivityBadge | "Все">("Все");

  const filtered = useMemo(() => {
    return activities.filter((a) => {
      const tagOk = tag === "Все" ? true : a.tags.includes(tag);
      const badgeOk = badge === "Все" ? true : a.badges.includes(badge);
      return tagOk && badgeOk;
    });
  }, [activities, tag, badge]);

  return (
    <div>
      {/* Filters with horizontal scroll on mobile */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        {/* Interests filter */}
        <div className="flex-1">
          <div className="md-label mb-2">Интересы</div>
          <div className="overflow-x-auto pb-2 md-scrollbar-hide">
            <div className="flex min-w-max gap-2">
              <Chip active={tag === "Все"} onClick={() => setTag("Все")}>
                Все
              </Chip>
              {tags.map((t: ActivityTag) => (
                <Chip key={t} active={tag === t} onClick={() => setTag(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Badges filter */}
        <div className="flex-1">
          <div className="md-label mb-2">Время</div>
          <div className="overflow-x-auto pb-2 md-scrollbar-hide">
            <div className="flex min-w-max gap-2">
              <Chip active={badge === "Все"} onClick={() => setBadge("Все")}>
                Все
              </Chip>
              {badges.map((b: ActivityBadge) => (
                <Chip key={b} active={badge === b} onClick={() => setBadge(b)}>
                  {b}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-[var(--md-text-muted)]">
        {filtered.length > 0 ? (
          <span>Найдено: <span className="font-medium text-[var(--md-text-secondary)]">{filtered.length}</span></span>
        ) : null}
      </div>

      {/* Cards grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 3-4 cols */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((a: Activity) => (
          <article
            key={a.id}
            className="md-card group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* Image placeholder with gradient */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--md-surface-2)] to-[var(--md-surface-3)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-[var(--md-surface-1)]/50 flex items-center justify-center">
                  <svg 
                    className="h-6 w-6 text-[var(--md-text-muted)]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="m21 15-5-5L5 21"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {a.badges.map((b: ActivityBadge) => (
                  <span key={b} className="md-badge md-badge-muted">
                    {b}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="md-title-card mt-3 line-clamp-2 text-[var(--md-text-primary)]">
                {a.title}
              </h3>
              
              {/* Description */}
              <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-[var(--md-text-secondary)]">
                {a.description}
              </p>

              {/* Footer: Location + Tags */}
              <div className="mt-4 border-t border-[var(--md-border-subtle)] pt-3">
                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-[var(--md-text-muted)]">
                  <LocationIcon />
                  <span className="truncate">{a.location}</span>
                </div>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {a.tags.map((t: ActivityTag) => (
                    <span key={t} className="md-badge md-badge-turq">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-8 rounded-xl border border-[var(--md-border)] bg-[var(--md-surface-1)] p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--md-surface-2)]">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-[var(--md-text-muted)]"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
          <p className="text-sm text-[var(--md-text-muted)]">
            Нет активностей по выбранным фильтрам
          </p>
          <button
            type="button"
            onClick={() => { setTag("Все"); setBadge("Все"); }}
            className="mt-4 text-sm font-semibold uppercase tracking-wide text-[var(--md-dragons-orange)] transition-colors hover:text-[var(--md-dragons-orange-light)]"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
}
