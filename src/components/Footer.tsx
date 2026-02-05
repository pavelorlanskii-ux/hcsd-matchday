"use client";

import Image from "next/image";

const CLUB_LOGO = "/logo_dragons.png";
const DRAGON_ORNAMENT = "/ornaments/dragon-footer.png";

const NAV_COLUMNS = [
  {
    title: "КОМАНДА",
    links: [
      { label: "Основной состав", href: "https://hc-dragons.com/team/roster" },
      { label: "Тренерский штаб", href: "https://hc-dragons.com/team/coaches" },
      { label: "Персонал", href: "https://hc-dragons.com/team/staff" },
    ],
  },
  {
    title: "КЛУБ",
    links: [
      { label: "О клубе", href: "https://hc-dragons.com/club/about" },
      { label: "Руководство", href: "https://hc-dragons.com/club/management" },
      { label: "Контакты", href: "https://hc-dragons.com/club/contacts" },
      { label: "Арена", href: "https://hc-dragons.com/club/arena" },
      { label: "Документы", href: "https://hc-dragons.com/club/documents" },
    ],
  },
  {
    title: "СЕЗОН",
    links: [
      { label: "Результаты матчей", href: "https://hc-dragons.com/season/results" },
      { label: "Календарь", href: "https://hc-dragons.com/season/calendar" },
      { label: "Турнирная таблица", href: "https://hc-dragons.com/season/standings" },
    ],
  },
  {
    title: "МЕДИА",
    links: [
      { label: "Новости", href: "https://hc-dragons.com/media/news" },
      { label: "Фотогалерея", href: "https://hc-dragons.com/media/photo" },
      { label: "Dragons.TV", href: "https://hc-dragons.com/media/tv" },
      { label: "Программки", href: "https://hc-dragons.com/media/programs" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://t.me/hcdragons", icon: "tg" },
  { label: "VK", href: "https://vk.com/hcdragons", icon: "vk" },
  { label: "YouTube", href: "https://youtube.com/@hcdragons", icon: "yt" },
  { label: "Instagram", href: "https://instagram.com/hcdragons", icon: "ig" },
  { label: "Facebook", href: "https://facebook.com/hcdragons", icon: "fb" },
  { label: "TikTok", href: "https://tiktok.com/@hcdragons", icon: "tt" },
  { label: "X", href: "https://x.com/hcdragons", icon: "x" },
  { label: "Weibo", href: "#", icon: "weibo" },
];

// SVG Icons
function VKIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.77 19.05c-6.05 0-9.5-4.15-9.65-11.05h3.03c.1 5.05 2.32 7.18 4.08 7.62V8h2.86v4.35c1.73-.19 3.55-2.18 4.16-4.35h2.86c-.47 2.67-2.45 4.66-3.86 5.48 1.41.65 3.67 2.37 4.52 5.57h-3.15c-.66-2.06-2.3-3.65-4.53-3.87v3.87h-.32z"/>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.787l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z"/>
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function WeiboIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.598-.612-.284-.79-.991-.405-1.593.379-.595 1.176-.862 1.791-.581.622.285.822.986.443 1.576zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.1-.313-.378-.177-.609.138-.227.437-.346.672-.247.238.103.321.378.194.603zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.643 4.318-.259 5.096-2.012.763-1.696-.175-3.752-2.125-4.316zM17.278 8.242c-.315-.096-.531-.169-.384-.603.317-.949.35-1.767.006-2.351-.646-1.098-2.418-1.038-4.469-.028l-.006.001c0 .001-.45.196-.334-.145.223-.669.189-1.229-.129-1.554-.72-.732-2.64.026-4.29 1.692C6.16 6.782 5.31 8.404 5.31 9.835c0 2.736 3.51 4.399 6.94 4.399 4.509 0 7.507-2.617 7.507-4.697 0-1.263-1.065-1.979-2.479-2.295zM21.77 7.579c-.643-1.896-2.28-3.034-3.834-2.545-.487.153-.757.682-.604 1.17.153.49.685.76 1.172.609.758-.242 1.572.389 1.925 1.471.348 1.081.034 2.21-.716 2.575-.467.228-.664.786-.436 1.252.226.468.787.666 1.253.439 1.484-.726 2.078-2.866 1.24-4.971zm-1.629-.93c-.309-.912-1.099-1.454-1.773-1.242-.188.06-.342.197-.434.379-.111.219-.126.482-.04.725.166.486.563.852 1.024.852.205 0 .416-.07.594-.21l.014-.01c.238-.197.455-.539.58-.91.049-.146.065-.33.035-.584z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "vk":
      return <VKIcon className={className} />;
    case "tg":
      return <TelegramIcon className={className} />;
    case "yt":
      return <YouTubeIcon className={className} />;
    case "fb":
      return <FacebookIcon className={className} />;
    case "tt":
      return <TikTokIcon className={className} />;
    case "weibo":
      return <WeiboIcon className={className} />;
    case "ig":
      return <InstagramIcon className={className} />;
    case "x":
      return <XIcon className={className} />;
    default:
      return null;
  }
}

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative overflow-hidden bg-[#1a2744]">
      {/* Background Dragon Watermark - full-bleed from left edge */}
      <div 
        className="pointer-events-none absolute left-0 top-1/2 z-0 h-[140%] w-[65%] -translate-y-1/2 opacity-[0.12] md:h-[130%] md:w-[60%] md:opacity-[0.15] lg:h-[150%] lg:w-[55%]" 
        aria-hidden="true"
      >
        <Image
          src={DRAGON_ORNAMENT}
          alt=""
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-12 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src={CLUB_LOGO}
              alt="Шанхай Дрэгонс"
              width={140}
              height={140}
              className="h-28 w-28 object-contain lg:h-[140px] lg:w-[140px]"
            />
          </div>

          {/* Center: Navigation Columns */}
          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:gap-x-12">
            {NAV_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[15px] font-bold uppercase tracking-wide text-[#e85d04] lg:mb-5 lg:text-base">
                  {column.title}
                </h3>
                <ul className="space-y-2.5 lg:space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-white/80 transition-colors hover:text-white lg:text-[15px]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Social Links Grid 4x2 */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-4 gap-2 lg:gap-2.5">
              {SOCIAL_LINKS.slice(0, 4).map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center border border-[#e85d04] text-[#e85d04] transition-colors hover:bg-[#e85d04] hover:text-white lg:h-12 lg:w-12"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-4 gap-2 lg:mt-2.5 lg:gap-2.5">
              {SOCIAL_LINKS.slice(4, 8).map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center border border-[#e85d04] text-[#e85d04] transition-colors hover:bg-[#e85d04] hover:text-white lg:h-12 lg:w-12"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center px-6 py-5 lg:px-12">
          {/* Copyright */}
          <div className="text-[13px] text-white/60 lg:text-sm">
            &copy; {currentYear} Хоккейный клуб «Шанхай Дрэгонс»
          </div>
        </div>
      </div>

      {/* Orange Bottom Line */}
      <div className="h-1 w-full bg-[#e85d04]" aria-hidden="true" />
    </footer>
  );
}
