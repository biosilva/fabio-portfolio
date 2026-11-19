import type { ImageMetadata } from "astro";

import twCard from "../assets/images/home/true-wealth-card.png";
import twCardMobile from "../assets/images/home/true-wealth-card-mobile.png";
import tradingCard from "../assets/images/home/trading-workbench-card.png";
import tradingCardMobile from "../assets/images/home/trading-workbench-card-mobile.png";
import bankingCard from "../assets/images/home/banking-suite-card.png";
import bankingCardMobile from "../assets/images/home/banking-suite-card-mobile.png";

export interface Project {
  slug: string;
  number: string;
  client: string;
  year: string;
  title: string;
  tags: string[];
  image: ImageMetadata;
  imageMobile: ImageMetadata;
  imageAlt: string;
}

/** Case studies, in the order they appear on the home page. */
export const projects: Project[] = [
  {
    slug: "redesign_tw",
    number: "01",
    client: "True Wealth",
    year: "2026",
    title: "Redesigning the True Wealth app for 35'000 users",
    tags: ["Stakeholder alignment", "Strategy-led structure"],
    image: twCard,
    imageMobile: twCardMobile,
    imageAlt: "True Wealth investment strategy dashboard with an asset-allocation donut chart",
  },
  {
    slug: "trading_workbench",
    number: "02",
    client: "ti&m & VZ",
    year: "2021",
    title: "Trading Workbench: a trading platform for beginners and professionals",
    tags: ["Real-time data", "Customisable dashboards"],
    image: tradingCard,
    imageMobile: tradingCardMobile,
    imageAlt: "Dark Trading Workbench dashboard with live charts and market data",
  },
  {
    slug: "bankingsuite_elounge",
    number: "03",
    client: "ti&m & CIC",
    year: "2020",
    title: "Banking Suite & eLounge: an award-winning e-banking platform for bank CIC",
    tags: ["White-label product", "Design Thinking and Scrum"],
    image: bankingCard,
    imageMobile: bankingCardMobile,
    imageAlt: "Three Banking Suite mobile screens: dashboard, investments and wealth overview",
  },
];

export const getProject = (slug: string) => {
  const p = projects.find((p) => p.slug === slug);
  if (!p) throw new Error(`Unknown project: ${slug}`);
  return p;
};

/** Each case study links to the next one, wrapping around. */
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
