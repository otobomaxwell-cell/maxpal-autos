import { business, reviews } from "@/lib/business";
import { StarIcon } from "./icons";
import { CtaLink } from "./ui/Cta";

export function Reviews() {
  return (
    <section id="reviews" className="bg-bg text-ink py-14 sm:py-20">
      <div className="mx-auto max-w-295 px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-brand-text font-semibold mb-3.5">
          Customer Reviews
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-9">
          What Derby drivers are saying
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-surface border rounded-[3px] p-6 ${
                review.isPlaceholder ? "border-dashed border-error/60" : "border-line"
              }`}
            >
              {review.isPlaceholder && (
                <p className="font-mono text-[0.6875rem] tracking-[0.1em] uppercase text-error font-semibold mb-3">
                  Placeholder – replace before launch
                </p>
              )}
              <div className="flex gap-0.5 text-brand-deep mb-3.5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} className="size-4.5" />
                ))}
              </div>
              <p className="text-[1.0625rem] mb-4">&ldquo;{review.quote}&rdquo;</p>
              <p className="font-mono text-sm text-ink-mute">&mdash; {review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <CtaLink href={business.googleReviewsHref} variant="outline" external>
            See Our Google Reviews
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
