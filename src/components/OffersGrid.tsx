import type { Offer } from "@/data/matchday";

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

function ArrowIcon() {
  return (
    <svg 
      className="h-4 w-4 transition-transform group-hover:translate-x-0.5" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

export function OffersGrid(props: { offers?: Offer[]; partnerName?: string }) {
  const offers = props.offers ?? [];
  const partnerName = props.partnerName ?? "BetBoom";
  
  if (offers.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-6">
      {offers.map((o) => {
        // Check if this offer is from the partner
        const isPartnerOffer = o.badge?.toLowerCase().includes(partnerName.toLowerCase()) || 
                               o.badge?.toLowerCase().includes("betboom") ||
                               o.title?.toLowerCase().includes("betboom") ||
                               o.title?.toLowerCase().includes("фрибет");

        return (
          <article 
            key={o.id} 
            className={`flex flex-col overflow-hidden ${isPartnerOffer ? "md-card-featured" : "md-card"}`}
          >
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              {/* Badge */}
              {o.badge && (
                <div className={`inline-flex w-fit ${isPartnerOffer ? "md-badge md-badge-partner" : "md-badge md-badge-yellow"}`}>
                  {isPartnerOffer && <StarIcon />}
                  {o.badge}
                </div>
              )}
              
              {/* Title */}
              <h3 className="md-title-card mt-5 text-[var(--md-text-primary)]">
                {o.title}
              </h3>
              
              {/* Description */}
              <p className="md-body mt-4 line-clamp-4 flex-1">
                {o.description}
              </p>
              
              {/* CTA */}
              {o.link && (
                <a
                  href={o.link.href}
                  className={`group mt-6 inline-flex w-fit items-center gap-2 ${isPartnerOffer ? "md-btn md-btn-partner" : "md-btn md-btn-primary"}`}
                >
                  {o.link.label}
                  <ArrowIcon />
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
