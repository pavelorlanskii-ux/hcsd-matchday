import Image from "next/image";

const KNOT_DECOR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%88%D0%B44-i6HOPbV1q2QQQNxjBK0DxtMivUbk2A.png";

export function CTASection() {
  return (
    <section className="md-card relative overflow-hidden">
      {/* Decorative knot element */}
      <div className="pointer-events-none absolute -right-10 bottom-0 top-0 flex items-center opacity-[0.04] md:-right-4" aria-hidden="true">
        <Image
          src={KNOT_DECOR}
          alt=""
          width={160}
          height={160}
          className="h-28 w-28 md:h-36 md:w-36"
        />
      </div>

      <div className="relative z-10 p-6 sm:p-7 md:p-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Text */}
          <div>
            <h2 className="md-headline-section text-balance text-[var(--md-text-primary)]">
              Увидимся на СКА Арене
            </h2>
            <p className="md-subtitle mt-2.5">
              Приходите заранее, чтобы всё успеть
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#tickets"
              className="md-btn md-btn-primary md-btn-xl w-full sm:w-auto"
            >
              Купить билеты
            </a>
            <a
              href="https://hc-dragons.com"
              className="md-btn md-btn-secondary md-btn-lg w-full sm:w-auto"
            >
              На главную
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
