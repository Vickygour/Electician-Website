// app/page.js (या app/page.tsx)

import HeroSection from "./Components/HeroSection";

// 1. SEO Title और Meta Description यहाँ डालें
export const metadata = {
  title: 'Electrician Services in Burari, Delhi | BijliBaaz',
  description: 'Looking for electrical repair, wiring or installation services in Burari, Delhi? Contact BijliBaaz to check service availability and book a service.',
};

export default function Home() {
  return <HeroSection />;
}