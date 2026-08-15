import { business } from "@/lib/business";
import { CtaLink } from "./ui/Cta";

function RadarGraphic() {
  return (
    <svg
      width="260"
      height="260"
      viewBox="0 0 300 300"
      role="img"
      aria-label={`Approximate ${business.serviceRadiusMiles} mile service radius around Derby ${business.postcode}`}
      className="mx-auto"
    >
      <circle cx="150" cy="150" r="140" fill="#ffffff" stroke="#d5d7da" strokeWidth="1" />
      <circle cx="150" cy="150" r="105" fill="none" stroke="#d5d7da" strokeWidth="1" strokeDasharray="4 5" />
      <circle cx="150" cy="150" r="70" fill="none" stroke="#d5d7da" strokeWidth="1" strokeDasharray="4 5" />
      <circle cx="150" cy="150" r="140" fill="none" stroke="#f2a31e" strokeWidth="2" strokeDasharray="6 6" />
      <line x1="10" y1="150" x2="290" y2="150" stroke="#d5d7da" strokeWidth="1" />
      <line x1="150" y1="10" x2="150" y2="290" stroke="#d5d7da" strokeWidth="1" />
      <line x1="45" y1="45" x2="255" y2="255" stroke="#e5e6e8" strokeWidth="1" />
      <line x1="255" y1="45" x2="45" y2="255" stroke="#e5e6e8" strokeWidth="1" />
      <path
        d="M150 122a20 20 0 0 0-20 20c0 15 20 38 20 38s20-23 20-38a20 20 0 0 0-20-20Z"
        fill="#c43b2c"
      />
      <circle cx="150" cy="142" r="7" fill="#ffffff" />
      <text x="150" y="112" textAnchor="middle" fontFamily="ui-monospace,Consolas,monospace" fontSize="11" fill="#16171b" fontWeight="600">
        {business.postcode}
      </text>
      <text x="150" y="285" textAnchor="middle" fontFamily="ui-monospace,Consolas,monospace" fontSize="12" fill="#565a62" letterSpacing="1">
        ~{business.serviceRadiusMiles} MILE RADIUS
      </text>
    </svg>
  );
}

export function LocationHours() {
  return (
    <section id="location" className="bg-bg text-ink py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber-deep font-semibold mb-3.5">
          Workshop &amp; Service Area
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-9">Find us in Derby</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-display font-bold uppercase text-[1.375rem] tracking-wide mb-2">{business.name}</p>
            <p className="font-mono text-[1.0625rem] leading-[1.7] mb-4">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="text-ink-mute mb-6">
              Mobile service: approximately {business.serviceRadiusMiles}-mile service area around Derby.
            </p>
            <CtaLink href={business.directionsHref} variant="outline" className="mb-10 inline-flex">
              Get Directions
            </CtaLink>

            <table className="w-full max-w-[420px] text-[1.0625rem]">
              <tbody>
                {business.hours.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <td className="py-3.5 font-semibold">{row.label}</td>
                    <td className="py-3.5 text-right font-mono">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 bg-surface border-l-4 border-red px-4.5 py-4 text-[0.9375rem] max-w-[62ch]">
              <span className="font-semibold text-red">Priority calls: </span>
              {business.priorityHoursNote}
            </div>
          </div>

          <RadarGraphic />
        </div>
      </div>
    </section>
  );
}
