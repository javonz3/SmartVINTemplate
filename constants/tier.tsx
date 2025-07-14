export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    priceMonthly: "$9/mo",
    priceYearly: "$72/yr",
    description: "Perfect for individual car buyers and sellers.",
    features: [
      "5 VIN analyses per month",
      "Basic vehicle specifications",
      "Market value estimates",
      "Email support",
      "Mobile app access",
    ],
    featured: false,
    cta: "Get Started",
    onClick: () => {},
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "#",
    priceMonthly: "$29/mo",
    priceYearly: "$240/yr",
    description: "Ideal for dealers and automotive professionals.",
    features: [
      "Everything in Basic, plus",
      "50 VIN analyses per month",
      "Complete vehicle history reports",
      "Accident and damage records",
      "Priority email support",
      "Advanced market analytics",
      "API access",
      "Bulk analysis tools",
    ],
    featured: false,
    cta: "Start Free Trial",
    onClick: () => {},
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99/mo",
    priceYearly: "$899/yr",
    description: "Built for large dealerships and automotive businesses.",
    features: [
      "Everything in Professional, plus",
      "Unlimited VIN analyses",
      "Real-time market data",
      "Advanced AI insights",
      "Phone & email support",
      "Custom integrations",
      "White-label solutions",
      "Dedicated account manager",
      "SLA guarantees",
    ],
    featured: true,
    cta: "Contact Sales",
    onClick: () => {},
  },

  {
    name: "Custom",
    id: "tier-custom",
    href: "#",
    priceMonthly: "Contact Us",
    priceYearly: "Contact Us",
    description: "Tailored solutions for enterprise organizations.",
    features: [
      "Everything in Enterprise, plus",
      "Custom data sources",
      "On-premise deployment",
      "Advanced security features",
      "Custom AI model training",
      "24/7 dedicated support",
      "Multi-region hosting",
      "Compliance certifications",
      "Custom reporting dashboards",
      "Volume discounts available",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
];
