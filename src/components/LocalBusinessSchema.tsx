import { business } from "@/lib/business";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    telephone: business.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLines[0],
      addressLocality: "Derby",
      postalCode: business.addressLines[1].split(", ")[1],
      addressCountry: "GB",
    },
    openingHoursSpecification: business.hours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.label,
      description: entry.value,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
