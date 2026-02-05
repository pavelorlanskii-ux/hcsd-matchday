"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Новости", href: "https://hc-dragons.com/news" },
  { label: "Команда", href: "https://hc-dragons.com/team" },
  { label: "Клуб", href: "https://hc-dragons.com/club" },
  { label: "Сезон", href: "https://hc-dragons.com/season" },
  { label: "Медиа", href: "https://hc-dragons.com/media" },
];

const CTA_BUTTONS = [
  { label: "VIP", href: "https://hc-dragons.com/vip", variant: "vip" as const },
  { label: "БИЛЕТЫ", href: "#tickets", variant: "tickets" as const },
  { label: "МАГАЗИН", href: "https://hc-dragons.com/shop", variant: "shop" as const },
];

const SOCIAL_LINKS = [
  { label: "VK", href: "https://vk.com/hcdragons", icon: "vk" },
  { label: "Telegram", href: "https://t.me/hcdragons", icon: "tg" },
];

function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <circle cx="4" cy="4" r="1.5" />
      <circle cx="10" cy="4" r="1.5" />
      <circle cx="16" cy="4" r="1.5" />
      <circle cx="4" cy="10" r="1.5" />
      <circle cx="10" cy="10" r="1.5" />
      <circle cx="16" cy="10" r="1.5" />
      <circle cx="4" cy="16" r="1.5" />
      <circle cx="10" cy="16" r="1.5" />
      <circle cx="16" cy="16" r="1.5" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function VKIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.77 19.05c-6.05 0-9.5-4.15-9.65-11.05h3.03c.1 5.05 2.32 7.18 4.08 7.62V8h2.86v4.35c1.73-.19 3.55-2.18 4.16-4.35h2.86c-.47 2.67-2.45 4.66-3.86 5.48 1.41.65 3.67 2.37 4.52 5.57h-3.15c-.66-2.06-2.3-3.65-4.53-3.87v3.87h-.32z"/>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"ru" | "en">("ru");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a2744]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 xl:h-[80px] xl:px-8">
        {/* Left: Grid button + Logo */}
        <div className="flex items-center gap-3 xl:gap-5">
          {/* Grid/Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            <GridIcon className="h-5 w-5" />
          </button>

          {/* Logo */}
          <a
            href="https://hc-dragons.com"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="ХК Шанхай Дрэгонс - На главную"
          >
            <Image
              src="/logo_dragons.png"
              alt="Шанхай Дрэгонс"
              width={60}
              height={60}
              className="h-11 w-11 object-contain xl:h-[60px] xl:w-[60px]"
            />
            <Image
              src="/dragons_name.svg"
              alt="SHANGHAI DRAGONS"
              width={160}
              height={44}
              className="hidden h-9 w-auto sm:block xl:h-[44px]"
            />
          </a>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-2 text-[19px] font-normal leading-[1.2] text-white/90 transition-colors hover:text-white"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Lang + CTAs + Social */}
        <div className="flex items-center gap-2 xl:gap-4">
          {/* Language Switcher */}
          <div className="hidden items-center gap-3 text-[17px] xl:flex">
            <button
              type="button"
              onClick={() => setLang("ru")}
              className={`py-0.5 font-normal transition-colors ${
                lang === "ru" ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              Ру
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`py-0.5 font-normal transition-colors ${
                lang === "en" ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              En
            </button>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden items-center gap-[6px] xl:flex">
            {CTA_BUTTONS.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`flex h-[47px] w-[107px] items-center justify-center text-[15px] font-bold uppercase tracking-wide transition-colors ${
                  btn.variant === "vip"
                    ? "bg-white text-[#e85d04] hover:bg-white/90"
                    : btn.variant === "tickets"
                    ? "bg-[#e85d04] text-white hover:bg-[#f07b2f]"
                    : "bg-[#f5a623] text-[#1a2744] hover:bg-[#ffc107]"
                }`}
              >
                {btn.label}
              </a>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden items-center gap-2 xl:flex">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white"
                aria-label={social.label}
              >
                {social.icon === "vk" ? <VKIcon className="h-6 w-6" /> : <TelegramIcon className="h-6 w-6" />}
              </a>
            ))}
          </div>

          {/* Mobile: Grid Button (shows same as left on desktop, hidden on mobile since left one opens menu) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white xl:hidden"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            <GridIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 z-40 bg-black/50 xl:top-[80px]"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div
            ref={menuRef}
            className="fixed inset-0 top-16 z-50 overflow-y-auto bg-[#1a2744] xl:top-[80px]"
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
          >
            <div className="flex min-h-full flex-col">
              {/* Header with close button */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <a href="https://hc-dragons.com" className="flex items-center gap-2">
                  <Image
                    src="/logo_dragons.png"
                    alt="Шанхай Дрэгонс"
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain"
                  />
                  <Image
                    src="/dragons_name.svg"
                    alt="SHANGHAI DRAGONS"
                    width={100}
                    height={28}
                    className="h-7 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white"
                  aria-label="Закрыть меню"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Search */}
              <div className="border-b border-white/10 px-4 py-4">
                <div className="flex items-center gap-3 rounded border border-white/20 bg-white/5 px-4 py-3">
                  <span className="text-sm text-white/70">Поиск по сайту</span>
                  <SearchIcon className="ml-auto h-5 w-5 text-white/50" />
                </div>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center justify-center gap-4 border-b border-white/10 py-4">
                <button
                  type="button"
                  onClick={() => setLang("ru")}
                  className={`text-base font-medium transition-colors ${
                    lang === "ru" ? "text-white" : "text-white/40 hover:text-white/60"
                  }`}
                >
                  Ру
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`text-base font-medium transition-colors ${
                    lang === "en" ? "text-white" : "text-white/40 hover:text-white/60"
                  }`}
                >
                  En
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6" aria-label="Мобильная навигация">
                <ul className="flex flex-col items-center gap-5">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-xl font-bold uppercase tracking-wide text-[#e85d04] transition-colors hover:text-[#f07b2f]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTAs */}
              <div className="mt-auto border-t border-white/10 px-4 py-4">
                <div className="flex flex-col gap-3">
                  {/* Row 1: БИЛЕТЫ + VIP */}
                  <div className="flex gap-3">
                    <a
                      href="#tickets"
                      onClick={() => setMobileOpen(false)}
                      className="flex h-12 flex-1 items-center justify-center bg-[#e85d04] text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#f07b2f]"
                    >
                      БИЛЕТЫ
                    </a>
                    <a
                      href="https://hc-dragons.com/vip"
                      onClick={() => setMobileOpen(false)}
                      className="flex h-12 flex-1 items-center justify-center border border-white/30 bg-transparent text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                    >
                      VIP
                    </a>
                  </div>
                  
                  {/* Row 2: Social + МАГАЗИН */}
                  <div className="flex gap-3">
                    <div className="flex gap-2">
                      {SOCIAL_LINKS.map((social) => (
                        <a
                          key={social.icon}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-12 w-12 items-center justify-center border border-white/30 bg-transparent text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                          aria-label={social.label}
                        >
                          {social.icon === "vk" ? <VKIcon className="h-5 w-5" /> : <TelegramIcon className="h-5 w-5" />}
                        </a>
                      ))}
                    </div>
                    <a
                      href="https://hc-dragons.com/shop"
                      onClick={() => setMobileOpen(false)}
                      className="flex h-12 flex-1 items-center justify-center bg-[#f5a623] text-sm font-bold uppercase tracking-wide text-[#1a2744] transition-colors hover:bg-[#ffc107]"
                    >
                      МАГАЗИН
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
