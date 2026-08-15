import { business, reviews } from "@/lib/business";
import { StarIcon } from "./icons";
import { CtaLink } from "./ui/Cta";

export function Reviews() {
  return (
    <section id="reviews" className="bg-bg text-ink py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-amber-deep font-semibold mb-3.5">
          Customer Reviews
        </p>
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] mb-9">
          What Derby drivers are saying
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="bg-surface border border-line rounded-[3px] p-6">
              <div className="flex gap-0.5 text-amber-deep mb-3.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="w-[18px] h-[18px]" />
                ))}
              </div>
              <p className="text-[1.0625rem] mb-4">&ldquo;{review.quote}&rdquo;</p>
              <p className="font-mono text-sm text-ink-mute">&mdash; {review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CtaLink href={business.googleReviewsHref} variant="outline">
            See Our Google Reviews
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
