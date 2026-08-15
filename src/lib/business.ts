export type BusinessHours = {
  readonly label: string;
  readonly value: string;
};

export const business = {
  name: "Stanhope Autoworks",
  tagline: "Professional Vehicle Repairs",
  phoneDisplay: "01332 456 921",
  phoneHref: "tel:+441332456921",
  addressLines: ["14 Stanhope Street", "Derby, DE24 8JX"] as const,
  postcode: "DE24",
  serviceRadiusMiles: 10,
  hours: [
    { label: "Monday – Saturday", value: "8:00 AM – 6:00 PM" },
    { label: "Sunday", value: "Priority appointments only" },
  ] as const satisfies readonly BusinessHours[],
  priorityHoursNote:
    "Priority enquiries accepted until 9:00 PM during current summer hours. Availability varies depending on workload and the repair required.",
  googleReviewsHref: "#",
  directionsHref: "#",
  notificationEmail: "stanhope.autoworks@gmail.com",
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
};

export const reviews: readonly Review[] = [
  {
    quote:
      "Had a brake caliper seize on a Friday afternoon – called Stanhope and they got me in that evening under their priority service. Fair price, no messing about.",
    name: "Daniel",
  },
  {
    quote:
      "Mobile mechanic came out to my workplace and swapped the starter motor in under an hour. Would've been stuck for days waiting at a main dealer.",
    name: "Priya",
  },
  {
    quote:
      "Straightforward pricing before any work started, which is rare these days. My suspension was sorted in one visit.",
    name: "Mark",
  },
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
