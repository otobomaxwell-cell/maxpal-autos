export type BusinessHours = {
  readonly label: string;
  readonly value: string;
};

export const business = {
  name: "Maxpal Autos Ltd",
  // Legal-suffix-free name for display contexts (logo, hero, browser title)
  // where "Ltd" reads clunky; business.name stays authoritative for the
  // footer copyright line and the LocalBusiness JSON-LD schema.
  shortName: "Maxpal Autos",
  tagline: "Professional Vehicle Repairs",
  phoneDisplay: "07931 306367",
  phoneHref: "tel:+447931306367",
  addressLines: ["555 Osmaston Rd, Allenton", "Derby, DE24 8NE"] as const,
  postcode: "DE24",
  serviceRadiusMiles: 10,
  hours: [
    { label: "Monday – Saturday", value: "8:00 AM – 6:00 PM" },
    { label: "Sunday", value: "Priority appointments only" },
  ] as const satisfies readonly BusinessHours[],
  priorityHoursNote:
    "Priority enquiries accepted until 9:00 PM during current summer hours. Availability varies depending on workload and the repair required.",
  // TODO: replace with the business's actual Google Business Profile review
  // link once available; this search query is a safe, working stand-in.
  googleReviewsHref: "https://www.google.com/search?q=Maxpal+Autos+Ltd+555+Osmaston+Rd+Derby+reviews",
  directionsHref:
    "https://www.google.com/maps/dir//Maxpal+Autos+Ltd,+555+Osmaston+Rd,+Allenton,+Derby+DE24+8NE/@52.9145861,-1.4699676,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4879f1d19b26e6f9:0x648d54fce7b714b3!2m2!1d-1.4572917!2d52.8988537?hl=en-GB&entry=ttu",
  notificationEmail: "info@maxpal.co.uk",
} as const;

export type ServiceCategory = {
  readonly id: string;
  readonly title: string;
  readonly items: readonly string[];
};

export const serviceCategories: readonly ServiceCategory[] = [
  { id: "brakes", title: "Brakes", items: ["Pads", "Discs", "Inspection & repair"] },
  {
    id: "suspension",
    title: "Suspension & Steering",
    items: ["Shock absorbers", "Coil springs", "Track rods", "Linkage"],
  },
  { id: "drivetrain", title: "Drivetrain & Starting", items: ["Drive shafts", "Starter motors"] },
  { id: "servicing", title: "Servicing", items: ["Oil & filter", "Transmission fluid", "General servicing"] },
  { id: "tyres", title: "Tyres", items: ["Puncture repair"] },
  { id: "aircon", title: "Air Conditioning", items: ["Gas top-up / recharge"] },
  { id: "electronics", title: "Vehicle Electronics", items: ["Radio upgrades", "Dash cam installation"] },
];

export const priorityIdealFor: readonly string[] = [
  "Urgent brake problems",
  "Vehicle not starting",
  "Suspension or steering problems",
  "Starter motor failure",
  "Cars needing urgent servicing",
  "Selected mobile repairs",
];

export const whyUs: readonly string[] = [
  "Priority appointments available",
  "Same-day availability on selected jobs",
  "Clear pricing before work begins",
  "Mobile service for selected repairs",
  "Workshop based in Derby",
  "Quality parts, professional repairs",
];

export type Review = {
  readonly quote: string;
  readonly name: string;
  readonly isPlaceholder?: boolean;
};

// All three are placeholders (flagged via isPlaceholder) until real Google
// reviews are pasted in — the original copy brief called this out explicitly.
export const reviews: readonly Review[] = [
  { quote: "Insert a genuine Google review here.", name: "Customer name", isPlaceholder: true },
  { quote: "Insert a genuine Google review here.", name: "Customer name", isPlaceholder: true },
  { quote: "Insert a genuine Google review here.", name: "Customer name", isPlaceholder: true },
];

export type UrgencyOption = {
  readonly value: string;
  readonly label: string;
};

export const urgencyOptions: readonly UrgencyOption[] = [
  { value: "today", label: "Today / Urgent" },
  { value: "24h", label: "Within 24 hours" },
  { value: "2-3d", label: "Within 2–3 days" },
  { value: "week", label: "This week" },
  { value: "flexible", label: "Flexible / Just getting a quote" },
];

export type ServiceTypeOption = {
  readonly value: string;
  readonly label: string;
};

export const serviceTypeOptions: readonly ServiceTypeOption[] = [
  { value: "workshop", label: "Workshop appointment" },
  { value: "mobile", label: "Mobile mechanic" },
  { value: "either", label: "Either is fine" },
];
