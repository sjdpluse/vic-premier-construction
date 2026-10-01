/** Client-supplied facts: see docs/PROJECT-BRIEF.md. */
export const business = {
  name: "VIC PREMIER CONSTRUCTION TEAM",
  holderType: "Individual",
  abn: "25 938 974 580",
  phone: "0411 786 573",
  phoneInternational: "+61411786573",
  email: "vicpremier_constructionteam@yahoo.com",
  address: "6 Windsor St, Hallam VIC 3803, Australia",
  market: "Melbourne",
  freeQuotes: true,
} as const;

export const contactLinks = {
  phone: `tel:${business.phoneInternational}`,
  email: `mailto:${business.email}`,
  quote: `mailto:${business.email}?subject=${encodeURIComponent("Free quote enquiry")}`,
} as const;
