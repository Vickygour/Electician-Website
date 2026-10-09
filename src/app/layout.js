import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Electrician | Professional Electrical Services 24/7",
    template: "%s | Electrician",
  },
  description:
    "Certified electricians for residential, commercial and industrial work. Emergency repairs, rewiring, lighting, solar and maintenance plans.",
  verification: {
    google: "edZY5jVyuplh1xiTkDpHmYpCMZWsS-Hpv3OVyCTKDeE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}